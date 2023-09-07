// @ts-nocheck
import { GridColDef } from "@mui/x-data-grid";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const ITEM_HEIGHT = 48;
export const ITEM_PADDING_TOP = 8;

export const bitan =
    [
        'גוריה 1',
        'פנסיון',
        'גוריה 2',
        'באו באו',
        'מכלאה כפולה 1',
        'מכלאה כפולה 2',
        'ביתן 1 עליון',
        'ביתן 2 עליון',
        'ביתן 3 עליון',
        'ביתן 4 עליון',
        'ביתן 5 עליון',
        'מכלאת פטרה',
        'מסדרון 1',
        'מסדרון 2',
        'מסדרון 3',
        'חדר 4',
        'חדר 5',
        'חדר 6',
        'חדר 7',
        'חדר 8',
        'חדר 9',
        'ביתן מול החתוליה',
        'A',
        'B',
        'C',
        'ביתן 1 תחתון',
        'ביתן 2 תחתון',
        'ביתן 3 תחתון',
        'ביתן 4 תחתון',
        'ביתן 5 תחתון',
        'ביתן 6 תחתון',
        'ביתן 7 תחתון',
        'משרד גדול',
        'משוחררים',
        'מרפאה',
        'קרוואן',
        'מלונה בכניסה',
        'מלונה ליד חד"א',
        'מלונה בכניסה למסדרון',
        'מלונה ליד חדר צוות',
        'מלונה ליד המחסן'
    ]
export const columns: GridColDef[] = [
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
    {
        field: 'status', headerName: 'סטטוס', width: 150, renderCell: (params) => {
            if (params.value === 'נוכח') {
                return <CheckCircleOutlineIcon color="success"/>
            } else {
                return <HighlightOffIcon color="error"/>
            }
        }
    },
];

export const tempData = [
    { breed: 'דוברמן', name: 'כלב', gender: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'ביגל', name: 'כלב', gender: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'עזב' },
    {
        breed: 'טרייר טיבטי',
        name: 'כלב',
        gender: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'עזב'
    },
    { breed: 'דלמטי', name: null, gender: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'עזב' },
    { breed: 'אלסקן מלמוט', name: 'כלב', gender: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'נוכח' },
    { breed: 'אירדייל טרייר', name: 'כלב', gender: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'אמסטף', name: 'כלב', gender: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'דוברמן', name: 'כלב', gender: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'ביגל', name: 'כלב', gender: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'עזב' },
    {

        breed: 'טרייר טיבטי',
        name: 'כלב',
        gender: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'עזב'
    },
    { breed: 'דלמטי', name: null, gender: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'עזב' },
    { breed: 'אלסקן מלמוט', name: 'כלב', gender: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'נוכח' },
    { breed: 'אירדייל טרייר', name: 'כלב', gender: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'אמסטף', name: 'כלב', gender: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'דוברמן', name: 'כלב', gender: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'ביגל', name: 'כלב', gender: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'עזב' },
    {

        breed: 'טרייר טיבטי',
        name: 'כלב',
        gender: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'עזב'
    },
    { breed: 'דלמטי', name: null, gender: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'עזב' },
    { breed: 'אלסקן מלמוט', name: 'כלב', gender: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'נוכח' },
    { breed: 'אירדייל טרייר', name: 'כלב', gender: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'אמסטף', name: 'כלב', gender: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'דוברמן', name: 'כלב', gender: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'ביגל', name: 'כלב', gender: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'עזב' },
    {

        breed: 'טרייר טיבטי',
        name: 'כלב',
        gender: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'עזב'
    },
    { breed: 'דלמטי', name: null, gender: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'עזב' },
    { breed: 'אלסקן מלמוט', name: 'כלב', gender: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'נוכח' },
    { breed: 'אירדייל טרייר', name: 'כלב', gender: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'אמסטף', name: 'כלב', gender: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'דוברמן', name: 'כלב', gender: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'ביגל', name: 'כלב', gender: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'עזב' },
    {

        breed: 'טרייר טיבטי',
        name: 'כלב',
        gender: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'עזב'
    },
    { breed: 'דלמטי', name: null, gender: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'עזב' },
    { breed: 'אלסקן מלמוט', name: 'כלב', gender: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'נוכח' },
    { breed: 'אירדייל טרייר', name: 'כלב', gender: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'אמסטף', name: 'כלב', gender: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'דוברמן', name: 'כלב', gender: 'זכר', chip: 985113003649217, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'נקבה', chip: 985113003649218, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'בולמסטיף', name: 'כלב', gender: 'זכר', chip: 985113003649219, bitan: 'מרפאה', status: 'עזב' },
    { breed: 'ביגל', name: 'כלב', gender: 'נקבה', chip: 985113003649220, bitan: 'פנסיון', status: 'עזב' },
    {

        breed: 'טרייר טיבטי',
        name: 'כלב',
        gender: 'נקבה',
        chip: 985113003649221,
        bitan: 'מרפאה',
        status: 'עזב'
    },
    { breed: 'דלמטי', name: null, gender: 'נקבה', chip: 985113003649222, bitan: 'פנסיון', status: 'עזב' },
    { breed: 'אלסקן מלמוט', name: 'כלב', gender: 'נקבה', chip: 985113003649223, bitan: 'מרפאה', status: 'נוכח' },
    { breed: 'אירדייל טרייר', name: 'כלב', gender: 'זכר', chip: 985113003649224, bitan: 'פנסיון', status: 'נוכח' },
    { breed: 'אמסטף', name: 'כלב', gender: 'זכר', chip: 985113003649225, bitan: 'מרפאה', status: 'עזב' },
];

export const breed = [
    'אירדייל טרייר',
    'אלסקן מלמוט',
    'בול טרייר',
    'ביגל',
    'בולמסטיף',
    'אמסטף',
    'דוברמן',
    'דלמטי',
    'האסקי סיבירי',
    'טרייר טיבטי',
];

export const gender = [
    'זכר',
    'נקבה'
];

export const status = ['נוכח', 'עזב']
