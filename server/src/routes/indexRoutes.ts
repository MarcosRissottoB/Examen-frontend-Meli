import { Request, Response, Router } from 'express';

class IndexRoutes {
    // Indicamos los tipos de datos.
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', (req, res) => res.send('Api: /api/items'));
    }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();

export default indexRoutes.router;