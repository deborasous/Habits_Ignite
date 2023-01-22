import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient(); //cria a conexão com o banco de dados

app.register(cors);
//ROT
/*É utilizado o mesmo metodo HTTP: 
Get: vai no banco pegar alguma coisa e retorna alguma informação
Post: cria alguma coisa no banco
Put: atualiza algum recurso por completo
Patch: atualiza uma unformação expecifica de um recurso
Delete: deleta alguma coisa do banco */
app.get("/", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Beber",
      },
    },
  });
  return habits;
});


app.listen({
    port: 3000,
  }).then(() => {
    console.log("Visualiza servidor rodando");
  });
