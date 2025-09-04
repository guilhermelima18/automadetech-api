import fastify from "fastify";
import cors from "@fastify/cors";
import admin from "firebase-admin";

import firebaseService from "../automadetech-firebase.json";

import { createUsersRoute } from "./routes/users/create-users-route";
import { createLeadsRoute } from "./routes/leads/create-lead-route";

// Inicializa o Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(firebaseService as admin.ServiceAccount),
});

const app = fastify({ logger: true });

app.setErrorHandler((error, _, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  app.register(cors);
  app.register(createUsersRoute);
  app.register(createLeadsRoute);

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
