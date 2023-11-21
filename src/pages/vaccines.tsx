// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import Navbar from "@/components/navbar";
import { Box } from "@mui/material";
import '../styles/new-animal.scss';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditButton from "@/components/edit-button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "../styles/main-page.scss";

function Vaccines() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            const req = await fetch(`/api/db-query-vaccines`);
            const response = await req.json();
            setData(response)
        }

        fetchData();
    }, [])

    const columns: GridColDef[] = [
        {
            field: "id", headerName: "מס.", width: 70, renderCell: (params) => {
                return (<b>{params.value}</b>)
            }
        },
        {
            field: "arriveCause", headerName: "תאריך טיפול", width: 200, renderCell: (params) => {
                const isoDate = new Date(params.value).toISOString().split('T')[0]
                return (<b>{isoDate}</b>)
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
            field: "chipNum", headerName: "מס. שבב", width: 250, renderCell: (params) => {
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



    return (
        <>
        <Box sx={{ flexGrow: 1 }} className="page-container">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ height: '48px', backgroundColor: 'transparent', width: '100%' }}/>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <DataGrid
                        // onRowSelectionModelChange={(newRowSelectionModel) => {
                        //     setRowSelectionModel(newRowSelectionModel);
                        // }}
                        // rowSelectionModel={rowSelectionModel}
                        loading={!data.length}
                        rows={setupRowData()}
                        columns={columns}
                        hideFooter={true}
                        // onRowClick={(a, b, c) => handleSelectRow(a.row)}
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
                    />
                </Grid>
            </Grid>
        </Box>
        </>
    );
}

export default Vaccines;
