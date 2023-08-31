import { Router, Request, Response } from 'express';

// Importando os Controllers
import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

// Rotas Institucionais //
router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

// Rotas de Usuários //
router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade', UserController.idadeAction);

export default router;