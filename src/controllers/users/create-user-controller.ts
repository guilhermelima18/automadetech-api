import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { CreateUserService } from "../../services/users/create-user-service";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = authSchema.safeParse(request.body);

      if (!success) {
        return reply
          .code(400)
          .send({ error: "E-mail e password são obrigatórios." });
      }

      const createUserService = new CreateUserService();
      const createUser = await createUserService.execute({
        email: data.email,
        password: data.password,
      });

      return reply.code(200).send({ data: createUser });
    } catch (error: any) {
      console.log(error);

      if (error.message === "Não foi possível criar o usuário!") {
        return reply.status(400).send({ error: error.message });
      }

      return reply.status(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { CreateUserController };
