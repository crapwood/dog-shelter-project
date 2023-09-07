// @ts-nocheck
"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
enum NavItems  {
    HOME ='בית',
    FORMS = 'טפסים',
    REPORTS = 'דו"חות'
}
// const navItems = ['Home', 'About', 'Forms', 'Reports'];

const linkNavItems: Record<NavItems, string> = {
    [NavItems.HOME]: '/main-page',
    [NavItems.FORMS]: '/forms',
    [NavItems.REPORTS]: '/reports'
}

function Navbar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                District of Haifa Animal Shelter
            </Typography>
            <Divider/>
            <List>
                {Object.keys(linkNavItems).map((item) => (
                    <ListItem key={item} disablePadding>
                        <Link href={`${linkNavItems[item as NavItems]}`} >
                            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => console.log(item)} >
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        אגודת צער בעלי חיים מחוז חיפה
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {Object.keys(linkNavItems).map((item) => (
                            <Link href={`${linkNavItems[item as NavItems]}`} key={item}>
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item === 'בית' ? <HomeRoundedIcon /> : item}
                                </Button>
                            </Link>
                        ))}
                        <Link href={'/new-animal'}>
                            <Button sx={{ color: '#fff' }}>
                                <AddCircleIcon />
                                <Typography
                                    variant="body2"
                                >
                                    הוסף חיה חדשה
                                </Typography>
                            </Button>

                        </Link>
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
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>
    );
}

export default Navbar;
