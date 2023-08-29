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

    res.render('home', {
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
    res.send('Formulário de Contato');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Sobre');
});

export default router;