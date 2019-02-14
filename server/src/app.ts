import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';


//Router
import IndexRoutes from './routes/IndexRoutes';
import ItemsRoutes from './routes/ItemsRoutes';

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

        // Middlewares
        this.app.use(morgan('dev'));
        // Para que el servidor pueda entender formato json.
        this.app.use(express.json());
        // Para que la app, pueda soportar envios de formularios.
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(helmet());
        // Reduce el peso de las respuestas.
        this.app.use(compression());
        // Valida servidor.
        this.app.use(cors());
    }

    routes () {
        this.app.use(IndexRoutes);
        this.app.use('/api/items', ItemsRoutes);
    }

    start () {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor escuchando en el puerto: ${this.app.get('port')}`);
        })
    }
}

const server = new Server();
server.start();