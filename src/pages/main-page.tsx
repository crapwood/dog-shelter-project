// @ts-nocheck
import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Divider, LinearProgress } from "@mui/material";
import '../styles/main-page.scss'
import Grid from "@mui/material/Grid";
import Navbar from "@/components/navbar";
import Filters from "@/components/filters";
import { useGlobalStore } from "@/store/global-items.store";
import { columns } from "@/constants/constants";



export default function MainPage() {
    useEffect(() => {
        useGlobalStore.persist.rehydrate();
    }, [])
    const {selectedTableData} = useGlobalStore();

    function setupRowData(){
        return selectedTableData.map((data, index) => {
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
                        slots={{
                            loadingOverlay: LinearProgress,
                        }}
                        // loading
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
