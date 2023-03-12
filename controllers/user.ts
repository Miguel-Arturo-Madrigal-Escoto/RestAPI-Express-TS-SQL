import { Request, Response } from 'express';
import { CreateUserBody } from '../dto/create-user.dto';
import { UpdateUserBody, UpdateUserParams } from '../dto/update-user.dto';
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    
    try {
        
        const usuarios = await User.findAll({ attributes: ['id', 'nombre', 'email', 'role'] });

        res.status(200).json({
            ok: true,
            usuarios
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

export const deleteUsers = async (req: Request, res: Response) => {
    res.json({
        ok: true, 
        msg: 'delete users'
    })
}