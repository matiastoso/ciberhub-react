import { Box, Button, ButtonGroup, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)

    useEffect( () => {
        setContador(initial)
    }, [initial])

    function sumarItem() {
        if(contador < stock) {
            setContador(contador + 1)
        } else {
            alert('No contamos con Stock suficiente.')
        }
    }

    function restarItem() {
        if(contador > 1 ) {
            setContador(contador - 1)
        } else {
            alert('Debes elegir al menos un producto.')
        }
    }

    return(
        <Box sx={{display: 'flex', width: 250, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant="h6" textAlign={'center'}> {contador < 2 ? `${contador} unidad` : `${contador} unidades`} </Typography>
            <ButtonGroup sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button onClick={ () => sumarItem()}>+</Button>
                <Button onClick={ () => restarItem()}>-</Button>
            </ButtonGroup> <br />
            <Button sx={{mt:2, mb: 1}} size="small" variant="contained" onClick={onAdd}>Agregar al carrito</Button>
            <Typography variant="caption">{stock} unidades disponibles</Typography>
        </Box>
    )
}

export default ItemCount;