import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";
import admin from "firebase-admin";

import { createUsersRoute } from "../src/routes/users/create-users-route";
import { createLeadsRoute } from "../src/routes/leads/create-lead-route";

// Inicializa o Firebase Admin (evita inicializar duas vezes)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

const app = fastify();

// Middleware e rotas
app.setErrorHandler((error, _, reply) => {
  reply.code(400).send({ message: error.message });
});

app.register(cors);
app.register(createUsersRoute);
app.register(createLeadsRoute);

// Handler para Vercel (sem listen!)
export default async function handler(req: any, res: any) {
  await app.ready(); // garante que tudo está registrado
  app.server.emit("request", req, res);
}
