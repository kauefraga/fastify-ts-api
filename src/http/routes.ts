import { FastifyInstance } from 'fastify';
import { HelloController } from './controllers/hello';

export async function routes(
  fastify: FastifyInstance,
) {
  fastify.get('/v1', HelloController);
}
