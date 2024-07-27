import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return(
        <article>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
                <Box sx={{display: 'flex', justifyContent:'center'}}>
                    <img style={{height: 340}} src={item.pictureUrl} alt={item.description}/>
                </Box>
                    <Divider />
                <CardContent>
                    <Typography textAlign={'center'} gutterBottom variant="h4" component="div">
                        ${item.price}
                    </Typography>
                    <Typography textAlign={'center'} sx={{ marginBottom: -1 }} gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent:'center', paddingBottom: 2}}>
                    <Button sx={{textDecoration: 'none'}} as={Link} to={`/item/${item.id}`} variant="contained" size="small">Ver producto</Button>
                </CardActions>
            </Card>
        </article>
    )
}

export default Item;