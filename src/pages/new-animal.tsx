// @ts-nocheck
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography, } from "@mui/material";
import Navbar from "@/components/navbar";
import { useForm } from "react-hook-form";
import { useGlobalStore } from "@/store/global-items.store";
import { useRouter } from "next/navigation";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AnimalDetails from "@/components/forms/components/animal-details";
import PersonDetails from "@/components/forms/components/person-details";
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';
import '../styles/new-animal.scss';

function NewAnimal() {
    const [expand, setExpand] = React.useState<string | true>(true);
    const {viewMode, setViewMode} = useGlobalStore();

    const { push } = useRouter();
    const { handleSubmit, control, reset, formState:{errors} } = useForm({
        defaultValues: {
            name: "",
            chipNum: "",
            status: "נוכח",
            diskit: "",
            gender: "זכר",
            breed: "",
            cabin: "",
            size: ""
        },
    });
    const onSubmit = async (data) => {
        setViewMode(undefined);
        const formData = { ...data, diskit: Number(data.diskit) };
        console.log(formData)
        await fetch("/api/db-queries", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        await push("/main-page");
    };
    const handleExpand =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpand(isExpanded ? panel : false);
        };

    return (
        <Box className="new-animal-page-container">
            <Navbar/>
            <Box
                sx={{
                    marginTop: "65px",
                    backgroundColor: "transparent",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <h1>קליטת בעל חיים חדש</h1>
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
                            <PetsIcon fontSize="small" sx={{marginLeft: '8px'}}/>
                        </AccordionSummary>
                        <AccordionDetails>
                            <AnimalDetails control={control} errors={errors}/>
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
                            <PersonIcon fontSize="small" sx={{marginLeft: '8px'}}/>
                        </AccordionSummary>
                        <AccordionDetails>
                            <PersonDetails control={control} errors={errors}/>
                        </AccordionDetails>
                    </Accordion>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: '16px' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ width: "200px", height: "56px" }}
                            size="large"
                        >
                            בצע קליטה
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}

export default NewAnimal;
