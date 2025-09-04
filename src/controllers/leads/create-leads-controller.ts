import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

import { CreateLeadsService } from "../../services/leads/create-leads-service";

const leadsSchema = z.object({
  email: z.string().email(),
});

class CreateLeadsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = leadsSchema.safeParse(request.body);

      if (!success) {
        return reply.code(400).send({ error: "E-mail é obrigatório." });
      }

      const createLeadsService = new CreateLeadsService();
      const createLeads = await createLeadsService.execute({
        email: data.email,
      });

      return reply.code(200).send({ data: createLeads });
    } catch (error: any) {
      if (
        error.message === "Não foi possível criar o lead!" ||
        error.message === "O e-mail já existe na coleção!"
      ) {
        return reply.status(400).send({ error: true, message: error.message });
      }

      return reply.status(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { CreateLeadsController };
