import { Request, Response } from 'express';
import { compareSync } from  'bcryptjs';
import { LoginBody } from '../dto/auth/login.dto';
import User from '../models/user';

export const login = async (req: Request<{},{},LoginBody,{}>, res: Response) => {
    
    const { email, password } = req.body;

    try {

        const usuario = await User.findOne({ where: { email, estado: true } });

        if (compareSync(password, usuario!.password)){

        }
         
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
    
}