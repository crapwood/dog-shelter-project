// @ts-nocheck
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Divider, LinearProgress } from "@mui/material";
import "../styles/main-page.scss";
import Grid from "@mui/material/Grid";
import Navbar from "@/components/navbar";
import Filters from "@/components/filters";
import { useGlobalStore } from "@/store/global-items.store";
import { columns } from "@/constants/constants";
import axios from "../../node_modules/axios/index";

export default function MainPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const baseUrl = window.location.origin;
      const response = await axios.get(`${baseUrl}/api/db-queries`);
      setData(response.data);
    }
    fetchData();
  }, []);
  console.log(data, "frommain");

  const { selectedTableData } = useGlobalStore();
  //   console.log(selectedTableData);

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
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Filters />
          <Divider />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
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
            density="comfortable"
            // columnThreshold={0}
            // rowThreshold={0}
            // autoPageSize={true}
            // autoHeight={true}
            hideFooterPagination={true}
            sx={{ padding: "24px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   // const res = await prisma.dogs.findMany();
//   const res = {};
//   const data = await res;

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       data,
//     },
//   };
// }
