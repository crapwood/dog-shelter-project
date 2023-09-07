// @ts-nocheck
import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Divider } from "@mui/material";
import '../styles/main-page.scss'
import Grid from "@mui/material/Grid";
import Navbar from "@/components/navbar";
import Filters from "@/components/filters";
import { useGlobalStore } from "@/store/global-items.store";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'מס.', width: 70 },
    { field: 'name', headerName: 'שם', width: 200 },
    { field: 'breed', headerName: 'גזע', width: 200 },
    {
        field: 'gender',
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



export default function MainPage() {
    const {selectedTableData, getData} = useGlobalStore();
    // console.log(getData(), 'getData')
    // console.log(selectedTableData)

    function setupRowData(){
        return getData().map((data, index) => {
            index++;
            return {...data, id: index}
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12}>
                    <Filters/>
                    <Divider/>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <DataGrid
                        rows={setupRowData()}
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
                        sx={{ padding: '24px' }}
                    />
                </Grid>
            </Grid>

        </Box>


    );
}
