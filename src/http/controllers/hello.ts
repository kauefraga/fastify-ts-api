import {
  FastifyRequest as Req,
  FastifyReply as Rep,
} from 'fastify';

interface IQueryParams {
  name: string;
}

export async function HelloController(
  request: Req<{ Querystring: IQueryParams }>,
  reply: Rep,
) {
  const { name } = request.query;

  return reply.status(200).send({
    message: `Hello, ${name || 'world'}!`,
    now: new Date(),
  });
}
