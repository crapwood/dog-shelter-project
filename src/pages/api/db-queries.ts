// @ts-nocheck
import prisma from "../../db/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await prisma.dogs.findMany();
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    console.log(req.body);
    await prisma.dogs.create({
      data: { ...req.body },
    });
  }
}
