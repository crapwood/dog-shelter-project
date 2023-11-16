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
import { useGlobalStore } from "@/store/global-items.store";

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

interface FiltersProps {
    handleFilterButton: () => void;
}

function Filters({ handleFilterButton }: FiltersProps) {
    const {
        filterName,
        setFilterName,
        filterBreed,
        setFilterBreed,
        filterGender,
        setFilterGender,
        filterSize,
        setFilterSize,
        setFilterDiskit,
        setFilterChipNum,
        filterCabin,
        setFilterCabin,
        filterStatus,
        setFilterStatus
    } = useGlobalStore();
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
        setFilterBreed(
            typeof value === "string" ? value.split(",") : value
        );
    };
    const handleChangeName = (event) => {
        const {
            target: { value },
        } = event;
        setFilterName(
            typeof value === "string" ? value.split(",") : value
        );
    };
    const handleChangeSex = (event) => {
        const {
            target: { value },
        } = event;
        setFilterGender(
            typeof value === "string" ? value.split(",") : value
        );
    };
    const handleChangeDiskit = (event) => {
        const {
            target: { value },
        } = event;
        setFilterDiskit(
            typeof value === "string" ? value.split(",") : value
        );
    };
    const handleChangeChipNum = (event) => {
        const {
            target: { value },
        } = event;
        setFilterChipNum(
            typeof value === "string" ? value.split(",") : value
        );
    };
    const handleChangeBitan = (event) => {
        const {
            target: { value },
        } = event;
        setFilterCabin(
            typeof value === "string" ? value.split(",") : value
        );
    };
    const handleChangeStatus = (event) => {
        const {
            target: { value },
        } = event;
        setFilterStatus(
            typeof value === "string" ? value.split(",") : value
        );
    };
    const handleChangeSize = (event) => {
        const {
            target: { value },
        } = event;
        setFilterSize(
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
                    value={filterBreed}
                    onChange={handleChangeBreed}
                    input={<OutlinedInput label="Breed"/>}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>--</em>
                    </MenuItem>
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
                    value={filterGender}
                    onChange={handleChangeSex}
                    input={<OutlinedInput label="Gender"/>}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>--</em>
                    </MenuItem>
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
                    value={filterSize}
                    onChange={handleChangeSize}
                    input={<OutlinedInput label="Breed"/>}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>--</em>
                    </MenuItem>
                    {sizeFilterOptions.map((name) => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField id="standard-basic" label="מס. דיסקית" variant="outlined" onChange={handleChangeDiskit}
                       sx={{ marginRight: '8px' }}/>
            <TextField id="standard-basic" label="מס. שבב" variant="outlined" onChange={handleChangeChipNum}/>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">ביתן</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={filterCabin}
                    onChange={handleChangeBitan}
                    input={<OutlinedInput label="Name"/>}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>--</em>
                    </MenuItem>
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
                    value={filterStatus}
                    onChange={handleChangeStatus}
                    input={<OutlinedInput label="Name"/>}
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>--</em>
                    </MenuItem>
                    {statusFilterOptions.map((name) => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="contained" sx={{ height: "56px", width: "200px" }} onClick={handleFilterButton}>
                <Typography variant="h6">סינון</Typography>
            </Button>
        </Box>
    );
}

export default Filters;
