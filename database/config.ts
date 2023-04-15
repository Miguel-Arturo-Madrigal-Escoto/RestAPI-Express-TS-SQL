import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('super_cafe', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: true
});

export default sequelize;