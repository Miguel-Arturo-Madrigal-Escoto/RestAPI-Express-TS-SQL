import { Request, Response } from 'express';
import { GetUsersQuery } from '../dto/user/get-user.dto';

import User from '../models/user';
import { CreateUserBody } from '../dto/user/create-user.dto';
import { UpdateUserBody, UpdateUserParams } from '../dto/user/update-user.dto';
import { DeleteUserParams } from '../dto/user/delete-user.dto';

export const getUsers = async (req: Request<{},{},{},GetUsersQuery>, res: Response) => {
    
    try {
        const {  limit = 5, offset = 0 } = req.query;
        const query = { estado: true };

        const [usuarios, total] = await Promise.all([
            User.findAll({ attributes: ['id', 'nombre', 'email', 'role'], offset: +offset, limit: +limit, where: query }),
            User.count({ where: query })
        ]);


        res.status(200).json({
            ok: true,
            usuarios,
            total
        })

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
    
}

export const addUser = async (req: Request<{},{},CreateUserBody,{}>, res: Response) => {
    
    try {  
        /*const usuario = User.build(req.body);
        await usuario.save();*/

        const usuario = await User.create(req.body);
        usuario.validate(); // se llama opcionalmente


        const { dataValues: { password, ..._usuario } } = usuario;

        res.status(201).json({
            ok: true,
            usuario: _usuario
        });

    } catch (error: any) {
        if (error.name === 'SequelizeValidationError'){
            res.status(400).json({
                ok: true,
                msg: error.errors.map((e:any ) => ({ message: e.message, path: e.path }))
            });
        }
        else {
            res.status(400).json({
                ok: true,
                msg: 'Hable con el administrador'
            });
        }
 
    }  
}

export const putUsers = async (req: Request<UpdateUserParams,{},UpdateUserBody,{}>, res: Response) => {
    try {
        const { google, estado, id, ...usuario } = req.body;

        const [affectedRows, _usuario] = await Promise.all([
            User.update(usuario, { where: { id: +req.params.id!  } }),
            User.findByPk(+req.params.id!, { attributes: ['nombre', 'email', 'role'] })
        ]);

        res.status(200).json({
            ok: true,
            affectedRows: affectedRows[0] || 0,
            usuario: _usuario
        })

    } catch (error: any) {
        if (error.name === 'SequelizeValidationError'){
            res.status(400).json({
                ok: true,
                msg: error.errors.map((e:any ) => ({ message: e.message, path: e.path }))
            });
        }
        else {
            res.status(400).json({
                ok: true,
                msg: 'Hable con el administrador'
            });
        }
    }
}

export const deleteUsers = async (req: Request<DeleteUserParams>, res: Response) => {
    try {
        const { id } = req.params;
        // const affectedRows = await User.destroy({ where: { id: +id! } });
        const [affectedRows, usuario] = await Promise.all([
            User.update({ estado: false }, { where: { id: +id! } }),
            User.findByPk(+id!, { attributes: ['nombre', 'email', 'role'] })
        ]);


        res.status(200).json({
            ok: true,
            affectedRows: affectedRows[0] || 0,
            usuario
        })
        
    } catch (error) {
        res.status(400).json({
            ok: true,
            msg: 'Hable con el administrador'
        });
    }
}