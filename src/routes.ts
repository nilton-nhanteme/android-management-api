/*
  Todas routas serão escritas nesse arquivo e o server.js irá escutar e delegar as rotas para um arquivo centralizador.
 */
import { Router, type Request, type Response } from "express";

const apiRouter = Router();

apiRouter.get("/users", (request: Request, response: Response) => {
  // Retorna os dados que seguem o formato do UserSchema
  response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Android-MDM-Core'
  });
});

export { apiRouter };