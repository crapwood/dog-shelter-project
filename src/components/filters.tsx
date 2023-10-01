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
  cabinsFilterOptions,
  breedFilterOptions,
  genderFilterOptions,
  ITEM_HEIGHT,
  ITEM_PADDING_TOP,
  statusFilterOptions,
  sizeFilterOptions
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
  const [name, setName] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [diskit, setDiskit] = React.useState("");
  const [chipNum, setChipNum] = React.useState("");
  const [bitan, setBitan] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [size, setSize] = React.useState("");

  const handleChangeBreed = (event) => {
    const {
      target: { value },
    } = event;
    setBreed(
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeName = (event) => {
    const {
      target: { value },
    } = event;
    setName(
        typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeSex = (event) => {
    const {
      target: { value },
    } = event;
    setSex(
        typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeDiskit = (event) => {
    const {
      target: { value },
    } = event;
    setDiskit(
        typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeChipNum = (event) => {
    const {
      target: { value },
    } = event;
    setChipNum(
        typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeBitan = (event) => {
    const {
      target: { value },
    } = event;
    setBitan(
        typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeStatus = (event) => {
    const {
      target: { value },
    } = event;
    setStatus(
        typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeSize = (event) => {
    const {
      target: { value },
    } = event;
    setSize(
        typeof value === "string" ? value.split(",") : value
    );
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
      <TextField id="standard-basic" label="שם" variant="outlined" onChange={handleChangeName}/>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">גזע</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={breed}
          onChange={handleChangeBreed}
          input={<OutlinedInput label="Breed" />}
          MenuProps={MenuProps}
        >
          {breedFilterOptions.map((name) => (
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
          value={sex}
          onChange={handleChangeSex}
          input={<OutlinedInput label="Gender" />}
          MenuProps={MenuProps}
        >
          {genderFilterOptions.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">גודל</InputLabel>
        <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={size}
            onChange={handleChangeSize}
            input={<OutlinedInput label="Breed" />}
            MenuProps={MenuProps}
        >
          {sizeFilterOptions.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField id="standard-basic" label="מס. דיסקיט" variant="outlined" onChange={handleChangeDiskit}/>
      <TextField id="standard-basic" label="מס. שבב" variant="outlined" onChange={handleChangeChipNum}/>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">ביתן</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={bitan}
          onChange={handleChangeBitan}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {cabinsFilterOptions.map((name) => (
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
          value={status}
          onChange={handleChangeStatus}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {statusFilterOptions.map((name) => (
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
