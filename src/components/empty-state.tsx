// @ts-nocheck
import React from 'react';
import FilterAltTwoToneIcon from '@mui/icons-material/FilterAltTwoTone';
import { Box, Typography } from "@mui/material";

export function EmptyState() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <FilterAltTwoToneIcon sx={{fontSize: '5rem'}}/>
            <Typography variant="subtitle2">לא נמצא נתונים, נא לשנות את הסינון</Typography>
        </Box>
    );
}
