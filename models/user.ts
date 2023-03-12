import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from '../database/config';
import { genSaltSync, hashSync } from 'bcryptjs';


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id:        CreationOptional<number>;
    declare nombre:    string;
    declare email:     string;
    declare password:  string;
    declare role:      string;
    declare img:       CreationOptional<string>;
    declare google:    CreationOptional<boolean>;
    declare estado:    CreationOptional<boolean>;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Email inválido'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        set(password: string){
            this.setDataValue('password', hashSync(password, genSaltSync()))
        },
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM,
        values: ['ADMIN_ROLE', 'USER_ROLE'],
        allowNull: false,
        validate: {
            isIn: {
                args: [['ADMIN_ROLE', 'USER_ROLE', 'VENTAS_ROLE']],
                msg: 'Rol inválido. Debe ser alguno de estos: ADMIN_ROLE, USER_ROLE'
            }
        }
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    },
    google: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},{
    sequelize,
    tableName: 'usuarios',
    timestamps: false
});

export default User;