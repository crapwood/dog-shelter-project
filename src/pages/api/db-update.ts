// @ts-nocheck
import prisma from "../../db/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        // try {
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
            deliveryId,
            commentsTreatment,
            commentsDeparture,
            commentsArrival,
            treatments,
            vaccines
        } = req.body;

        console.log(ikur, 'ikur');

        let kalevetData;
        let meshusheData;
        let vaccinesData = [];

        if (vaccines.length > 0) {
            vaccines.map(async (v) => {
                if (v.name == "חיסון כלבת") {
                    kalevet.dateAdministered && await prisma.vaccine.upsert({
                        where: {
                            id: v.id
                        },
                        update: {
                            dateAdministered: kalevet.dateAdministered,
                            veterenarian: kalevet.veterenarian
                        },
                        create: {
                            name: 'חיסון כלבת', dateAdministered: kalevet.dateAdministered,
                            veterenarian: kalevet.veterenarian
                        },
                    })
                } else {
                    meshushe.dateAdministered && await prisma.vaccine.upsert({
                        where: {
                            id: v.id
                        },
                        update: {
                            dateAdministered: meshushe.dateAdministered,
                            veterenarian: meshushe.veterenarian
                        },
                        create: {
                            name: "חיסון משושה",
                            dateAdministered: meshushe.dateAdministered,
                            veterenarian: meshushe.veterenarian
                        },
                    })
                }
            })
        }

        kalevetData = kalevet.dateAdministered && await prisma.vaccine.create({
            data: {
                name: 'חיסון כלבת',
                dateAdministered: kalevet.dateAdministered,
                veterenarian: kalevet.veterenarian

            }
        });

        meshusheData = meshushe.dateAdministered && await prisma.vaccine.create({
            data: {
                name: 'חיסון משושה',
                dateAdministered: meshushe.dateAdministered,
                veterenarian: meshushe.veterenarian
            }
        })

        vaccinesData = [{
            id: kalevetData?.id
        }, {
            id: meshusheData?.id
        }].filter((t) => t.id != undefined) || [];


        if (treatments.length > 0) {
            treatments.map(async (v) => {
                if (v.name == "עיקור") {
                    ikur.dateAdministered && await prisma.treatment.upsert({
                        where: {
                            id: v.id
                        },
                        update: {
                            datePerformed: ikur.dateAdministered,
                            veterenarian: ikur.veterenarian
                        },
                        create: {
                            name: 'עיקור', datePerformed: ikur.dateAdministered,
                            veterenarian: ikur.veterenarian
                        },
                    })
                } else {
                    tolahim.dateAdministered && await prisma.treatment.upsert({
                        where: {
                            id: v.id
                        },
                        update: {
                            datePerformed: tolahim.dateAdministered,
                            veterenarian: tolahim.veterenarian
                        },
                        create: {
                            name: "תולעים",
                            datePerformed: tolahim.dateAdministered,
                            veterenarian: tolahim.veterenarian
                        },
                    })
                }
            })
        }


        const treatmentsIkurData = ikur.dateAdministered && await prisma.treatment.create({
            data: {
                name: 'עיקור',
                datePerformed: ikur.dateAdministered,
                veterenarian: ikur.veterenarian
            }
        })
        const treatmentsTolahimData = tolahim.dateAdministered && await prisma.treatment.create({
            data: {
                name: 'תולעים',
                datePerformed: tolahim.dateAdministered,
                veterenarian: tolahim.veterenarian
            }
        })
        const treatmentsData = [{
            id: treatmentsIkurData?.id
        }, {
            id: treatmentsTolahimData?.id
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
                commentsArrival,
                commentsDeparture,
                commentsTreatment,
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

                ...((!treatments.length) && {
                    treatments: {
                        connect: treatmentsData
                    }
                }),
                // ...((kalevet.dateAdministered || meshushe.dateAdministered) && {
                //     vaccine: {
                //         connect: vaccinesData
                //     }
                // })

                ...((!vaccines.length) && {
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
        // } catch (err) {
        //     res.status(500).send({ error: err });
        // }
    }
}
