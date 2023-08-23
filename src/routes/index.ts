import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.send('Home');
});

router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulário de Contato');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Sobre');
});

export default router;