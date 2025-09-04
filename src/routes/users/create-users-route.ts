import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { CreateUsersController } from "../../controllers/users/create-users-controller";

export async function createUsersRoute(fastify: FastifyInstance) {
  fastify.post(
    "/_api/users",
    (request: FastifyRequest, reply: FastifyReply) => {
      const createUsersController = new CreateUsersController();
      return createUsersController.handle(request, reply);
    }
  );
}
