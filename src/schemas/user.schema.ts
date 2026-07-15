import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { email, z } from "zod";

//Activar as extensões do OpenAPI no Zod
extendZodWithOpenApi(z);

//Schema de validação de rotas/endpoints
export const UserSchema = z.object({
  id: z.string().uuid().openapi({
    description: 'ID único do usuário',
    example: '123e4567-e89b-12d3-a456-426614174000'
  }),
  name: z.string().min(3).openapi({
    description: 'Nome do usuário',
    example: 'John Doe'
  }),
  email: z.string().email().openapi({
    description: 'Endereço de e-mail do usuário',
    example: 'nnnhanteme@gmail.com'
  })
}).openapi('User'); // Nome do componente que aparecerá no Swagger

export type User = z.infer<typeof UserSchema>;