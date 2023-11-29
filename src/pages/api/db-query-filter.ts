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
            name: { equals: filters.name[0] },
            breed: { equals: filters.breed[0] },
            gender: { equals: filters.gender[0] },
            size: { equals: filters.size[0] },
            diskit: { equals: filters.diskit[0] },
            chipNum: { equals: filters.chipNum[0] },
            cabin: { equals: filters.cabin[0] },
            status: { equals: filters.status[0] },
        }
    };
}
