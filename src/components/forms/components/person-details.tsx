// @ts-nocheck
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import enGB from "date-fns/locale/en-GB";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from "react-hook-form";
import { FormLabel, TextField, Box } from "@mui/material";

interface PersonDetailsProps {
  control: any;
  errors: any;
}

function PersonDetails({ control, errors }: PersonDetailsProps) {
    const [openDatePicker, setOpenDatePicker] = useState(false)
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
          name="dateAdded"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <LocalizationProvider dateAdapter={AdapterDateFns} locale={enGB}>
                <DatePicker shouldCloseOnSelect={true} label="תאריך מסירה" {...field} slotProps={{
                    field: { clearable: true  },
                    // textField: {
                    //     onClick: () => setOpenDatePicker(true),
                    // }
                }} sx={{ width: "300px" }}/>
              </LocalizationProvider>
              <br />
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
              <br />
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
              <br />
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
              <TextField {...field} aria-labelledby="demo-textfield-label" />
              <br />
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
                sx={{ width: "300px" }}
              />
              <br />
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
              <br />
            </>
          )}
        />
      </Box>
    </>
  );
}

export default PersonDetails;
