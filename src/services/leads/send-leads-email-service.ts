import admin from "firebase-admin";
import { transporter } from "../emails/transporter";
import { leadEmail } from "../../templates/lead-email";

class SendLeadsEmailService {
  async execute() {
    const db = admin.firestore();

    const leadEmailAlreadyExists = await db.collection("leads").get();

    if (leadEmailAlreadyExists.empty) {
      throw new Error("Nenhum lead encontrado!");
    }

    for (const doc of leadEmailAlreadyExists.docs) {
      const lead = doc.data();

      if (!lead.email) continue; // pula usuários sem e-mail

      const html = leadEmail
        .replace(/{{email}}/g, lead.email)
        .replace(/{{logo_url}}/g, "https://sua-cdn.com/logo.png")
        .replace(/{{brand_url}}/g, "https://automadetech.com")
        .replace(/{{cta_url}}/g, "https://automadetech.com/demo")
        .replace(/{{cta_label}}/g, "Agendar demonstração")
        .replace(
          /{{unsubscribe_url}}/g,
          "https://automadetech.com/unsubscribe"
        );

      await transporter.sendMail({
        from: `"Automadetech" <${process.env.EMAIL_USER}>`,
        to: lead.email,
        subject: "Pré lançamento da Automadetech",
        text: "Olá! Este é um e-mail de pré lançamento da plataforma Automadetech.",
        html,
      });

      console.log(`E-mail enviado para: ${lead.email}`);
    }
  }
}

export { SendLeadsEmailService };
