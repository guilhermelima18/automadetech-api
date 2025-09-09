import admin from "firebase-admin";
import { leadEmail } from "../../templates/lead-email";
import { transporter } from "../emails/transporter";

interface ICreateLeadsService {
  email: string;
}

class CreateLeadsService {
  async execute({ email }: ICreateLeadsService) {
    const db = admin.firestore();

    const leadEmailAlreadyExists = await db
      .collection("leads")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (!leadEmailAlreadyExists.empty) {
      throw new Error("O e-mail já existe na coleção!");
    }

    const docRef = await db.collection("leads").add({ email });

    if (!docRef) {
      throw new Error("Não foi possível criar o lead!");
    }

    const html = leadEmail
      .replace(/{{email}}/g, email)
      .replace(/{{logo_url}}/g, "https://sua-cdn.com/logo.png")
      .replace(/{{brand_url}}/g, "https://automadetech.com")
      .replace(/{{cta_url}}/g, "https://automadetech.com/demo")
      .replace(/{{cta_label}}/g, "Agendar demonstração")
      .replace(/{{unsubscribe_url}}/g, "https://automadetech.com/unsubscribe");

    await transporter.sendMail({
      from: `"Automadetech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Pré lançamento da Automadetech",
      text: "Olá! Este é um e-mail de pré lançamento da plataforma Automadetech.",
      html,
    });

    return { id: docRef.id, message: "Lead criado com sucesso!" };
  }
}

export { CreateLeadsService };
