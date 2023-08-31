import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";

const breed = [
    'אירדייל טרייר',
    'אלסקן מלמוט',
    'בול טרייר',
    'ביגל',
    'בולמסטיף',
    'אמסטף',
    'דוברמן',
    'דלמטי',
    'האסקי סיבירי',
    'טרייר טיבטי',
];
const gender = [
    'זכר',
    'נקבה'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function Filters() {
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '60px', padding: '24px'}}>
            <TextField id="standard-basic" label="שם" variant="outlined" />
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">גזע</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >
                    {breed.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            // style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">מין</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >
                    {gender.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            // style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Typography variant="h6">פילטור</Typography>
        </Box>
    );
}

export default Filters;
