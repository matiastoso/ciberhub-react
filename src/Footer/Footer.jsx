import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        setTimeout( () => {
            setLoading(false)
        }, 2000)
    }, [loading])

    return (
        loading ? '' : <AppBar position="static">
            <Container sx={{display:'flex', justifyContent: 'center'}}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Desarrollado por Matias Toso
                </Typography>
            </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;