import { Request, Response } from 'express';
import { ReqUserBody } from '../dto/create-user.dto';
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    
    const usuarios = await User.findAll({
        attributes: ['id', 'nombre', 'email']
    });
    
    res.json({
        ok: true, 
        usuarios
    })
}

export const addUser = async (req: Request<{},{},ReqUserBody,{}>, res: Response) => {
    
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

export const putUsers = async (req: Request, res: Response) => {
    res.json({
        ok: true, 
        msg: req.params,
        msg2: req.query
    })
}

export const deleteUsers = async (req: Request, res: Response) => {
    res.json({
        ok: true, 
        msg: 'delete users'
    })
}