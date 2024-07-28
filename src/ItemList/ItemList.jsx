import { CircularProgress } from "@mui/material";
import Item from "../Item/Item";

const ItemList = ({products}) => {

    return(
        products.length == 0 ? <CircularProgress /> : products.map( prod => {
            return <Item key={prod.id} item={prod}/>
        })
    )
}

export default ItemList;