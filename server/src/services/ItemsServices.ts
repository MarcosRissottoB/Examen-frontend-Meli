import axios from 'axios';

export default class ItemsServices {
    // Obtiene los items desde la API de Meli
    baseUrl: string = 'https://api.mercadolibre.com/items/​:id';
    constructor() {

    }
    async getItemList () {
        const response = await axios.get(this.baseUrl);
        console.log('Response: ', response);
    }

}