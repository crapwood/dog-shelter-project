// @ts-nocheck
import prisma from "../../db/db";

export default async function handler(req, res) {
    // if (req.method === "GET") {
    //     try {
    //         const data = await prisma.dogs.findMany();
    //         res.status(200).json(data);
    //     } catch (err) {
    //         res.status(500).send({ error: err });
    //     }
    // }
    if (req.method === "POST") {
        try {
            const payload = await req.body;
            console.log(payload, 'req.body')
            const filters = handleFilters(payload)
            if(payload.shouldFilter){
                const data = await prisma.dogs.findMany(filters);
                res.status(200).json(data);
            }else{
                const data = await prisma.dogs.findMany();
                res.status(200).json(data);
            }




        } catch (err) {
            res.status(500).send({ error: err });
        }
    }
}


function handleFilters(filters) {
    let filter = {
        where: {
            name: { equals: filters.name }
        }
    }
    return filter;
}
