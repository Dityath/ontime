import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST": {
      const { email, password } = req.body;

      try {
        const user = await prisma.user.findFirst({
          where: { email: email },
        });
        if (user.password) {
          const validatePass = await bcrypt.compare(password, user.password);
          if (validatePass) {
            res.send({ success: true, code: 200, data: user });
          } else {
            res.status(401).send({ message: "Incorrect email or password" });
          }
        } else {
          res.status(401).send({ message: "User doesn't exist" });
        }
      } catch (error) {
        console.log(error);
      }
      break;
    }
    default:
      res.status(404).send({ message: "Method Not Allowed" });
      break;
  }
}
