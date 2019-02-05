"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
//Router
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
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
        //Middlewares
        this.app.use(morgan_1.default('dev'));
        this.app.use(helmet_1.default());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor escuchando en el puerto: ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
