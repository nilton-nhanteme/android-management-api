/*
  Todas routas serão escritas nesse arquivo e o server.js irá escutar e delegar as rotas para um arquivo centralizador.
 */
import { Router, type Request, type Response } from "express";
import { companyRouter } from './modules/company/company.routes.js'; // Importa a rota

const apiRouter = Router();

apiRouter.use('/companies', companyRouter)

export { apiRouter };