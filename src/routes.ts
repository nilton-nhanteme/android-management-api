/*
  Todas routas serão escritas nesse arquivo e o server.js irá escutar e delegar as rotas para um arquivo centralizador.
 */
import { Router, type Request, type Response } from "express";

const apiRouter = Router();

// Rota de monitoramento e verificação de disponibilidade online
apiRouter.get("/health", (request: Request, response: Response) => {
  response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Android-MDM-Core'
  });
});

export { apiRouter };