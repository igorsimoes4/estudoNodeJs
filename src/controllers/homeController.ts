import {  Request, Response  } from 'express';

// Importando o Model Product
import {  Product  } from '../models/Product';

export const home = ( req: Request, res: Response ) => {

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let user = {
        name : 'Igor',
        lastname: 'Simões da Silveira',
        age: 23
    };

    let list = Product.getall();
    let expensiveList = Product.getPriceAfter(12);

    res.render('pages/home', {
        user,
        showWelcome: true,
        showOld,
        products: list,
        expensives: expensiveList,
        lista: [
            'Alguma coisa legal',
            'Alguma coisa legal',
            'Alguma coisa legal',
            'Alguma coisa legal'
        ]
    });
};