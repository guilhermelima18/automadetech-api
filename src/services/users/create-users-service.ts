import admin from "firebase-admin";

interface ICreateUsersService {
  email: string;
  password: string;
}

class CreateUsersService {
  async execute({ email, password }: ICreateUsersService) {
    const db = admin.firestore();

    const docRef = await db.collection("users").add({ email, password });

    if (!docRef) {
      throw new Error("Não foi possível criar o usuário!");
    }

    return { id: docRef.id, message: "Usuário criado com sucesso!" };
  }
}

export { CreateUsersService };
