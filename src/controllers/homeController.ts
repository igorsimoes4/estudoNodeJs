import {  Request, Response  } from 'express';

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

    res.render('pages/home', {
        user,
        showWelcome: true,
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto Z', price: 20}
        ],
        lista: [
            'Alguma coisa legal',
            'Alguma coisa legal',
            'Alguma coisa legal',
            'Alguma coisa legal'
        ]
    });
};