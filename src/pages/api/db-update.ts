// @ts-nocheck
import prisma from "../../db/db";

export default async function handler(req, res) {
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
            delivererPhone,
            adopter,
            adopterAddress,
            adopterFamilyName,
            adopterPhone,
            adoptionDate,
            ikur,
            kalevet,
            meshushe,
            tolahim,
            id,
            deliveryId
        } = req.body;


        const vaccineKalevetData = kalevet.dateAdministered && await prisma.vaccine.create({
            data: {
                name: 'חיסון כלבת',
                dateAdministered: kalevet.dateAdministered
            }
        });
        const vaccineMeshusheData = meshushe.dateAdministered && await prisma.vaccine.create({
            data: {
                name: 'חיסון משושה',
                dateAdministered: meshushe.dateAdministered
            }
        })

        const vaccinesData = [{
            id: vaccineKalevetData?.id
        }, {
            id: vaccineMeshusheData?.id
        }].filter((t) => t.id != undefined) || [];

        const adopterData = adopter && await prisma.adopters.create({
            data: {
                name: adopter,
                familyName: adopterFamilyName,
                address: adopterAddress,
                phone: adopterPhone
            }
        })
        const delivererData = await prisma.delivers.create({
            data: {
                name: delivererName,
                familyName: delivererFamilyName,
                address: delivererAddress,
                phone: delivererPhone
            }
        })
        const treatmentsIkurData = ikur.dateAdministered && await prisma.treatment.create({
            data: {
                name: 'עיקור',
                datePerformed: ikur.dateAdministered
            }
        })
        const treatmentsTolahimData = tolahim.dateAdministered && await prisma.treatment.create({
            data: {
                name: 'תולעים',
                datePerformed: tolahim.dateAdministered
            }
        })
        const treatmentsData = [{
            id: treatmentsIkurData?.id
        }, {
            id: treatmentsTolahimData?.id
        }].filter((t) => t.id != undefined) || [];

        const newDogData = await prisma.dogs.update({
            where: {
                id: id
            },
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
                ...(adopter && {
                    adoption: {
                        create: {
                            adoptionDate: adoptionDate,
                            adopters: {
                                connect: {
                                    id: adopterData.id
                                }
                            }
                        }
                    }
                }),
                delivery: {
                    create: {
                        deliveryDate: arriveDate,
                        delivers: {
                            connect: {
                                id: delivererData.id
                            }
                        }
                    },
                },

                ...((tolahim.dateAdministered || ikur.dateAdministered) && {
                    treatments: {
                        connect: treatmentsData
                    }
                }),
                ...((kalevet.dateAdministered || meshushe.dateAdministered) && {
                    vaccine: {
                        connect: vaccinesData
                    }
                })
            },
            include: {
                adoption: true,
                delivery: true,
                treatments: true,
                vaccine: true
            }
        });
        res.status(200).json({ data: newDogData });
        } catch (err) {
            res.status(500).send({ error: err });
        }
    }
}
