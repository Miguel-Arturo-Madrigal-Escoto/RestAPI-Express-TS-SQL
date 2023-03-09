import express, { Application, json } from 'express';
import cors from 'cors';
import userRouter from '../routes/user';
import sequelize from '../database/config';

class Server {
    private app: Application;
    private port: string;
    private serverRoutes = {
        user: '/api/users'
    }

    constructor(){
        this.app  = express();
        this.port = process.env.PORT!;

        this.dbConnection();

        this.middlewares();

        this.routes();
    }

    private dbConnection = async () => {
        try {
            await sequelize.authenticate();
            console.log('Conexión exitosa');
        } catch (error) {
            console.log(error);
        }
    }

    private middlewares = () => {
        this.app.use(cors());
        this.app.use(json());
    }

    private routes = () => {
        this.app.use(this.serverRoutes.user, userRouter);
    }

    public listen = () => {
        this.app.listen(this.port, () => {
            console.log('Listening at: ' + this.port);
        });
    }

}


export default Server;