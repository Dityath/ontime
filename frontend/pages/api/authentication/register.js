import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import validateEmail from "../../../helper/validateEmail";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST": {
      const data = req.body;
      if (!validateEmail(data.email)) {
        res.status(422).send({ message: "Invalid Email" });
      }

      if (!(data.name && data.password)) {
        res.status(400).send({ message: "Name and password must exist" });
      }

      try {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        const user = await prisma.user.create({ data: { ...data } });
        res.send(true, 200, user);
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
