import React from 'react';
import Navbar from "@/components/navbar";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

function Reports() {
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
                    <div sx={{height: '100px'}}>TODO: Reports Page</div>
                </Grid>

            </Grid>
        </Box>
    );
}

export default Reports;
