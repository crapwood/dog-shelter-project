// @ts-nocheck
import React from 'react';
import Navbar from "@/components/navbar";
import Grid from "@mui/material/Grid";
import { Box, Button, IconButton, Typography } from "@mui/material";
import '../styles/main-page.scss';

function FormsDownload() {
    return (
        <Box sx={{ flexGrow: 1 }} className="page-container">
            <Grid container spacing={2} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ height: '48px', backgroundColor: 'transparent', width: '100%' }}/>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100px' }}>
                        <h1>טפסים להדפסה</h1>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <Box sx={{display: 'flex', flexDirection: 'column',alignItems: 'center',}}>
                        <IconButton href={'/adoption-form.pdf'} target="_blank" sx={{ height: '140px', borderRadius: 0 }}>
                            <Box component="img" sx={{ height: '140px', fontSize: '24px' }} src="doc-svg-icon.svg"/>
                        </IconButton>
                        <Typography variant="subtitle1">טופס למאמצים</Typography>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <Box sx={{display: 'flex', flexDirection: 'column',alignItems: 'center',}}>
                        <IconButton href={'/ikurim-form.pdf'} target="_blank" sx={{ height: '140px', borderRadius: 0 }}>
                            <Box component="img" sx={{ height: '140px', fontSize: '24px' }} src="doc-svg-icon.svg"/>
                        </IconButton>
                        <Typography variant="subtitle1">טופס תכנון עיקורים</Typography>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <Box sx={{display: 'flex', flexDirection: 'column',alignItems: 'center',}}>
                        <IconButton href={'/registration-form.pdf'} target="_blank" sx={{ height: '140px', borderRadius: 0 }}>
                            <Box component="img" sx={{ height: '140px', fontSize: '24px' }} src="doc-svg-icon.svg"/>
                        </IconButton>
                        <Typography variant="subtitle1">טופס קליטה</Typography>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <Box sx={{display: 'flex', flexDirection: 'column',alignItems: 'center',}}>
                        <IconButton href={'/ikurim-assurance-form.pdf'} target="_blank" sx={{ height: '140px', borderRadius: 0 }}>
                            <Box component="img" sx={{ height: '140px', fontSize: '24px' }} src="doc-svg-icon.svg"/>
                        </IconButton>
                        <Typography variant="subtitle1">התחייבות לעיקור</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FormsDownload;
