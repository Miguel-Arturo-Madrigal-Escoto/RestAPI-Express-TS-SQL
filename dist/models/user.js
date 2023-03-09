"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../database/config"));
const bcryptjs_1 = require("bcryptjs");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                msg: 'Nombre inválido'
            }
        }
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Email inválido'
            }
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        set(password) {
            this.setDataValue('password', (0, bcryptjs_1.hashSync)(password, (0, bcryptjs_1.genSaltSync)()));
        },
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['ADMIN_ROLE', 'USER_ROLE'],
        allowNull: false,
        validate: {
            isIn: {
                args: [['ADMIN_ROLE', 'USER_ROLE']],
                msg: 'Rol inválido. Debe ser alguno de estos: ADMIN_ROLE, USER_ROLE'
            }
        }
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    google: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize: config_1.default,
    tableName: 'usuarios',
    timestamps: false
});
exports.default = User;
//# sourceMappingURL=user.js.map