import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
  switch (req.method) {
    case "POST": {
      const data = req.body;
      try {
        const event = await prisma.event.create({
          data: { ...data },
        });
        res.send({ success: true, code: 200, data: event });
      } catch (error) {
        console.log(error);
      }
    }
    case "GET": {
      const userId = req.body.userId;
      const events = await prisma.event.findMany({
        where: { userId: userId },
      });
      res.send({ success: true, code: 200, data: events });
    }
    default:
      res.status(404).send({ message: "Method Not Allowed" });
      break;
  }
}
