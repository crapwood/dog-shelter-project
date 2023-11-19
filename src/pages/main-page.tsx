// @ts-nocheck
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Button,
    Divider,
    Drawer,
    LinearProgress,
    Typography
} from "@mui/material";
import "../styles/main-page.scss";
import Grid from "@mui/material/Grid";
import Navbar from "@/components/navbar";
import Filters from "@/components/filters";
import { useGlobalStore } from "@/store/global-items.store";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PetsIcon from "@mui/icons-material/Pets";
import AnimalDetails from "@/components/forms/components/animal-details";
import PersonIcon from "@mui/icons-material/Person";
import PersonDetails from "@/components/forms/components/person-details";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Treatments from "@/components/forms/components/treatments";
import { VIEW_MODE } from "@/enums/enums";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useForm } from "react-hook-form";
import EditButton from "@/components/edit-button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { EmptyState } from "@/components/empty-state";
import { Sidepanel } from "@/components/forms/sidepanel/sidepanel";

export default function MainPage() {
    const {
        viewMode,
        selectedRowFromGrid,
        setSelectedRowFromGrid,
        filterName,
        filterGender,
        filterStatus,
        filterBreed,
        filterSize,
        filterDiskit,
        filterChipNum,
        filterCabin
    } = useGlobalStore();
    const [data, setData] = useState([]);
    const [selectedRowData, setSelectedRowData] = useState([]);
    const [selectedRow, setSelectedRow] = useState<>({});
    const [openSidepanel, setOpenSidepanel] = useState(false)

    async function fetchFilteredData() {
        const req = await fetch(`/api/db-query-filter`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            cache: "no-cache",
            body: JSON.stringify({
                name: filterName[0] === "" ? "" : filterName,
                gender: filterGender[0] === "" ? "" : filterGender,
                status: filterStatus[0] === "" ? "" : filterStatus,
                breed: filterBreed[0] === "" ? "" : filterBreed,
                size: filterSize[0] === "" ? "" : filterSize,
                diskit: filterDiskit[0] === "" ? "" : filterDiskit,
                chipNum: filterChipNum[0] === "" ? "" : filterChipNum,
                cabin: filterCabin[0] === "" ? "" : filterCabin
            })
        });
        const response = await req.json();
        setData(response);
    }

    async function fetchSelectedRowData(selecteRowUniqNum) {
        const req = await fetch(`/api/db-get-row-data`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            cache: "no-cache",
            body: JSON.stringify({
                uniqNum: selecteRowUniqNum
            })
        });
        const response = await req.json();
        setSelectedRowData(response);
    }

    useEffect(() => {
        async function fetchData() {
            const req = await fetch(`/api/db-queries`);
            const response = await req.json();
            setData(response);
        }

        fetchData();
    }, []);

    function handleEditButtonClick() {
        setOpenSidepanel(true);
        fetchSelectedRowData(selectedRow.uniqNum)
    }

    const columns: GridColDef[] = [
        {
            field: 'editBtn', headerName: "", disableColumnMenu: true, width: 100, renderCell: (params) => {
                return (<EditButton handleEditButtonClick={handleEditButtonClick}/>)
            }
        },
        {
            field: "id", headerName: "מס.", width: 70, renderCell: (params) => {
                return (<b>{params.value}</b>)
            }
        },
        {
            field: "name", headerName: "שם", width: 150, renderCell: (params) => {
                return (<b>{params.value}</b>)
            }
        },
        {
            field: "breed", headerName: "גזע", width: 150, renderCell: (params) => {
                return (<b>{params.value}</b>)
            }
        },
        {
            field: "gender",
            headerName: "מין",
            width: 100, renderCell: (params) => {
                return (<b>{params.value}</b>)
            }
        },
        {
            field: "size", headerName: "גודל", width: 100, renderCell: (params) => {
                return (<b>{params.value}</b>)
            }
        },
        {
            field: "diskit", headerName: "מס. דיסקית", width: 250, renderCell: (params) => {
                return (<b>{params.value}</b>)
            }
        },
        {
            field: "chipNum", headerName: "מס. שבב", width: 250, renderCell: (params) => {
                return (<b>{params.value}</b>)
            }
        },
        {
            field: "cabin", headerName: "ביתן", width: 180, renderCell: (params) => {
                return (<b>{params.value}</b>)
            }
        },
        {
            field: "status",
            headerName: "סטטוס",
            width: 150,
            renderCell: (params) => {
                if (params.value === "נוכח") {
                    return <CheckCircleOutlineIcon color="success"/>;
                } else {
                    return <HighlightOffIcon color="error"/>;
                }
            },
        },
    ];

    function setupRowData() {
        return data.map((entry, index) => {
            index++;
            return { ...entry, id: index };
        });
    }

    function handleSelectRow(rowSelected) {
        setSelectedRow(rowSelected);
    }

    function handleFilterButton() {
        fetchFilteredData();
    }

    return (
        <Box sx={{ flexGrow: 1 }} className="page-container">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12}>
                    <Filters handleFilterButton={handleFilterButton}/>
                    <Divider/>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    {data.length ? <DataGrid
                            // onRowSelectionModelChange={(newRowSelectionModel) => {
                            //     setRowSelectionModel(newRowSelectionModel);
                            // }}
                            // rowSelectionModel={rowSelectionModel}
                            loading={!data.length}
                            rows={setupRowData()}
                            columns={columns}
                            hideFooter={true}
                            onRowClick={(a, b, c) => handleSelectRow(a.row)}
                            // initialState={{
                            //     pagination: {
                            //         paginationModel: { page: 0, pageSize: 10 },
                            //     },
                            // }}
                            // pageSizeOptions={[5, 10]}
                            // checkboxSelection
                            // sx={{'& .MuiDataGrid-root':{
                            //     direction: 'rtl'
                            //     }}}
                            className="grid-root-container"
                            // autoPageSize
                            density="comfortable"
                            // columnThreshold={0}
                            // rowThreshold={0}
                            // autoPageSize={true}
                            // autoHeight={true}
                            hideFooterPagination={true}
                            disableSelectionOnClick
                            sx={{
                                padding: "24px", '& .MuiDataGrid-cell:focus': {
                                    outline: 'none !important',
                                },
                                background: "rgba(0, 0, 0 , 0.04)"
                            }}
                        /> :
                        <EmptyState/>
                    }
                </Grid>
            </Grid>
            <Sidepanel openSidepanel={openSidepanel} setOpenSidepanel={setOpenSidepanel}
                       selectedRowData={selectedRowData}/>
        </Box>
    );
}

// export async function getStaticProps() {
//   // Fetch data from external API
//   const res = await prisma.dogs.findMany();
//   const data = JSON.parse(JSON.stringify(res));
//   // Pass data to the page via props
//   return { props: { data }, revalidate: 60 };
// }
