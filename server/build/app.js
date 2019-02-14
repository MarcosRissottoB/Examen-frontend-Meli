"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
//Router
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const ItemsRoutes_1 = __importDefault(require("./routes/ItemsRoutes"));
class Server {
    constructor() {
        // Creamos la instancia de express.
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        // Si existe un puerto en el sistema lo usamos, si no seteamos el 3000.
        this.app.set('port', process.env.port || 5000);
        // Middlewares
        this.app.use(morgan_1.default('dev'));
        // Para que el servidor pueda entender formato json.
        this.app.use(express_1.default.json());
        // Para que la app, pueda soportar envios de formularios.
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(helmet_1.default());
        // Reduce el peso de las respuestas.
        this.app.use(compression_1.default());
        // Valida servidor.
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use(IndexRoutes_1.default);
        this.app.use('/api/items', ItemsRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor escuchando en el puerto: ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
