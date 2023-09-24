// @ts-nocheck
import React from "react";
import {
  Box,
  Checkbox,
  TextField,
  Button,
  FormLabel,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import Navbar from "@/components/navbar";
import { useForm, Controller } from "react-hook-form";
import { useGlobalStore } from "@/store/global-items.store";
import { useRouter } from "next/navigation";
import { cabins, breed } from "@/constants/constants";
import axios from "../../node_modules/axios/index";

function NewAnimal() {
  const { selectedTableData, setTableData } = useGlobalStore();
  const { push } = useRouter();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      chipNum: "",
      diskit: 0,
      status: "נוכח",
      gender: "זכר",
      breed: "",
      cabin: "",
    },
  });
  const onSubmit = (data) => {
    const temp = { ...data, diskit: Number(data.diskit) };
    axios.post(`/api/db-queries`, temp);
    push("/main-page");
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          marginTop: "65px",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "24px",
              minWidth: "600px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h4">קליטת חיה חדשה</Typography>
            </Box>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <FormLabel id="demo-textfield-label">שם*</FormLabel>
                  <TextField
                    {...field}
                    aria-labelledby="demo-textfield-label"
                  />
                  <br />
                </>
              )}
            />
            <Controller
              name="gender"
              control={control}
              rules={{ required: true }}
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
                      control={<Radio />}
                      label="זכר"
                    />
                    <FormControlLabel
                      value="נקבה"
                      control={<Radio />}
                      label="נקבה"
                    />
                  </RadioGroup>
                  <br />
                </FormControl>
              )}
            />
            <Controller
              name="breed"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <FormLabel id="demo-textfield-label">גזע* </FormLabel>

                  <Select
                    {...field}
                    labelId="demo-multiple-name-label"
                    aria-labelledby="demo-textfield-label"
                    id="demo-multiple-name"
                  >
                    {breed.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  <br />
                </>
              )}
            />
            <Controller
              name="chipNum"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <FormLabel id="demo-textfield-label">מס. שבב</FormLabel>
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
              name="diskit"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <FormLabel id="demo-textfield-label">דיסקיט</FormLabel>
                  <TextField
                    {...field}
                    aria-labelledby="demo-textfield-label"
                    type="number"
                    sx={{ width: "300px" }}
                  />
                  <br />
                </>
              )}
            />

            <Controller
              name="cabin"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <FormLabel id="demo-textfield-label">ביתן*</FormLabel>
                  <Select
                    {...field}
                    labelId="demo-multiple-name-label"
                    aria-labelledby="demo-textfield-label"
                    id="demo-multiple-name"
                  >
                    {cabins.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        // style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  <br />
                </>
              )}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "200px", height: "56px" }}
                size="large"
              >
                בצע קליטה
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default NewAnimal;
