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

interface SidepanelProps {
    openSidepanel: boolean;
    setOpenSidepanel: () => void;
    selectedRowData: any
}

export function Sidepanel({ openSidepanel, setOpenSidepanel, selectedRowData }: SidepanelProps) {
    const [expand, setExpand] = React.useState<string | true>(true);
    const {
        viewMode,
        selectedRowFromGrid,
        setSelectedRowFromGrid
    } = useGlobalStore();
    const { handleSubmit, control, reset, formState } = useForm({
        defaultValues: {
            name: "",
            chipNum: "",
            status: "נוכח",
            diskit: "",
            gender: "זכר",
            breed: "",
            cabin: "",
            size: "",
        },
    });

    useEffect(() => {
        const defaults = {
            name: selectedRowData[0]?.name || '',
            chipNum: selectedRowData[0]?.chipNum || '',
            status: selectedRowData[0]?.status || '',
            diskit: selectedRowData[0]?.diskit || '',
            gender: selectedRowData[0]?.gender || "זכר",
            breed: selectedRowData[0]?.breed || '',
            cabin: selectedRowData[0]?.cabin || '',
            size: selectedRowData[0]?.size || '',
            arriveCause: selectedRowData[0]?.arriveCause || ''
        }
        reset(defaults)
    }, [selectedRowData, reset]);

    const onSubmit = async (data) => {
        setViewMode(undefined);
        const formData = { ...data, diskit: Number(data.diskit) };
        console.log(formData)
        // await fetch("/api/db-queries", {
        //   method: "POST",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData),
        // });
        // await push("/main-page");
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
                                <PersonDetails control={control} errors={formState.errors}/>
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
                                <Typography>טיפולים</Typography>
                                <VaccinesIcon fontSize="small" sx={{ marginLeft: '8px' }}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Treatments control={control} errors={formState.errors}/>
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
                                <Departure control={control} errors={formState.errors}/>
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
                                // size="small"
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
