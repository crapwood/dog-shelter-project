// @ts-nocheck
import React from 'react';
import { Controller, useWatch } from "react-hook-form";
import dayjs from "dayjs";
import { Box, FormLabel, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DepartureProps {
    control: any;
    errors: any;
}

function Departure({ control, errors }: DepartureProps) {
    const dateVal = useWatch({ control, name: "leaveDate" })
    const [value, setValue] = React.useState(dayjs(dateVal))
    return (
        <>
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
                    name="leaveDate"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker shouldCloseOnSelect={true} label="תאריך מסירה" {...field} slotProps={{
                                    field: { clearable: true },
                                    // textField: {
                                    //     onClick: () => setOpenDatePicker(true),
                                    // }
                                }} sx={{ width: "300px" }}
                                            format="DD/MM/YYYY"
                                            value={value}
                                            onChange={(newValue) => setValue(newValue)}/>
                            </LocalizationProvider>
                            <br/>
                        </>
                    )}
                />
                <Controller
                    name="delivererName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <>
                            <FormLabel id="demo-textfield-label">שם</FormLabel>
                            <TextField
                                {...field}
                                aria-labelledby="demo-textfield-label"
                                sx={{ width: "500px" }}
                            />
                            <br/>
                        </>
                    )}
                />
                <Controller
                    name="delivererFamilyName"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                        <>
                            <FormLabel id="demo-textfield-label">שם משפחה</FormLabel>
                            <TextField
                                {...field}
                                aria-labelledby="demo-textfield-label"
                                sx={{ width: "500px" }}
                            />
                            <br/>
                        </>
                    )}
                />

                <Controller
                    name="delivererAddress"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                        <>
                            <FormLabel id="demo-textfield-label">כתובת</FormLabel>
                            <TextField {...field} aria-labelledby="demo-textfield-label"/>
                            <br/>
                        </>
                    )}
                />
                <Controller
                    name="delivererPhone"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                        <>
                            <FormLabel id="demo-textfield-label">טלפון/פלאפון</FormLabel>
                            <TextField
                                {...field}
                                aria-labelledby="demo-textfield-label"
                                sx={{
                                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                        display: "none",
                                    },
                                    "& input[type=number]": {
                                        MozAppearance: "textfield",
                                    }, width: "300px"
                                }}
                                type="number"
                            />
                            <br/>
                        </>
                    )}
                />
                <Controller
                    name="delivererComments"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                        <>
                            <FormLabel id="demo-textfield-label">הערות</FormLabel>
                            <TextField
                                {...field}
                                multiline
                                maxRows={5}
                                minRows={5}
                                aria-labelledby="demo-textfield-label"
                            />
                            <br/>
                        </>
                    )}
                />
            </Box>
        </>
    );
}

export default Departure;
