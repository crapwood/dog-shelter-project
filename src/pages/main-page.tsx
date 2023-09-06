// @ts-nocheck
import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Divider } from "@mui/material";
import '../styles/main-page.scss'
import Grid from "@mui/material/Grid";
import Navbar from "@/components/navbar";
import Filters from "@/components/filters";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'מס.', width: 70 },
    { field: 'name', headerName: 'שם', width: 200 },
    { field: 'breed', headerName: 'גזע', width: 200 },
    {
        field: 'sex',
        headerName: 'מין',
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
    { field: 'chip', headerName: 'מס. שבב', width: 250 },
    { field: 'bitan', headerName: 'ביתן', width: 180 },
    { field: 'status', headerName: 'סטטוס', width: 150 },
];

export const tempData = [
    { id: 1, breed: 'Snow', name: 'Jon', sex: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'פעיל' },
    { id: 2, breed: 'Lannister', name: 'Cersei', sex: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'פעיל' },
    { id: 3, breed: 'Lannister', name: 'Jaime', sex: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 4, breed: 'Stark', name: 'Arya', sex: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'לא פעיל' },
    {
        id: 5,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'לא פעיל'
    },
    { id: 6, breed: 'Melisandre', name: null, sex: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'לא פעיל' },
    { id: 7, breed: 'Clifford', name: 'Ferrara', sex: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'פעיל' },
    { id: 8, breed: 'Frances', name: 'Rossini', sex: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'פעיל' },
    { id: 9, breed: 'Roxie', name: 'Harvey', sex: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 10, breed: 'Snow', name: 'Jon', sex: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'פעיל' },
    { id: 12, breed: 'Lannister', name: 'Cersei', sex: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'פעיל' },
    { id: 13, breed: 'Lannister', name: 'Jaime', sex: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 14, breed: 'Stark', name: 'Arya', sex: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'לא פעיל' },
    {
        id: 15,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'לא פעיל'
    },
    { id: 16, breed: 'Melisandre', name: null, sex: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'לא פעיל' },
    { id: 17, breed: 'Clifford', name: 'Ferrara', sex: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'פעיל' },
    { id: 18, breed: 'Frances', name: 'Rossini', sex: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'פעיל' },
    { id: 19, breed: 'Roxie', name: 'Harvey', sex: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 20, breed: 'Snow', name: 'Jon', sex: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'פעיל' },
    { id: 21, breed: 'Lannister', name: 'Cersei', sex: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'פעיל' },
    { id: 23, breed: 'Lannister', name: 'Jaime', sex: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 24, breed: 'Stark', name: 'Arya', sex: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'לא פעיל' },
    {
        id: 25,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'לא פעיל'
    },
    { id: 26, breed: 'Melisandre', name: null, sex: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'לא פעיל' },
    { id: 27, breed: 'Clifford', name: 'Ferrara', sex: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'פעיל' },
    { id: 28, breed: 'Frances', name: 'Rossini', sex: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'פעיל' },
    { id: 29, breed: 'Roxie', name: 'Harvey', sex: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 30, breed: 'Snow', name: 'Jon', sex: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'פעיל' },
    { id: 32, breed: 'Lannister', name: 'Cersei', sex: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'פעיל' },
    { id: 33, breed: 'Lannister', name: 'Jaime', sex: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 34, breed: 'Stark', name: 'Arya', sex: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'לא פעיל' },
    {
        id: 35,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'לא פעיל'
    },
    { id: 36, breed: 'Melisandre', name: null, sex: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'לא פעיל' },
    { id: 37, breed: 'Clifford', name: 'Ferrara', sex: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'פעיל' },
    { id: 38, breed: 'Frances', name: 'Rossini', sex: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'פעיל' },
    { id: 39, breed: 'Roxie', name: 'Harvey', sex: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 40, breed: 'Snow', name: 'Jon', sex: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'פעיל' },
    { id: 42, breed: 'Lannister', name: 'Cersei', sex: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'פעיל' },
    { id: 43, breed: 'Lannister', name: 'Jaime', sex: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 44, breed: 'Stark', name: 'Arya', sex: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'לא פעיל' },
    {
        id: 45,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'לא פעיל'
    },
    { id: 46, breed: 'Melisandre', name: null, sex: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'לא פעיל' },
    { id: 47, breed: 'Clifford', name: 'Ferrara', sex: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'פעיל' },
    { id: 48, breed: 'Frances', name: 'Rossini', sex: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'פעיל' },
    { id: 49, breed: 'Roxie', name: 'Harvey', sex: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 50, breed: 'Snow', name: 'Jon', sex: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'פעיל' },
    { id: 52, breed: 'Lannister', name: 'Cersei', sex: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'פעיל' },
    { id: 53, breed: 'Lannister', name: 'Jaime', sex: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'לא פעיל' },
    { id: 54, breed: 'Stark', name: 'Arya', sex: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'לא פעיל' },
    {
        id: 55,
        breed: 'Targaryen',
        name: 'Daenerys',
        sex: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'לא פעיל'
    },
    { id: 56, breed: 'Melisandre', name: null, sex: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'לא פעיל' },
    { id: 57, breed: 'Clifford', name: 'Ferrara', sex: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'פעיל' },
    { id: 58, breed: 'Frances', name: 'Rossini', sex: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'פעיל' },
    { id: 59, breed: 'Roxie', name: 'Harvey', sex: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'לא פעיל' },
];

export default function MainPage() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12}>
                    <Filters />
                    <Divider />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <DataGrid
                        rows={tempData}
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
                         sx={{padding: '24px'}}
                    />
                </Grid>
            </Grid>

        </Box>


    );
}
