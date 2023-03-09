import { Request, Response } from 'express';
import { ReqUserBody } from '../dto/create-user.dto';
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    res.json({
        ok: true, 
        msg: 'ola'
    })
}

export const addUser = async (req: Request<{},{},ReqUserBody,{}>, res: Response) => {
    
    try {  
        /*const usuario = User.build(req.body);
        await usuario.save();*/

        const usuario = await User.create(req.body);
        usuario.validate();

        res.status(201).json({
            ok: true,
            usuario
        });

    } catch (error: any) {
        res.status(400).json({
            ok: true,
            errors: error.errors.map((e:any ) => ({ message: e.message, path: e.path }))
        });
 
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