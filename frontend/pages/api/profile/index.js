import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      try {
        const userId = req.body.userId;
        const user = await prisma.user.findFirst({
          where: { id: userId },
        });
        res.send({ success: true, code: 200, data: user });
      } catch (error) {
        console.log(error);
      }
    }
    default:
      res.status(404).send({ message: "Method Not Allowed" });
      break;
  }
}
