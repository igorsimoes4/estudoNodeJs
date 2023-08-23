import { Router, Request, Response } from 'express';

const router = Router();

router.get('/:slug', (req: Request, res: Response)=>{
    let slug: string = req.params.slug;
    res.send(`Noticia: ${slug}`);
});

export default router;