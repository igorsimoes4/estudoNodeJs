import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', ( req: Request, res: Response )=>{

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

router.get('/contato', ( req: Request, res: Response )=>{
    res.render('pages/contato');
});

router.get('/sobre', ( req: Request, res: Response )=>{
    res.render('pages/sobre');
});

router.get('/nome', ( req: Request, res: Response )=>{

    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
});

router.get('/idade', ( req: Request, res: Response ) => {
    let idade: number = 0;
    let mostraridade: boolean = false;

    if( req.query.ano ) {
        let anoNascimento: number = parseInt(req.query.ano as string);
        let anoAtual: number = new Date().getFullYear();

        idade = anoAtual - anoNascimento;
        mostraridade = true;

    }   
    

    res.render('pages/idade', {
        idade,
        mostraridade
    });
});

export default router;