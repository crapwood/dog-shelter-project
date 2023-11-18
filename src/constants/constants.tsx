// @ts-nocheck
import { GridColDef } from "@mui/x-data-grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditButton from "@/components/edit-button";
import React from "react";

export const ITEM_HEIGHT = 48;
export const ITEM_PADDING_TOP = 8;

export const columns: GridColDef[] = [
    {
        field: 'editBtn', headerName: "", disableColumnMenu: true, width: 100, renderCell: (params) => {
            return (<EditButton/>)
        }
    },
    { field: "id", headerName: "מס.", width: 70 },
    { field: "name", headerName: "שם", width: 150 },
    { field: "breed", headerName: "גזע", width: 150 },
    {
        field: "gender",
        headerName: "מין",
        // type: 'number',
        width: 100,
    },
    { field: "size", headerName: "גודל", width: 100 },
    // {
    //     field: 'diskit',
    //     headerName: 'Diskit',
    //     // description: 'This column has a value getter and is not sortable.',
    //     // sortable: false,
    //     width: 160
    //     // valueGetter: (params: GridValueGetterParams) =>
    //     //     `${params.row.name || ''} ${params.row.breed || ''}`,
    // },
    { field: "diskit", headerName: "מס. דיסקית", width: 250 },
    { field: "chipNum", headerName: "מס. שבב", width: 250 },
    { field: "cabin", headerName: "ביתן", width: 180 },
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

export const cabinsFilterOptions = [
    "גוריה 1",
    "פנסיון",
    "גוריה 2",
    "באו באו",
    "מכלאה כפולה 1",
    "מכלאה כפולה 2",
    "ביתן 1 עליון",
    "ביתן 2 עליון",
    "ביתן 3 עליון",
    "ביתן 4 עליון",
    "ביתן 5 עליון",
    "מכלאת פטרה",
    "מסדרון 1",
    "מסדרון 2",
    "מסדרון 3",
    "חדר 4",
    "חדר 5",
    "חדר 6",
    "חדר 7",
    "חדר 8",
    "חדר 9",
    "ביתן מול החתוליה",
    "A",
    "B",
    "C",
    "ביתן 1 תחתון",
    "ביתן 2 תחתון",
    "ביתן 3 תחתון",
    "ביתן 4 תחתון",
    "ביתן 5 תחתון",
    "ביתן 6 תחתון",
    "ביתן 7 תחתון",
    "משרד גדול",
    "משוחררים",
    "מרפאה",
    "קרוואן",
    "מלונה בכניסה",
    'מלונה ליד חד"א',
    "מלונה בכניסה למסדרון",
    "מלונה ליד חדר צוות",
    "מלונה ליד המחסן",
];

export const breedFilterOptions = [
    "אירדייל טרייר",
    "אלסקן מלמוט",
    "בול טרייר",
    "ביגל",
    "בולמסטיף",
    "אמסטף",
    "דוברמן",
    "דלמטי",
    "האסקי סיבירי",
    "טרייר טיבטי",
];

export const genderFilterOptions = ["זכר", "נקבה"];

export const statusFilterOptions = ["נוכח", "עזב"];

export const statusFilterOptionsIcons = {
    "נוכח": <CheckCircleOutlineIcon color="success" sx={{marginRight: '8px'}}/>,
    "עזב": <HighlightOffIcon color="error" sx={{marginRight: '8px'}}/>
}

export const sizeFilterOptions = [
    "ננסי",
    "קטן",
    "בינוני",
    "גדול",
    "ענק",
    "ננסי קטן",
    "ננסי גדול",
    "בינוני קטן",
    "בינוני גדול"
]


export const tempData = [
    {
        breed: "דוברמן",
        name: "כלב",
        gender: "זכר",
        chipNum: 985113003649217,
        cabin: "פנסיון",
        status: "נוכח",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "בולמסטיף",
        name: "כלב",
        gender: "נקבה",
        chipNum: 985113003649218,
        cabin: "פנסיון",
        status: "נוכח",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "בולמסטיף",
        name: "כלב",
        gender: "זכר",
        chipNum: 985113003649219,
        cabin: "מרפאה",
        status: "עזב",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "ביגל",
        name: "כלב",
        gender: "נקבה",
        chipNum: 985113003649220,
        cabin: "פנסיון",
        status: "עזב",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "טרייר טיבטי",
        name: "כלב",
        gender: "נקבה",
        chipNum: 985113003649221,
        cabin: "מרפאה",
        status: "עזב",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "דלמטי",
        name: null,
        gender: "נקבה",
        chipNum: 985113003649222,
        cabin: "פנסיון",
        status: "עזב",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "אלסקן מלמוט",
        name: "כלב",
        gender: "נקבה",
        chipNum: 985113003649223,
        cabin: "מרפאה",
        status: "נוכח",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "אירדייל טרייר",
        name: "כלב",
        gender: "זכר",
        chipNum: 985113003649224,
        cabin: "פנסיון",
        status: "נוכח",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "אמסטף",
        name: "כלב",
        gender: "זכר",
        chipNum: 985113003649225,
        cabin: "מרפאה",
        status: "עזב",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "דוברמן",
        name: "כלב",
        gender: "זכר",
        chipNum: 985113003649217,
        cabin: "פנסיון",
        status: "נוכח",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "בולמסטיף",
        name: "כלב",
        gender: "נקבה",
        chipNum: 985113003649218,
        cabin: "פנסיון",
        status: "נוכח",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "בולמסטיף",
        name: "כלב",
        gender: "זכר",
        chipNum: 985113003649219,
        cabin: "מרפאה",
        status: "עזב",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "ביגל",
        name: "כלב",
        gender: "נקבה",
        chipNum: 985113003649220,
        cabin: "פנסיון",
        status: "עזב",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "טרייר טיבטי",
        name: "כלב",
        gender: "נקבה",
        chipNum: 985113003649221,
        cabin: "מרפאה",
        status: "עזב",
        size: "בינוני",
        diskit: 1335557686,
    },
    {
        breed: "דלמטי",
        name: null,
        gender: "נקבה",
        chipNum: 985113003649222,
        cabin: "פנסיון",
        status: "עזב",
        size: "בינוני",
        diskit: 1335557686,
    },
];
