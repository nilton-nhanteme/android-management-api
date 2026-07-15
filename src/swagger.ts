/** 
 * arquivo é o cérebro que lê os seus schemas Zod e constrói o documento OpenAPI final.
*/

import { OpenAPIRegistry, OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { UserSchema } from './schemas/user.schema.js';
import { PORT } from './server.js'

export const registry = new OpenAPIRegistry();

// Registra o componente de Usuário para que o swagger o reconheça globalmente
registry.registerPath({
  method: 'get',
  path: '/users',
  summary: 'Retorna a lista de usuários cadastrados',
  description: 'Endpoint que lista todos os usuários cadastrados usando tipos do Zod',
  responses: {
    200: {
      description: 'Sucesso ao Listar usuários',
      content: {
        'application/json': {
          schema: registry.register('User', UserSchema),
        },
      },
    },
  },
});

// Gera o documento Swagger JSON final
export function generateSwaggerDoc() {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: '3.0.0',
    info: {
      title: 'Android Management API com Zod',
      version: '1.0.0',
      description: 'Documentação gerada de forma automática com schemas do Zod!',
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api-docs`
      }
    ]
  })
}
