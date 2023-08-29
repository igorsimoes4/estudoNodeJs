import express, { Request, Response } from 'express';
import mainRoutes from './routes/index';
import noticiaRoutes from './routes/noticia';
import vooRoutes from './routes/voo';

const server = express();

// Rotas Principais //
server.use(mainRoutes);
// Rotas para Noticias //
server.use('/noticia', noticiaRoutes);
// Rotas para Voos //
server.use('/voo', vooRoutes);

// Rota de 404 //
server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não Encontrada!');
});




// Cria o Server //
server.listen(3000);