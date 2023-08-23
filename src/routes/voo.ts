import { Router, Request, Response } from 'express';

const router = Router();


router.get('/:origem-:destino', (req: Request, res: Response)=>{
    let {origem, destino} = req.params;
    res.send(`Procurando voos de: ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});

export default router;