// Import needed libraries and dependencies

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient(); // Define prisma client

// Function to handle login page
export default async function handler(req, res) {
  switch (req.method) {
    // Login will only use POST request method
    case "POST": {
      // Get email and password data form request body
      const { email, password } = req.body;
      // Try to match email and password data from the request body with
      // email and password in DB
      try {
        // prisma.user.findFirst (https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findfirst)
        const user = await prisma.user.findFirst({
          where: { email: email },
        });
        // Check if the user exist or not
        if (user.password) {
          // Comparing hashed password from DB with password from request body
          const validatePass = await bcrypt.compare(password, user.password);
          if (validatePass) {
            res.send({ success: true, code: 200, data: user });
          } else {
            res.status(401).send({ message: "Incorrect email or password" });
          }
        } else {
          // Send message if user doesn't exist
          res.status(401).send({ message: "User doesn't exist" });
        }
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
