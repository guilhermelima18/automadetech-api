import admin from "firebase-admin";

interface ICreateUserService {
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ email, password }: ICreateUserService) {
    const db = admin.firestore();

    const docRef = await db.collection("users").add({ email, password });

    if (!docRef) {
      throw new Error("Não foi possível criar o usuário!");
    }

    return { id: docRef.id, message: "Usuário criado com sucesso!" };
  }
}

export { CreateUserService };
