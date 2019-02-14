import { Request, Response, Router } from 'express';
import axios from 'axios';
import https from 'https';

// Models
import {Item} from '../models/Item';
import { NextFunction } from 'connect';

class ItemsRoutes {

    router: Router;
    item: Item = { name: '', id: ''};
    items: Item[] = [];

    
    
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        // Obtiene un item
        // this.router.get('/items/:query', this.getItem);
        // Obtiene todos los items
        this.router.get('/', this.getItems);
    }

    // Obtiene un item 
    // async getItem(req: Request, res: Response) {
    //     let query = req.params.query;
    //     this.getItems(req, res);
    //     const item = await this.items.filter( item => item.name === query);
    //     console.log('Item: ', item);
    //     res.json(item);
    // }

    // Obtiene todos los items
    getItems(req: Request, res: Response, next: NextFunction) {
        // const items = await this.items;
        // await this.items.map(
        //     items => console.log('items: ', items)
        // )
        // const baseUrl: string = 'https://api.mercadolibre.com/items/​1';
        const baseUrl: string = 'https://jsonplaceholder.typicode.com/todos/1'
        const response = https.get(baseUrl);
        console.log('Response: ', response);
        res.json(response);
    }
} 

const itemsRoutes = new ItemsRoutes(); 
export default itemsRoutes.router;