import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{

    let user = {
        name : 'Igor',
        lastname: 'Simões da Silveira',
        age: 23
    };

    res.render('home', {
        user
    });
});

router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulário de Contato');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Sobre');
});

export default router;