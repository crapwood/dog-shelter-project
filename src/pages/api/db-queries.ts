// @ts-nocheck
import prisma from "../../db/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const data = await prisma.dogs.findMany({
                orderBy: {
                    arriveDate: 'asc'
                }
            });
            res.status(200).json(data);
        } catch (err) {
            res.status(500).send({ error: err });
        }
    }
    if (req.method === "POST") {
        try {
            const {
                name,
                chipNum,
                status,
                diskit,
                gender,
                breed,
                cabin,
                size,
                arriveDate,
                delivererName,
                delivererFamilyName,
                delivererAddress,
                delivererPhone
            } = req.body;

            const delivererData = await prisma.delivers.create({
                data: {
                    name: delivererName,
                    familyName: delivererFamilyName,
                    address: delivererAddress,
                    phone: delivererPhone
                }
            })

            const newDogData = await prisma.dogs.create({
                data: {
                    name,
                    chipNum,
                    status,
                    diskit,
                    gender,
                    breed,
                    cabin,
                    size,
                    arriveDate,
                    delivery: {
                        create: {
                            deliveryDate: arriveDate,
                            delivers: {
                                connect: {
                                    id: delivererData.id
                                }
                            }
                        }
                    }
                },
                include: {
                    delivery: true
                }
            });
            res.status(200).json({ data: newDogData });
        } catch (err) {
            res.status(500).send({ error: err });
        }
    }
}
