// @ts-nocheck
import React from "react";
import { FormLabel, TextField, Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useWatch } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface TreatmentsProps {
    control: any;
    errors: any;
    setValue: any
}

function Treatments({ control, errors, setValue }: TreatmentsProps) {
    const dateVal = useWatch({ control, name: "tolahim.dateAdministered" });
    const [dayTolahim, setDayTolahim] = React.useState(dayjs(dateVal));

    const dateVal1 = useWatch({ control, name: "ikur.dateAdministered" });
    const [dayIkur, setDayIkur] = React.useState(dayjs(dateVal1));

    const dateVal2 = useWatch({ control, name: "kalevet.dateAdministered" });
    const [dayKalevet, setDayKalevet] = React.useState(dayjs(dateVal2));

    const dateVal3 = useWatch({ control, name: "meshushe.dateAdministered" });
    const [dayMeshushe, setDayMeshushe] = React.useState(dayjs(dateVal3));

    function handleDayTolahimSelect(day) {
        setDayTolahim(day);
        setValue('tolahim.dateAdministered', day);
    }

    function handleDayIkurSelect(day) {
        setDayIkur(day);
        setValue('ikur.dateAdministered', day);
    }

    function handleDayKalevetSelect(day) {
        setDayKalevet(day);
        setValue('kalevet.dateAdministered', day);
    }

    function handleDayMeshusheSelect(day) {
        setDayMeshushe(day);
        setValue('meshushe.dateAdministered', day);
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
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        margin: "0 0 16px",
                    }}
                >
                    <Typography variant="body1">חיסון כלבת</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Controller
                            name="kalevet.veterenarian"
                            control={control}
                            // rules={{ required: true }}
                            render={({ field }) => (
                                <>
                                    <TextField
                                        {...field}
                                        aria-labelledby="demo-textfield-label"
                                        placeholder="וטרינר  מחסן/מעקר"
                                        sx={{ width: "300px" }}
                                    />
                                </>
                            )}
                        />
                        <Controller
                            name="kalevet.dateAdministered"
                            control={control}
                            // rules={{ required: true }}
                            render={({ field }) => (
                                <Box sx={{ marginLeft: "8px" }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker shouldCloseOnSelect={true} label="פג תוקף חיסון" {...field}
                                                    slotProps={{
                                                        field: { clearable: true },

                                                    }} sx={{ width: "300px" }}
                                                    format="DD/MM/YYYY"
                                                    value={dayKalevet}
                                                    onChange={(newDay) => handleDayKalevetSelect(newDay)}
                                        />
                                    </LocalizationProvider>
                                </Box>
                            )}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        margin: "0 0 16px",
                    }}
                >
                    <Typography variant="body1">חיסון משושה</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Controller
                            name="meshushe.veterenarian"
                            control={control}
                            // rules={{ required: true }}
                            render={({ field }) => (
                                <>
                                    <TextField
                                        {...field}
                                        aria-labelledby="demo-textfield-label"
                                        placeholder="וטרינר  מחסן/מעקר"
                                        sx={{ width: "300px" }}
                                    />
                                </>
                            )}
                        />
                        <Controller
                            name="meshushe.dateAdministered"
                            control={control}
                            // rules={{ required: true }}
                            render={({ field }) => (
                                <Box sx={{ marginLeft: "8px" }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker shouldCloseOnSelect={true} label="פג תוקף חיסון" {...field}
                                                    slotProps={{
                                                        field: { clearable: true },

                                                    }} sx={{ width: "300px" }}
                                                    format="DD/MM/YYYY"
                                                    value={dayMeshushe}
                                                    onChange={(newDay) => handleDayMeshusheSelect(newDay)}
                                        />
                                    </LocalizationProvider>
                                </Box>
                            )}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        margin: "0 0 16px",
                    }}
                >
                    <Typography variant="body1">טיפול לתולעים</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Controller
                            name="tolahim.veterenarian"
                            control={control}
                            // rules={{ required: true }}
                            render={({ field }) => (
                                <>
                                    <TextField
                                        {...field}
                                        aria-labelledby="demo-textfield-label"
                                        placeholder="וטרינר  מחסן/מעקר"
                                        sx={{ width: "300px" }}
                                    />
                                </>
                            )}
                        />
                        <Controller
                            name="tolahim.dateAdministered"
                            control={control}
                            // rules={{ required: true }}
                            render={({ field }) => (
                                <Box sx={{ marginLeft: "8px" }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker shouldCloseOnSelect={true} label="פג תוקף חיסון" {...field}
                                                    slotProps={{
                                                        field: { clearable: true },

                                                    }} sx={{ width: "300px" }}
                                                    format="DD/MM/YYYY"
                                                    value={dayTolahim}
                                                    onChange={(newDay) => handleDayTolahimSelect(newDay)}
                                        />
                                    </LocalizationProvider>
                                </Box>
                            )}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        margin: "0 0 16px",
                    }}
                >
                    <Typography variant="body1">עיקור</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Controller
                            name="ikur.veterenarian"
                            control={control}
                            // rules={{ required: true }}
                            render={({ field }) => (
                                <>
                                    <TextField
                                        {...field}
                                        aria-labelledby="demo-textfield-label"
                                        placeholder="וטרינר  מחסן/מעקר"
                                        sx={{ width: "300px" }}
                                    />
                                </>
                            )}
                        />
                        <Controller
                            name="ikur.dateAdministered"
                            control={control}
                            // rules={{ required: true }}
                            render={({ field }) => (
                                <Box sx={{ marginLeft: "8px" }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker shouldCloseOnSelect={true} label="פג תוקף חיסון" {...field}
                                                    slotProps={{
                                                        field: { clearable: true },

                                                    }} sx={{ width: "300px" }}
                                                    format="DD/MM/YYYY"
                                                    value={dayIkur}
                                                    onChange={(newDay) => handleDayIkurSelect(newDay)}
                                        />
                                    </LocalizationProvider>
                                </Box>
                            )}
                        />
                    </Box>
                </Box>
                <Controller
                    name="commentsTreatment"
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

export default Treatments;
