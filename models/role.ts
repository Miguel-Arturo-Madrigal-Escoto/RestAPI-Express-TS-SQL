import { InferAttributes, InferCreationAttributes, Model, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../database/config';


class Role extends Model<InferAttributes<Role>, InferCreationAttributes<Role>>{
    declare id:  CreationOptional<number>;
    declare role: string;
}

Role.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'roles',
    timestamps: false
});

export default Role;