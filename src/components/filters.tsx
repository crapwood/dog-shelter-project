// @ts-nocheck
import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  cabins,
  breed,
  gender,
  ITEM_HEIGHT,
  ITEM_PADDING_TOP,
  status,
} from "@/constants/constants";

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
  const [genderName, setGenderName] = React.useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setBreedName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeGender = (event) => {
    const {
      target: { value },
    } = event;
    setGenderName(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "60px",
        padding: "24px",
      }}
    >
      <TextField id="standard-basic" label="שם" variant="outlined" />
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">גזע</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={breedName}
          onChange={handleChange}
          input={<OutlinedInput label="Breed" />}
          MenuProps={MenuProps}
        >
          {breed.map((name) => (
            <MenuItem key={name} value={name}>
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
          input={<OutlinedInput label="Gender" />}
          MenuProps={MenuProps}
        >
          {gender.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField id="standard-basic" label="שבב" variant="outlined" />
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">ביתן</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={breedName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {cabins.map((name) => (
            <MenuItem key={name} value={name}>
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
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {status.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" sx={{ height: "56px", width: "200px" }}>
        <Typography variant="h6">סינון</Typography>
      </Button>
    </Box>
  );
}

export default Filters;
