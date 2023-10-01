// @ts-nocheck
import React, { useEffect, useState } from "react";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import { Box, Divider, LinearProgress } from "@mui/material";
import "../styles/main-page.scss";
import Grid from "@mui/material/Grid";
import Navbar from "@/components/navbar";
import Filters from "@/components/filters";
import { useGlobalStore } from "@/store/global-items.store";
import { columns } from "@/constants/constants";

export default function MainPage() {
    const { viewMode } = useGlobalStore();
    const [data, setData] = useState([]);
    const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);
    console.log(rowSelectionModel)

    useEffect(() => {
        async function fetchData() {
            const req = await fetch(`/api/db-queries`, { cache: "no-cache" });
            const response = await req.json();
            setData(response);
        }

        fetchData();
    }, []);

    function setupRowData() {
        return data.map((entry, index) => {
            index++;
            return { ...entry, id: index };
        });
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
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <DataGrid
                        // slots={{
                        //   loadingOverlay: LinearProgress,
                        // }}
                        onRowSelectionModelChange={(newRowSelectionModel) => {
                            setRowSelectionModel(newRowSelectionModel);
                        }}
                        rowSelectionModel={rowSelectionModel}
                        loading={!data.length}
                        rows={setupRowData()}
                        columns={columns}
                        hideFooter={true}
                        onRowClick={(a, b, c) => console.log(a)}
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
                        sx={{
                            padding: "24px", '& .MuiDataGrid-cell:focus': {
                                outline: 'none',
                            }
                        }}
                    />
                </Grid>
            </Grid>
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
