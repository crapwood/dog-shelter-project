// @ts-nocheck
import React from "react";
import { FormLabel, TextField, Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import enGB from "date-fns";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Controller } from "react-hook-form";

interface TreatmentsProps {
  control: any;
  errors: any;
}

function Treatments({ control, errors }: TreatmentsProps) {
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
              name="kalevet.veterinarian"
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
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    locale={enGB}
                  >
                    <DateField label="תאריך חיסון" {...field} />
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
              name="meshushe.veterinarian"
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
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    locale={enGB}
                  >
                    <DateField label="תאריך חיסון" {...field} />
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
              name="tolahim.veterinarian"
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
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    locale={enGB}
                  >
                    <DateField label="תאריך חיסון" {...field} />
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
              name="ikur.veterinarian"
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
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    locale={enGB}
                  >
                    <DateField label="תאריך חיסון" {...field} />
                  </LocalizationProvider>
                </Box>
              )}
            />
          </Box>
        </Box>
        <Controller
          name="treatmentsComments"
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

export default Treatments;
