"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('super_cafe', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: true
});
exports.default = sequelize;
//# sourceMappingURL=config.js.map