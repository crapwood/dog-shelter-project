// @ts-nocheck
import prisma from "../../db/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const payload = await req.body;
            const filters = handleFilters(payload)
            const data = await prisma.dogs.findMany({ ...filters });
            res.status(200).json(data);

        } catch (err) {
            res.status(500).send({ error: err });
        }
    }
}

function handleFilters(filters) {
    return {
        where: {
            uniqNum: { equals: filters.uniqNum }
        }
    };
}
