import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { SendLeadsEmailController } from "../../controllers/leads/send-leads-email-controller";

export async function sendLeadEmailRoute(fastify: FastifyInstance) {
  fastify.post(
    "/send-lead-email",
    (request: FastifyRequest, reply: FastifyReply) => {
      const sendLeadsEmailController = new SendLeadsEmailController();
      return sendLeadsEmailController.handle(request, reply);
    }
  );
}
