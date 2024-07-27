import { Box, Container } from "@mui/material";
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react";
import data from '../data/data.json'
import { useParams } from "react-router-dom";

const ItemListContainer = ( {greeting} ) => {
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
    
    useEffect( () => {
        setProducts([])
        new Promise ( res => {setTimeout( () => {res(data)}, 2000)})
        .then(res => {
            if (categoryId == undefined) {
                setProducts(res)
            } else {
                const prodsFiltrados = res.filter( prods => {
                    return prods.categoryId == categoryId;
                })
                setProducts(prodsFiltrados)
            }
        });
    }, [categoryId])


    return (
        <Container>
            <h1 style={{textAlign: 'center'}}> {greeting || categoryId.toLocaleUpperCase()} </h1>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                <ItemList products={products}/>
            </Box>
        </Container>
    )
}

export default ItemListContainer;