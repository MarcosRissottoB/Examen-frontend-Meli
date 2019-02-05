"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Routes {
    constructor() {
        this.router = express_1.Router();
    }
    routes() {
        this.router.get('/', (req, res) => res.send('Hello'));
    }
}
new Routes();
