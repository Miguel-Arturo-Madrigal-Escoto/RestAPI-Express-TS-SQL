import { Request, Response } from "express"

export const getUsers = async (req: Request, res: Response) => {
    res.json({
        ok: true, 
        msg: 'ola'
    })
}

export const postUsers = async (req: Request, res: Response) => {
    res.json({
        ok: true, 
        msg: req.body
    })
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