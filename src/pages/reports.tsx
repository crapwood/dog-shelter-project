// @ts-nocheck
import React, { useState } from 'react';
import Navbar from "@/components/navbar";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useWatch } from "react-hook-form";
import dayjs from 'dayjs';
import { useForm } from "react-hook-form";
import '../styles/new-animal.scss';
import { generateCSV } from "@/utils/generateCsv";
import { CSVLink, CSVDownload } from "react-csv";

function Reports() {
    const dateVal = new Date().toISOString();
    const [toDate, setToDate] = React.useState(dayjs(dateVal));
    const [fromDate, setFromDate] = React.useState(dayjs(dateVal))
    const [data, setData] = useState([]);

    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            reportToDate: toDate,
            reportFromDate: fromDate
        },
    });

    async function fetchData() {
        const req = await fetch(`/api/db-query-vaccines`);
        const response = await req.json();
        setData(response);
        const csvHeader = [
            { label: "Name", key: "name" },
            { label: "Breed", key: "breed" },
            { label: "Gender", key: "gender" },
            { label: "Arrival", key: "arriveCause" }
        ];
        generateCSV(csvHeader, data, 'new-file')

        // await fetch("/api/db-queries", {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData),
        // });
    }


    const onSubmit = async (data) => {
        console.log(data);
        fetchData()
        // generateCSV
    };

    return (
        <Box sx={{ flexGrow: 1 }} className="page-container">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ height: '48px', backgroundColor: 'red', width: '100%' }}/>
                </Grid>
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                            <Controller
                                name="reportFromDate"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker shouldCloseOnSelect={true} label="עד-" {...field}
                                                        slotProps={{
                                                            field: { clearable: true },
                                                        }} sx={{ width: "300px" }}
                                                        value={fromDate}
                                                        onChange={(newValue) => setFromDate(newValue)}/>
                                        </LocalizationProvider>
                                        <br/>
                                    </>
                                )}
                            />
                            <Controller
                                name="reportToDate"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker shouldCloseOnSelect={true} label="-מ" {...field}
                                                        slotProps={{
                                                            field: { clearable: true },
                                                        }} sx={{ width: "300px" }}
                                                        value={toDate}
                                                        onChange={(newValue) => setToDate(newValue)}/>
                                        </LocalizationProvider>
                                        <br/>
                                    </>
                                )}
                            />
                        </Box>
                        <Box>

                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", marginTop: '16px' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ width: "200px", height: "56px" }}
                                size="large"
                            >
                                הורד דוק
                            </Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Reports;
