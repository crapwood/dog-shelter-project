// @ts-nocheck
"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FileCopyRoundedIcon from "@mui/icons-material/FileCopyRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import { useGlobalStore } from "@/store/global-items.store";
import { VIEW_MODE } from "@/enums/enums";
import { useRouter } from "next/navigation";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import { Badge } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import { useEffect } from "react";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;

enum NavItems {
    HOME = "בית",
    FORMS = "טפסים",
    REPORTS = 'דו"חות',
    NEW_ANIMAL = "הוסף בעלי חיים",
    VACCINE = 'טיפולים הקרובים'
}

const linkNavItems: Record<NavItems, string> = {
    [NavItems.HOME]: "/main-page",
    [NavItems.FORMS]: "/forms-download",
    [NavItems.REPORTS]: "/reports",
    [NavItems.NEW_ANIMAL]: "/new-animal",
    [NavItems.VACCINE]: "/vaccines",
};

function Navbar(props: Props) {
    const { push } = useRouter();
    const { viewMode, setViewMode } = useGlobalStore();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [numOfDogs, setNumOfDogs] = React.useState(0)

    useEffect(()=>{
        async function fetchData() {
            const req = await fetch(`/api/db-query-vaccines`);
            const response = await req.json();
            setNumOfDogs(response.length)
        }

        fetchData();
    }, [])

    const linkNavIcons: Record<NavItems, React.ReactNode> = {
        [NavItems.HOME]: <HomeRoundedIcon/>,
        [NavItems.FORMS]: <FileCopyRoundedIcon/>,
        [NavItems.REPORTS]: <AssessmentRoundedIcon/>,
        [NavItems.NEW_ANIMAL]: <PetsIcon/>,
        [NavItems.VACCINE]:
            <Badge badgeContent={numOfDogs} color="secondary">
                <VaccinesIcon/>
            </Badge>
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleButtonClick = (item) => {
        if (item === NavItems.NEW_ANIMAL) {
            setViewMode(VIEW_MODE.NEW_ANIMAL);
            push(`${linkNavItems[item as NavItems]}`)
        }
        push(`${linkNavItems[item as NavItems]}`)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                אגודת צער בעלי חיים
            </Typography>
            <Divider/>
            <List>
                {Object.keys(linkNavItems).map((item) => (
                    <ListItem key={item} disablePadding>
                        <Link href={`${linkNavItems[item as NavItems]}`}>
                            <ListItemButton
                                sx={{ textAlign: "center" }}
                            >
                                <ListItemText primary={item}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        אגודת צער בעלי חיים
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {Object.keys(linkNavItems).map((item) => (
                            <Link key={item} onClick={() => handleButtonClick(item)}>
                                <Button
                                    key={item}
                                    sx={{
                                        color: "#fff",
                                        ":hover": {
                                            bgcolor: "rgba(0,0,0,0.5)", // theme.palette.primary.main
                                            color: "inherit",
                                        },
                                    }}

                                >
                                    {linkNavIcons[item]}
                                    <Typography variant="body2" sx={{ marginLeft: "8px" }}>
                                        {item}
                                    </Typography>
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default Navbar;
