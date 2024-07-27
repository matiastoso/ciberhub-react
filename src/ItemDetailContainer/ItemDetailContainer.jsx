import { useEffect, useState } from "react"
import { Box, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import data from '../data/data.json'
import ItemCount from "../ItemCount/ItemCount";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect( () => {
        const myPromise = new Promise ( res => {
            setTimeout( () => res(data), 2000)
        })

        myPromise.then( res => {
            const [itemFiltrado] = res.filter( item => {
                return item.id == id
            })
            setItem(itemFiltrado)
            console.log(itemFiltrado)
        })
    }, [id])
    
    return(
        item.length == 0
        ?
            <p style={{textAlign: 'center', marginTop: 100}}>Cargando...</p>
        :
            <Box  sx={{display: 'flex', mt: 6, flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant="h4">Detalle del producto</Typography>
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
                        <ItemCount stock={item.stock} initial={1} onAdd={() => alert('Producto comprado!')}/>
                    </CardActions>
                </Card>
            </Box>
        
    )
}

export default ItemDetailContainer;