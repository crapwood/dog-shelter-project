import React from 'react';
import {
    Box,
    TextField,
    FormLabel,
    FormControlLabel,
    Radio,
    FormControl,
    RadioGroup,
    Select,
    MenuItem
} from "@mui/material";
import { Controller } from "react-hook-form";
import { cabinsFilterOptions, breedFilterOptions, sizeFilterOptions } from "@/constants/constants";

interface AnimalDetailsProps {
    control: any;
    errors: any;
}

function AnimalDetails({ control, errors }: AnimalDetailsProps) {
    console.log(control)
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "0 24px",
                minWidth: "600px",
            }}
        >
            <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <>
                        <FormLabel id="demo-textfield-label">שם</FormLabel>
                        <TextField
                            {...field}
                            aria-labelledby="demo-textfield-label"
                            value={field.value || ""}
                        />
                        <br/>
                    </>
                )}
            />
            <Controller
                name="gender"
                control={control}
                // rules={{ required: true }}
                render={({ field }) => (
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">מין</FormLabel>
                        <RadioGroup
                            {...field}
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="זכר"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="זכר"
                                control={<Radio/>}
                                label="זכר"
                            />
                            <FormControlLabel
                                value="נקבה"
                                control={<Radio/>}
                                label="נקבה"
                            />
                        </RadioGroup>
                        <br/>
                    </FormControl>
                )}
            />
            <Controller
                name="size"
                control={control}
                // rules={{ required: true }}
                render={({ field }) => (
                    <>
                        <FormLabel id="demo-textfield-label">גודל</FormLabel>

                        <Select
                            {...field}
                            labelId="demo-multiple-name-label"
                            aria-labelledby="demo-textfield-label"
                            id="demo-multiple-name"
                            sx={{ width: '500px' }}
                            value={field.value}
                        >
                            {sizeFilterOptions.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <br/>
                    </>
                )}
            />
            <Controller
                name="breed"
                control={control}
                // rules={{ required: true }}
                render={({ field }) => (
                    <>
                        <FormLabel id="demo-textfield-label">גזע </FormLabel>

                        <Select
                            {...field}
                            labelId="demo-multiple-name-label"
                            aria-labelledby="demo-textfield-label"
                            id="demo-multiple-name"
                            sx={{ width: '700px' }}
                        >
                            {breedFilterOptions.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <br/>
                    </>
                )}
            />
            <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
                <Controller
                    name="chipNum"
                    control={control}
                    // rules={{ required: true }}
                    rules={{ minLength: 15, maxLength: 15 }}
                    render={({ field }) => (
                        <Box sx={{display: 'flex', flexDirection: 'column', marginRight: '24px'}}>
                            <FormLabel id="demo-textfield-label">מס. שבב</FormLabel>
                            <TextField
                                {...field}
                                aria-labelledby="demo-textfield-label"
                                sx={{
                                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                        display: "none",
                                    },
                                    "& input[type=number]": {
                                        MozAppearance: "textfield",
                                    },
                                    width: "300px"
                                }}
                                type="number"
                                error={errors?.chipNum}
                            />
                            <br/>
                        </Box>
                    )}
                />
                <Controller
                    name="diskit"
                    control={control}
                    // rules={{ minLength: 15 }}
                    render={({ field }) => (
                        <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '24px'}}>
                            <FormLabel id="demo-textfield-label">מס. דיסקית</FormLabel>
                            <TextField
                                {...field}
                                sx={{
                                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                        display: "none",
                                    },
                                    "& input[type=number]": {
                                        MozAppearance: "textfield",
                                    },
                                    width: "300px"
                                }}
                                aria-labelledby="demo-textfield-label"
                                type="number"
                            />
                            <br/>
                        </Box>
                    )}
                />

            </Box>

            <Controller
                name="cabin"
                control={control}
                // rules={{ required: true }}
                render={({ field }) => (
                    <>
                        <FormLabel id="demo-textfield-label">ביתן</FormLabel>
                        <Select
                            {...field}
                            labelId="demo-multiple-name-label"
                            aria-labelledby="demo-textfield-label"
                            id="demo-multiple-name"
                        >
                            {cabinsFilterOptions.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <br/>
                    </>
                )}
            />
        </Box>
    );
}

export default AnimalDetails;
