import Role from '../models/role';
import User from '../models/user';

export const existeEmail = async (email: string) => {
    const usuario = await User.findOne({ where: { email } });
    if (usuario) throw new Error('Email en uso');
    return true;
}

export const existeRole = async (role: string) => {
    const _role = await Role.findOne({ where: { role } });
    if (!_role) throw new Error('El rol no esta definido');
    return true;
}

export const existeUsuarioID = async (id: number) => {
    const _usuario = await User.findByPk(id);
    if (!_usuario) throw new Error('No existe un usuario con dicho id');
    return true;
}