// @ts-nocheck
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from "react-hook-form";
import { FormLabel, TextField, Box, Typography } from "@mui/material";
import { useWatch } from "react-hook-form"

interface PersonDetailsProps {
    control: any;
    errors: any;
    setValue: any;
}

function PersonDetails({ control, errors, setValue }: PersonDetailsProps) {
    const dateVal = useWatch({ control, name: "arriveDate" });
    const [day, setDay] = React.useState(dayjs(dateVal));

    function handleDaySelect(day) {
        setDay(day);
        setValue('arriveDate',day);
    }

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
                    name="arriveDate"
                    control={control}
                    rules={{ required: "השדה חובה" }}
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
                                            value={day}
                                            onChange={(newDay) => handleDaySelect(newDay) }
                                />
                            </LocalizationProvider>
                            {errors?.arriveDate?.message ? <Typography variant="body1" color={"red"}>{errors?.arriveDate?.message}</Typography> :undefined}
                            <br/>
                        </>
                    )}
                />
                <Controller
                    name="delivererName"
                    control={control}
                    rules={{ required: "השדה חובה" }}
                    render={({ field }) => (
                        <>
                            <FormLabel id="demo-textfield-label">שם</FormLabel>
                            <TextField
                                {...field}
                                aria-labelledby="demo-textfield-label"
                                sx={{ width: "500px" }}
                                error={errors?.delivererName}
                            />
                            {errors?.delivererName?.message ? <Typography variant="body1" color={"red"}>{errors?.delivererName?.message}</Typography> :undefined}
                            <br/>
                        </>
                    )}
                />
                <Controller
                    name="delivererFamilyName"
                    control={control}
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

export default PersonDetails;
