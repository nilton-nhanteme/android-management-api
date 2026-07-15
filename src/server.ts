import express, { response, type Request, type Response } from "express";
import dotenv from "dotenv";
import { apiRouter } from "./routes.js";
import path from "path";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { fileURLToPath } from "url";

// 1. Carregar as variavés de ambiente do arquivo .env e criar instância express e portas
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 2. Middlewares para ler requisições em formato JSON
// ExpressJs segue o principio minimalista, não assume nada sobre o formato dos dados que chegam na requisição.
app.use(express.json());

// 3. Registro de Rotas Globais
// Todas as nossas URLs de API serão prefixadas com api/v1
app.use('api/v1', apiRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração do Swagger
const swaggerOptions: swaggerJsDoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Android Management API',
      version: '1.0.0',
      description: 'Documentação oficial das rotas do projecto',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      },
    ],
  },
  apis: [
    path.resolve(__dirname, './routes.ts'),
    path.resolve(__dirname, './route.js'),
  ]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// 4. Tratamento de rotas inexistentes (404)
app.use((request, response) => {
  response.status(404).json({
    error: 'Rota não encontrada'
  });
});

// 5. Iniciar o servidor
app.listen(PORT, () => {
  console.log('================================================')
  console.log('        ANDROID MANAGEMENT SERVER ONLINE        ')
  console.log(`                  Porta: ${PORT}                `)
  console.log(`   SWAGGER: http://localhost:${PORT}/api-docs`   )
  console.log('================================================')
}).on('error', (err: any) => {
  if (err.code ==='EADDRINUSE') {
      console.error(`ERRO: A porta ${PORT} já está sendo utilizada por outro serviço.`)
  } else {
    console.error(`Erro inesperado ao iniciar o servidor:`, err);
  }
});