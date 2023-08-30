import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Container } from "@mui/material";
import '../styles/main-age.scss'
import Grid from "@mui/material/Grid";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'breed', headerName: 'Breed', width: 200 },
    {
        field: 'sex',
        headerName: 'Sex',
        // type: 'number',
        width: 100,
    },
    // {
    //     field: 'diskit',
    //     headerName: 'Diskit',
    //     // description: 'This column has a value getter and is not sortable.',
    //     // sortable: false,
    //     width: 160
    //     // valueGetter: (params: GridValueGetterParams) =>
    //     //     `${params.row.name || ''} ${params.row.breed || ''}`,
    // },
    { field: 'chip', headerName: 'Chip#', width: 250 },
    { field: 'bitan', headerName: 'Bitan', width: 180 },
    { field: 'status', headerName: 'Status', width: 150 },
];

const rows = [
    { id: 1, breed: 'Snow', name: 'Jon', sex: 'M', chip: 985113003649217, bitan: 'Pension', status: 'active' },
    { id: 2, breed: 'Lannister', name: 'Cersei', sex: 'F', chip: 985113003649218, bitan: 'Pension', status: 'active' },
    { id: 3, breed: 'Lannister', name: 'Jaime', sex: 'M', chip: 985113003649219, bitan: 'Clinic', status: 'inactive' },
    { id: 4, breed: 'Stark', name: 'Arya', sex: 'F', chip: 985113003649220, bitan: 'Pension', status: 'inactive' },
    {
        id: 5,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'F',
        chip: 985113003649221,
        bitan: 'Clinic',
        status: 'inactive'
    },
    { id: 6, breed: 'Melisandre', name: null, sex: 'F', chip: 985113003649222, bitan: 'Pension', status: 'inactive' },
    { id: 7, breed: 'Clifford', name: 'Ferrara', sex: 'F', chip: 985113003649223, bitan: 'Clinic', status: 'active' },
    { id: 8, breed: 'Frances', name: 'Rossini', sex: 'M', chip: 985113003649224, bitan: 'Pension', status: 'active' },
    { id: 9, breed: 'Roxie', name: 'Harvey', sex: 'M', chip: 985113003649225, bitan: 'Clinic', status: 'inactive' },
    { id: 10, breed: 'Snow', name: 'Jon', sex: 'M', chip: 985113003649217, bitan: 'Pension', status: 'active' },
    { id: 12, breed: 'Lannister', name: 'Cersei', sex: 'F', chip: 985113003649218, bitan: 'Pension', status: 'active' },
    { id: 13, breed: 'Lannister', name: 'Jaime', sex: 'M', chip: 985113003649219, bitan: 'Clinic', status: 'inactive' },
    { id: 14, breed: 'Stark', name: 'Arya', sex: 'F', chip: 985113003649220, bitan: 'Pension', status: 'inactive' },
    {
        id: 15,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'F',
        chip: 985113003649221,
        bitan: 'Clinic',
        status: 'inactive'
    },
    { id: 16, breed: 'Melisandre', name: null, sex: 'F', chip: 985113003649222, bitan: 'Pension', status: 'inactive' },
    { id: 17, breed: 'Clifford', name: 'Ferrara', sex: 'F', chip: 985113003649223, bitan: 'Clinic', status: 'active' },
    { id: 18, breed: 'Frances', name: 'Rossini', sex: 'M', chip: 985113003649224, bitan: 'Pension', status: 'active' },
    { id: 19, breed: 'Roxie', name: 'Harvey', sex: 'M', chip: 985113003649225, bitan: 'Clinic', status: 'inactive' },
    { id: 20, breed: 'Snow', name: 'Jon', sex: 'M', chip: 985113003649217, bitan: 'Pension', status: 'active' },
    { id: 21, breed: 'Lannister', name: 'Cersei', sex: 'F', chip: 985113003649218, bitan: 'Pension', status: 'active' },
    { id: 23, breed: 'Lannister', name: 'Jaime', sex: 'M', chip: 985113003649219, bitan: 'Clinic', status: 'inactive' },
    { id: 24, breed: 'Stark', name: 'Arya', sex: 'F', chip: 985113003649220, bitan: 'Pension', status: 'inactive' },
    {
        id: 25,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'F',
        chip: 985113003649221,
        bitan: 'Clinic',
        status: 'inactive'
    },
    { id: 26, breed: 'Melisandre', name: null, sex: 'F', chip: 985113003649222, bitan: 'Pension', status: 'inactive' },
    { id: 27, breed: 'Clifford', name: 'Ferrara', sex: 'F', chip: 985113003649223, bitan: 'Clinic', status: 'active' },
    { id: 28, breed: 'Frances', name: 'Rossini', sex: 'M', chip: 985113003649224, bitan: 'Pension', status: 'active' },
    { id: 29, breed: 'Roxie', name: 'Harvey', sex: 'M', chip: 985113003649225, bitan: 'Clinic', status: 'inactive' },
    { id: 30, breed: 'Snow', name: 'Jon', sex: 'M', chip: 985113003649217, bitan: 'Pension', status: 'active' },
    { id: 32, breed: 'Lannister', name: 'Cersei', sex: 'F', chip: 985113003649218, bitan: 'Pension', status: 'active' },
    { id: 33, breed: 'Lannister', name: 'Jaime', sex: 'M', chip: 985113003649219, bitan: 'Clinic', status: 'inactive' },
    { id: 34, breed: 'Stark', name: 'Arya', sex: 'F', chip: 985113003649220, bitan: 'Pension', status: 'inactive' },
    {
        id: 35,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'F',
        chip: 985113003649221,
        bitan: 'Clinic',
        status: 'inactive'
    },
    { id: 36, breed: 'Melisandre', name: null, sex: 'F', chip: 985113003649222, bitan: 'Pension', status: 'inactive' },
    { id: 37, breed: 'Clifford', name: 'Ferrara', sex: 'F', chip: 985113003649223, bitan: 'Clinic', status: 'active' },
    { id: 38, breed: 'Frances', name: 'Rossini', sex: 'M', chip: 985113003649224, bitan: 'Pension', status: 'active' },
    { id: 39, breed: 'Roxie', name: 'Harvey', sex: 'M', chip: 985113003649225, bitan: 'Clinic', status: 'inactive' },
    { id: 40, breed: 'Snow', name: 'Jon', sex: 'M', chip: 985113003649217, bitan: 'Pension', status: 'active' },
    { id: 42, breed: 'Lannister', name: 'Cersei', sex: 'F', chip: 985113003649218, bitan: 'Pension', status: 'active' },
    { id: 43, breed: 'Lannister', name: 'Jaime', sex: 'M', chip: 985113003649219, bitan: 'Clinic', status: 'inactive' },
    { id: 44, breed: 'Stark', name: 'Arya', sex: 'F', chip: 985113003649220, bitan: 'Pension', status: 'inactive' },
    {
        id: 45,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'F',
        chip: 985113003649221,
        bitan: 'Clinic',
        status: 'inactive'
    },
    { id: 46, breed: 'Melisandre', name: null, sex: 'F', chip: 985113003649222, bitan: 'Pension', status: 'inactive' },
    { id: 47, breed: 'Clifford', name: 'Ferrara', sex: 'F', chip: 985113003649223, bitan: 'Clinic', status: 'active' },
    { id: 48, breed: 'Frances', name: 'Rossini', sex: 'M', chip: 985113003649224, bitan: 'Pension', status: 'active' },
    { id: 49, breed: 'Roxie', name: 'Harvey', sex: 'M', chip: 985113003649225, bitan: 'Clinic', status: 'inactive' },
    { id: 50, breed: 'Snow', name: 'Jon', sex: 'M', chip: 985113003649217, bitan: 'Pension', status: 'active' },
    { id: 52, breed: 'Lannister', name: 'Cersei', sex: 'F', chip: 985113003649218, bitan: 'Pension', status: 'active' },
    { id: 53, breed: 'Lannister', name: 'Jaime', sex: 'M', chip: 985113003649219, bitan: 'Clinic', status: 'inactive' },
    { id: 54, breed: 'Stark', name: 'Arya', sex: 'F', chip: 985113003649220, bitan: 'Pension', status: 'inactive' },
    {
        id: 55,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'F',
        chip: 985113003649221,
        bitan: 'Clinic',
        status: 'inactive'
    },
    { id: 56, breed: 'Melisandre', name: null, sex: 'F', chip: 985113003649222, bitan: 'Pension', status: 'inactive' },
    { id: 57, breed: 'Clifford', name: 'Ferrara', sex: 'F', chip: 985113003649223, bitan: 'Clinic', status: 'active' },
    { id: 58, breed: 'Frances', name: 'Rossini', sex: 'M', chip: 985113003649224, bitan: 'Pension', status: 'active' },
    { id: 59, breed: 'Roxie', name: 'Harvey', sex: 'M', chip: 985113003649225, bitan: 'Clinic', status: 'inactive' },
];

export default function MainPage() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ height: '200px', backgroundColor: 'red', width: '100%' }}>Filters (SQL Queries)</div>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
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
                        density='comfortable'
                        // columnThreshold={0}
                        // rowThreshold={0}
                        // autoPageSize={true}
                        // autoHeight={true}
                        hideFooterPagination={true}
                    />
                </Grid>
                {/*<Grid item xs={4}>*/}
                {/*    <div>xs=4</div>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={8}>*/}
                {/*    <div>xs=8</div>*/}
                {/*</Grid>*/}
            </Grid>

        </Box>


    );
}
