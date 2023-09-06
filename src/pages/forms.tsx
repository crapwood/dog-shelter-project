// @ts-nocheck
import React from 'react';
import Navbar from "@/components/navbar";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

function Forms() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ height: '48px', backgroundColor: 'transparent', width: '100%' }} />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{display: 'flex', justifyContent: 'center',height: '100px'}}>
                        <h1>טפסים להדפסה</h1>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                        <Button href={'/adoption-form.pdf'} variant="contained" size="large" endIcon={<FileDownloadRoundedIcon />} fullWidth={true} target="_blank">טופס למאמצים</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button href={'/ikurim-form.pdf'} variant="contained" size="large" endIcon={<FileDownloadRoundedIcon />} fullWidth={true} target="_blank">טופס תכנון עיקורים</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button href={'/registration-form.pdf'} variant="contained" size="large" endIcon={<FileDownloadRoundedIcon />} fullWidth={true} target="_blank">טופס קליטה</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button href={'/ikurim-assurance-form.pdf'} variant="contained" size="large" endIcon={<FileDownloadRoundedIcon />} fullWidth={true} target="_blank">התחייבות לעיקור</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Forms;
