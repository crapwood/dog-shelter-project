// @ts-nocheck
import React from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography,
    Button
} from "@mui/material";

export const breed = [
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

export const bitan =
    [
        'גוריה 1',
        'פנסיון',
        'גוריה 2',
        'באו באו',
        'מכלאה כפולה 1',
        'מכלאה כפולה 2',
        'ביתן 1 עליון',
        'ביתן 2 עליון',
        'ביתן 3 עליון',
        'ביתן 4 עליון',
        'ביתן 5 עליון',
        'מכלאת פטרה',
        'מסדרון 1',
        'מסדרון 2',
        'מסדרון 3',
        'חדר 4',
        'חדר 5',
        'חדר 6',
        'חדר 7',
        'חדר 8',
        'חדר 9',
        'ביתן מול החתוליה',
        'A',
        'B',
        'C',
        'ביתן 1 תחתון',
        'ביתן 2 תחתון',
        'ביתן 3 תחתון',
        'ביתן 4 תחתון',
        'ביתן 5 תחתון',
        'ביתן 6 תחתון',
        'ביתן 7 תחתון',
        'משרד גדול',
        'משוחררים',
        'מרפאה',
        'קרוואן',
        'מלונה בכניסה',
        'מלונה ליד חד"א',
        'מלונה בכניסה למסדרון',
        'מלונה ליד חדר צוות',
        'מלונה ליד המחסן'
    ]
const status = ['נוכח', 'עזב']

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
    const [breedName, setBreedName] = React.useState([]);
    const [genderName, setGenderName] = React.useState('');
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setBreedName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeGender = (event) => {
        const {
            target: { value },
        } = event;
        setGenderName(
            value
        );
    };


    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '60px',
            padding: '24px'
        }}>
            <TextField id="standard-basic" label="שם" variant="outlined"/>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">גזע</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={breedName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Breed"/>}
                    MenuProps={MenuProps}
                >
                    {breed.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
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
                    value={genderName}
                    onChange={handleChangeGender}
                    input={<OutlinedInput label="Gender"/>}
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
            <TextField id="standard-basic" label="שבב" variant="outlined"/>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">ביתן</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={breedName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name"/>}
                    MenuProps={MenuProps}
                >
                    {bitan.map((name) => (
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
                <InputLabel id="demo-multiple-name-label">סטטוס</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={breedName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name"/>}
                    MenuProps={MenuProps}
                >
                    {status.map((name) => (
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
            <Button variant="contained" sx={{ height: '56px', width: '200px' }}><Typography
                variant="h6">סינון</Typography></Button>
        </Box>
    );
}

export default Filters;
