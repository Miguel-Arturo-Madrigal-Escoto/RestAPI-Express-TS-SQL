import express, { Application, json } from 'express';
import cors from 'cors';
import userRouter from '../routes/user';

class Server {
    private app: Application;
    private port: string;
    private serverRoutes = {
        user: '/api/users'
    }

    constructor(){
        this.app  = express();
        this.port = process.env.PORT!;

        this.middlewares();

        this.routes();
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