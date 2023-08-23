import express, { Request, Response } from 'express';
import mainRoutes from './routes/index';
import noticiaRoutes from './routes/noticia';
import vooRoutes from './routes/voo';

const server = express();

server.use(mainRoutes);
server.use('/noticia', noticiaRoutes);
server.use('/voo', vooRoutes);





server.listen(3000);