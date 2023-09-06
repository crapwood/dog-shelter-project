// @ts-nocheck
import React from 'react';
import { Box } from "@mui/material";
import Navbar from "@/components/navbar";

function NewAnimal() {
    return (
        <Box>
            <Navbar/>
            <Box sx={{marginTop: '65px', backgroundColor: 'transparent'}}>
                <h1>Hello new animal</h1>
            </Box>
        </Box>
    );
}

export default NewAnimal;
