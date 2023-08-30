import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{

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
});

router.get('/contato', (req: Request, res: Response)=>{
    res.render('pages/contato');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.render('pages/sobre');
});

export default router;