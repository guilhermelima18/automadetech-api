import { FastifyReply, FastifyRequest } from "fastify";
import { SendLeadsEmailService } from "../../services/leads/send-leads-email-service";

class SendLeadsEmailController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const sendLeadsEmailService = new SendLeadsEmailService();
      const sendLeadsEmail = await sendLeadsEmailService.execute();

      return reply.code(200).send({ data: sendLeadsEmail });
    } catch (error: any) {
      if (error.message === "Nenhum lead encontrado!") {
        return reply.status(400).send({ error: true, message: error.message });
      }

      return reply.status(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { SendLeadsEmailController };
