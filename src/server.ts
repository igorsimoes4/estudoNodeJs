import express, { Request, Response } from 'express';
import path from 'path';

// Importando o Template Engine //
import mustache from 'mustache-express';

// Importando as Rotas //
import mainRoutes from './routes/index';
import noticiaRoutes from './routes/noticia';
import vooRoutes from './routes/voo';


const server = express();

// Configurando o Template Mustache //
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

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