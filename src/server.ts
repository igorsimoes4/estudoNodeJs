import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response)=>{
    res.send('Ola mundo!');
});

server.get('/noticia/:slug', (req: Request, res: Response)=>{
    let slug: string = req.params.slug;
    res.send(`Noticia: ${slug}`);
});

server.get('/voo/:origem-:destino', (req: Request, res: Response)=>{
    let {origem, destino} = req.params;
    res.send(`Procurando voos de: ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});

server.listen(3000);