// @ts-nocheck
import prisma from "../../db/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const today = new Date().toISOString().split('T')[0];
            const plusTenDays = new Date();
            const plusTenDaysDate = new Date(plusTenDays.setDate(plusTenDays.getDate() + 10)).toISOString().split('T')[0];
            const data = await prisma.dogs.findMany({
                    where: {
                        arriveDate:
                            {
                                lte: new Date(plusTenDaysDate)
                            }
                    }
                })
            ;
            res.status(200).json(data);
        } catch (err) {
            res.status(500).send({ error: err });
        }
    }
}

