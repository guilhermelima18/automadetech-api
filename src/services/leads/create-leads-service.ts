import admin from "firebase-admin";

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

    return { id: docRef.id, message: "Lead criado com sucesso!" };
  }
}

export { CreateLeadsService };
