// Import needed libraries and dependencies

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Define prisma client

// Function to handle profile page (get user data to display in profile page)
export default async function handler(req, res) {
  switch (req.method) {
    // Profile will only have GET method
    case "GET": {
      // Get userId data from request body
      const userId = req.body.userId;
      // Try to find user data with the same id from userId using
      // prisma.findFirst() (https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findfirst)
      try {
        const user = await prisma.user.findFirst({
          where: { id: userId },
        });
        res.send({ success: true, code: 200, data: user });
      } catch (error) {
        console.log(error);
      }
    }
    default:
      // If the method is not "GET", send exception "Method Not Allowed"
      res.status(404).send({ message: "Method Not Allowed" });
      break;
  }
}
