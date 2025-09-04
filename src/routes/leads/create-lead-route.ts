import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { CreateLeadsController } from "../../controllers/leads/create-leads-controller";

export async function createLeadsRoute(fastify: FastifyInstance) {
  fastify.post(
    "/_api/leads",
    (request: FastifyRequest, reply: FastifyReply) => {
      const createLeadsController = new CreateLeadsController();
      return createLeadsController.handle(request, reply);
    }
  );
}
