import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify();

app.setErrorHandler((error, _, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  app.register(cors);

  try {
    app
      .listen({
        port: 3333,
        host: "0.0.0.0",
      })
      .then(async () => {
        console.log("Servidor rodando na porta: ", 3333);
      });
  } catch (error) {
    console.log("Ocorreu um erro no servidor: ", error);
  }
};

start();
