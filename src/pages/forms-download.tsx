// @ts-nocheck
import React from 'react';
import Navbar from "@/components/navbar";
import { Box, Button, IconButton, Typography } from "@mui/material";
import '../styles/main-page.scss';

function FormsDownload() {
    return (
        <Box className="page-container">
            <Navbar/>
            <Box
                sx={{
                    marginTop: "65px",
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: 'column',
                }}
            >
                <h1>טפסים להדפסה</h1>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <IconButton href={'/adoption-form.pdf'} target="_blank"
                                    sx={{ height: '140px', borderRadius: 0 }}>
                            <Box component="img" sx={{ height: '140px', fontSize: '24px' }} src="doc-svg-icon.svg"/>
                        </IconButton>
                        <Typography variant="subtitle1">טופס למאמצים</Typography>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <IconButton href={'/ikurim-form.pdf'} target="_blank" sx={{ height: '140px', borderRadius: 0 }}>
                            <Box component="img" sx={{ height: '140px', fontSize: '24px' }} src="doc-svg-icon.svg"/>
                        </IconButton>
                        <Typography variant="subtitle1">טופס תכנון עיקורים</Typography>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <IconButton href={'/registration-form.pdf'} target="_blank"
                                    sx={{ height: '140px', borderRadius: 0 }}>
                            <Box component="img" sx={{ height: '140px', fontSize: '24px' }} src="doc-svg-icon.svg"/>
                        </IconButton>
                        <Typography variant="subtitle1">טופס קליטה</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <IconButton href={'/ikurim-assurance-form.pdf'} target="_blank"
                                    sx={{ height: '140px', borderRadius: 0 }}>
                            <Box component="img" sx={{ height: '140px', fontSize: '24px' }} src="doc-svg-icon.svg"/>
                        </IconButton>
                        <Typography variant="subtitle1">התחייבות לעיקור</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default FormsDownload;
