// @ts-nocheck
import prisma from "../../db/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
        const {
            toDate,
            fromDate,
            docType
        } = req.body;

        const data = await prisma.dogs.findMany({
            where: {...setQuery(docType[0], toDate, fromDate)}
        });
        res.status(200).json(data);
        } catch (err) {
            res.status(500).send({ error: err });
        }
    }
}


function setQuery(docType, toDate, fromDate) {

    switch (docType) {
        case "מצב עדכני": {
            return {
                AND: [{
                    status: {
                        equals: 'נוכח'
                    },
                    arriveDate: {
                        lte: toDate,
                        gte: fromDate
                    }
                }]
            }
        }
        case 'כלבים שנקלטו':{
            return {
                AND: [{
                    arriveDate: {
                        lte: toDate,
                        gte: fromDate
                    }
                }]
            }
        }
        case 'כלבים שנמסרו':{
            return {
                AND: [{
                    status: {
                        contains: "עזב"
                    },
                    arriveDate: {
                        lte: toDate,
                        gte: fromDate
                    }
                }]
            }
        }
        case 'בעלי שבבים':{
            return {
                AND: [{
                    chipNum: { not: null},
                    leaveDate: {
                        lte: toDate,
                        gte: fromDate
                    }
                }]
            }
        }
        default:
            return {
                AND: [{
                    arriveDate: {
                        lte: toDate,
                        gte: fromDate
                    }
                }]
            }
    }


}
