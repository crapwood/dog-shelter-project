// @ts-nocheck
import prisma from "../../db/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const data = await prisma.dogs.findMany();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).send({ error: err });
        }
    }
    if (req.method === "POST") {
        try {
            const newData = await prisma.dogs.create({
                data: { ...req.body },
            });
            res.status(200).json({ data: newData });
        } catch (err) {
            res.status(500).send({ error: err });
        }
    }
}
