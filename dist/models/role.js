"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../database/config"));
class Role extends sequelize_1.Model {
}
Role.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    }
}, {
    sequelize: config_1.default,
    tableName: 'roles',
    timestamps: false
});
exports.default = Role;
//# sourceMappingURL=role.js.map