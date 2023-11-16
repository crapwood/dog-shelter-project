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
    const [selectedRow, setSelectedRow] = useState<>({});
    const [openSidepanel, setOpenSidepanel] = useState(false)
    const [expand, setExpand] = React.useState<string | true>(true);

    const { handleSubmit, control, reset, formState } = useForm({
        defaultValues: {
            name: "",
            chipNum: "",
            status: "נוכח",
            diskit: "",
            gender: "זכר",
            breed: "",
            cabin: "",
            size: "",
        },
    });

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

    useEffect(() => {
        async function fetchData() {
            const req = await fetch(`/api/db-queries`);
            const response = await req.json();
            setData(response);
        }

        fetchData();
    }, []);

    useEffect(() => {
        const defaults = {
            name: selectedRow.name,
            chipNum: selectedRow.chipNum,
            status: selectedRow.status,
            diskit: selectedRow.diskit,
            gender: "זכר",
            breed: selectedRow.breed,
            cabin: selectedRow.cabin,
            size: selectedRow.size,
        }
        reset(defaults)
    }, [selectedRow, reset]);

    const columns: GridColDef[] = [
        {
            field: 'editBtn', headerName: "", disableColumnMenu: true, width: 100, renderCell: (params) => {
                return (<EditButton setOpenSidepanel={setOpenSidepanel}/>)
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

    const onSubmit = async (data) => {
        setViewMode(undefined);
        const formData = { ...data, diskit: Number(data.diskit) };
        console.log(formData)
        // await fetch("/api/db-queries", {
        //   method: "POST",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData),
        // });
        // await push("/main-page");
    };
    const handleExpand =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpand(isExpanded ? panel : false);
        };

    function handleSelectRow(rowSelected) {
        console.log(rowSelected, 'rowSelected')
        setSelectedRow(rowSelected);
    }

    function handleFilterButton() {
        fetchFilteredData();
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
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
                            }
                        }}
                    /> :
                    <EmptyState />
                    }
                </Grid>
            </Grid>
            <Drawer
                anchor={"right"}
                open={openSidepanel}
                onClose={() => setOpenSidepanel(false)}
            >
                <Box sx={{ padding: '16px' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography variant="h4">{selectedRow.name}</Typography>
                        </Box>

                        <Accordion expanded={expand} onChange={handleExpand('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >

                                <Typography>פרטי בעל חיים</Typography>
                                <PetsIcon fontSize="small" sx={{ marginLeft: '8px' }}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AnimalDetails control={control} errors={formState.errors}/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>פרטי מסירה</Typography>
                                <PersonIcon fontSize="small" sx={{ marginLeft: '8px' }}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <PersonDetails control={control} errors={formState.errors}/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>טיפולים</Typography>
                                <VaccinesIcon fontSize="small" sx={{ marginLeft: '8px' }}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Treatments control={control} errors={formState.errors}/>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion disabled={viewMode === VIEW_MODE.NEW_ANIMAL}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>עזיבה</Typography>
                                <CelebrationIcon fontSize="small" sx={{ marginLeft: '8px' }}/>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h5">TODO: </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Box sx={{ display: "flex", justifyContent: "center", marginTop: '16px' }}>
                            <Button
                                variant="outlined"
                                sx={{ width: "100px", height: "56px", margin: '4px' }}
                                // size="small"
                                onClick={() => setOpenSidepanel(false)}
                            >
                                ביטול
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ width: "100px", height: "56px", margin: '4px' }}
                                // size="small"
                            >
                                שמירה
                            </Button>

                        </Box>
                    </form>
                </Box>
            </Drawer>
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
