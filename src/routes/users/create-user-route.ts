import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateUserController } from "../../controllers/users/create-user-controller";

export async function createUserRoute(fastify: FastifyInstance) {
  fastify.post("/users", (request: FastifyRequest, reply: FastifyReply) => {
    const createUserController = new CreateUserController();
    return createUserController.handle(request, reply);
  });
}
