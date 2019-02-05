import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

//Router
import indexRoutes from './routes/indexRoutes';


class Server {
    // Indicamos los tipos de datos.
    public app: express.Application;

    constructor () {
        // Creamos la instancia de express.
        this.app = express();
        this.config();
        this.routes();
    }

    config ( ) {
        // Si existe un puerto en el sistema lo usamos, si no seteamos el 3000.
        this.app.set('port', process.env.port || 5000);

        //Middlewares
        this.app.use(morgan('dev'));
        this.app.use(helmet());
    }

    routes () {
        this.app.use(indexRoutes);
    }

    start () {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor escuchando en el puerto: ${this.app.get('port')}`);
        })
    }
}

const server = new Server();
server.start();