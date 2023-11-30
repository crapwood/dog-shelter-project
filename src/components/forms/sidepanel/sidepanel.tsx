// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PetsIcon from "@mui/icons-material/Pets";
import AnimalDetails from "@/components/forms/components/animal-details";
import PersonIcon from "@mui/icons-material/Person";
import PersonDetails from "@/components/forms/components/person-details";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Treatments from "@/components/forms/components/treatments";
import { VIEW_MODE } from "@/enums/enums";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useForm } from "react-hook-form";
import { useGlobalStore } from "@/store/global-items.store";
import Departure from "@/components/forms/components/departure";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { useRouter } from 'next/router';

interface SidepanelProps {
    openSidepanel: boolean;
    setOpenSidepanel: () => void;
    selectedRowData: any
}

export function Sidepanel({ openSidepanel, setOpenSidepanel, selectedRowData }: SidepanelProps) {
    const [expand, setExpand] = React.useState<string | true>(true);
    const router = useRouter();
    const {
        viewMode,
        selectedRowFromGrid,
        setSelectedRowFromGrid
    } = useGlobalStore();
    console.log(selectedRowData[0])
    const { handleSubmit, control, reset, formState, setValue } = useForm({
        defaultValues: {
            name: "",
            chipNum: "",
            status: "נוכח",
            diskit: "",
            gender: "זכר",
            breed: "",
            cabin: "",
            size: "",
            arriveDate: '',
            delivererName: '',
            delivererPhone: '',
            delivererAddress: '',
            delivererFamilyName: '',
        },
    });

    useEffect(() => {
        const defaults = {
            name: selectedRowData[0]?.name || '',
            chipNum: selectedRowData[0]?.chipNum || '',
            status: selectedRowData[0]?.leaveDate || selectedRowData[0]?.adoption?.adoptionDate ? 'עזב' : selectedRowData[0]?.status || 'נוכח',
            diskit: selectedRowData[0]?.diskit || '',
            gender: selectedRowData[0]?.gender || "זכר",
            breed: selectedRowData[0]?.breed || '',
            cabin: selectedRowData[0]?.cabin || '',
            size: selectedRowData[0]?.size || '',
            arriveDate: selectedRowData[0]?.arriveDate || '',
            delivererName: selectedRowData[0]?.delivery?.delivers?.name || '',
            delivererPhone: selectedRowData[0]?.delivery?.delivers?.phone || '',
            delivererAddress: selectedRowData[0]?.delivery?.delivers?.address || '',
            delivererFamilyName: selectedRowData[0]?.delivery?.delivers?.familyName || '',
            leaveDate: selectedRowData[0]?.leaveDate || selectedRowData[0]?.adoption?.adoptionDate || '',
            adopter: selectedRowData[0]?.adoption?.adopters?.name || '',
            adopterAddress: selectedRowData[0]?.adoption?.adopters?.address || '',
            adopterFamilyName: selectedRowData[0]?.adoption?.adopters?.familyName || '',
            adopterPhone: selectedRowData[0]?.adoption?.adopters?.phone || '',
            adopterPhone: selectedRowData[0]?.adoption?.adopters?.phone || '',
            adoptionDate: selectedRowData[0]?.leaveDate || selectedRowData[0]?.adoption?.adoptionDate || '',
            tolahim: {
                dateAdministered: selectedRowData[0]?.treatments.find((treatment) => treatment.name === 'תולעים')?.datePerformed || '',
                veterenarian: selectedRowData[0]?.treatments.find((treatment) => treatment.name === 'תולעים')?.veterenarian || ''
            },
            ikur: {
                dateAdministered: selectedRowData[0]?.treatments.find((treatment) => treatment.name === 'עיקור')?.datePerformed || '',
                veterenarian: selectedRowData[0]?.treatments.find((treatment) => treatment.name === 'עיקור')?.veterenarian || ''
            },
            meshushe: {
                dateAdministered: selectedRowData[0]?.vaccine.find((treatment) => treatment.name === 'חיסון משושה')?.dateAdministered || '',
                veterenarian: selectedRowData[0]?.vaccine.find((treatment) => treatment.name === 'חיסון משושה')?.veterenarian || ''
            },
            kalevet: {
                dateAdministered: selectedRowData[0]?.vaccine.find((treatment) => treatment.name === 'חיסון כלבת')?.dateAdministered || '',
                veterenarian: selectedRowData[0]?.vaccine.find((treatment) => treatment.name === 'חיסון כלבת')?.veterenarian || ''
            },
            commentsTreatment: selectedRowData[0]?.commentsTreatment || '',
            commentsDeparture: selectedRowData[0]?.commentsDeparture || '',
            commentsArrival: selectedRowData[0]?.commentsArrival || '',
        }
        reset(defaults)
    }, [selectedRowData, reset]);

    const onSubmit = async (data) => {
        const formData = {
            ...data,
            diskit: data.diskit,
            delivererPhone: data.delivererPhone,
            adopterPhone: data.adopterPhone,
            id: selectedRowData[0]?.id,
            status: data.adoptionDate ? 'עזב' : 'נוכח',
            deliveryId: selectedRowData[0]?.delivery?.id,
            treatments: selectedRowData[0]?.treatments,
            vaccines: selectedRowData[0]?.vaccine
        };

        console.log(formData, 'formData');
        await fetch("/api/db-update", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        // setOpenSidepanel(false);
        // router.reload();
    };

    const handleExpand =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpand(isExpanded ? panel : false);
        };

    return (
        <>
            {selectedRowData[0]?.name ? <Drawer
                anchor={"right"}
                open={openSidepanel}
                onClose={() => setOpenSidepanel(false)}
            >
                <Box sx={{ padding: '16px' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography variant="h4">{selectedRowData[0]?.name}</Typography>
                        </Box>

                        <Accordion expanded={expand} onChange={handleExpand('panel1')} sx={{
                            '&:before': {
                                display: 'none',
                            }, borderRadius: 2
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >

                                <Typography>פרטי בעל חיים</Typography>
                                <PetsIcon fontSize="small" sx={{ marginLeft: '8px' }}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AnimalDetails control={control} errors={formState.errors}/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            '&:before': {
                                display: 'none',
                            }, borderRadius: 2
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>פרטי מסירה</Typography>
                                <PersonIcon fontSize="small" sx={{ marginLeft: '8px' }}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <PersonDetails control={control} errors={formState.errors} setValue={setValue}/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            '&:before': {
                                display: 'none',
                            }, borderRadius: 2
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>טיפולים/חיסונים</Typography>
                                <VaccinesIcon fontSize="small" sx={{ marginLeft: '8px' }}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Treatments control={control} errors={formState.errors} setValue={setValue}/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            '&:before': {
                                display: 'none',
                            }, borderRadius: 2
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>עזיבה</Typography>
                                <FlightTakeoffIcon fontSize="small" sx={{ marginLeft: '8px' }}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Departure control={control} errors={formState.errors} setValue={setValue}/>
                            </AccordionDetails>
                        </Accordion>
                        <Box sx={{ display: "flex", justifyContent: "center", marginTop: '16px' }}>
                            <Button
                                variant="outlined"
                                sx={{ width: "100px", height: "56px", margin: '4px' }}
                                // size="small"
                                onClick={() => setOpenSidepanel(false)}
                            >
                                ביטול
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ width: "100px", height: "56px", margin: '4px' }}
                            >
                                שמירה
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Drawer> : undefined}
        </>
    );
}
