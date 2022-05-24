// Import needed libraries and dependencies

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import validateEmail from "../../../helper/validateEmail";

const prisma = new PrismaClient(); // Define prisma client

// Function to handle register page
export default async function handler(req, res) {
  switch (req.method) {
    // Register will only use POST method
    case "POST": {
      // Get data from request body
      const data = req.body;
      // Validate user input email usinge validateEmail() function
      if (!validateEmail(data.email)) {
        res.status(422).send({ message: "Invalid Email" });
      }
      // Check if the user already input the name and password
      if (!(data.name && data.password)) {
        res.status(400).send({ message: "Name and password must exist" });
      }
      // Try to register the inputted data to the DB using prisma.create() method
      // https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#create
      try {
        // Hash user password before entering to the DB
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        // Use prisma.user.create() to post the data to the DB
        const user = await prisma.user.create({ data: { ...data } });
        res.send(true, 200, user);
      } catch (error) {
        console.log(error);
      }
      break;
    }
    default:
      // If the method is not "POST", send exception "Method Not Allowed"
      res.status(404).send({ message: "Method Not Allowed" });
      break;
  }
}
