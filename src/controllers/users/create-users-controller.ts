import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { CreateUsersService } from "../../services/users/create-users-service";

const usersSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

class CreateUsersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = usersSchema.safeParse(request.body);

      if (!success) {
        return reply
          .code(400)
          .send({ error: "E-mail e password são obrigatórios." });
      }

      const createUsersService = new CreateUsersService();
      const createUsers = await createUsersService.execute({
        email: data.email,
        password: data.password,
      });

      return reply.code(200).send({ data: createUsers });
    } catch (error: any) {
      if (error.message === "Não foi possível criar o usuário!") {
        return reply.status(400).send({ error: error.message });
      }

      return reply.status(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { CreateUsersController };
