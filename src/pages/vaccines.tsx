import React from 'react';
import Grid from "@mui/material/Grid";
import Navbar from "@/components/navbar";
import { Box } from "@mui/material";

function Vaccines() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ height: '48px', backgroundColor: 'red', width: '100%' }} />
                </Grid>
                <Grid item xs={3}>
                    <div style={{height: '100px'}}>TODO: Vaccines</div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Vaccines;
