import express, { Request, Response } from 'express';
import mainRoutes from './routes/index';
import noticiaRoutes from './routes/noticia';
import vooRoutes from './routes/voo';
import path from 'path';

const server = express();

// Definindo rota para arquivo Publicos //
server.use(express.static( path.join(__dirname, '../public') ));

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