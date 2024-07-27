import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import { useState } from "react";
import { MenuSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return(
        <header>
            <AppBar position="static">
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Box color="inherit">
                        <MenuSharp onClick={ () => setOpen(true)} sx={{display: {sx: 'block', md: 'none'}}}/>
                        <Typography as={Link} to={'/'} sx={{ml: 2, color: 'white', textDecoration: 'none'}} variant="h5">Ciber Hub</Typography>
                    </Box>

                    <Box ml={-10} sx={{display: {sm: 'none', xs: 'none', md: 'flex'}, justifyContent: 'center'}}>
                        <Button>
                            <Link style={{color: 'white', textDecoration: 'none'}} to={`/`}>Home</Link>
                        </Button>
                        <Button>
                            <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/celulares`}>Celulares</Link>
                        </Button>
                        <Button>
                            <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/notebooks`}>Notebooks</Link>
                        </Button>
                        <Button>
                            <Link style={{color: 'white', textDecoration: 'none'}} to={`/category/tablets`}>Tablets</Link>
                        </Button>
                    </Box>
                    
                    <Button color="inherit">
                        <CartWidget />
                    </Button>
                </Toolbar>
            </AppBar>

            <Drawer open={open} anchor='left' onClose={() => setOpen(false)}>
                <Box sx={{width: '100%', maxWidth: 360}}>
                    <List>
                        <ListItem>
                            <ListItemButton sx={{color: 'black'}} as={Link} to={'/'} LinkComponent={'a'}>Home</ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton sx={{color: 'black'}} as={Link} to={'/category/celulares'}  LinkComponent={'a'}>Celulares</ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton sx={{color: 'black'}} as={Link} to={'/category/notebooks'}  LinkComponent={'a'}>Notebooks</ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton sx={{color: 'black'}} as={Link} to={'/category/tablets'}  LinkComponent={'a'}>Tablets</ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </header>
    )
}

export default NavBar;