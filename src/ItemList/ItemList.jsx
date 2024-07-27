import Item from "../Item/Item";

const ItemList = ({products}) => {

    return(
        products.length == 0 ? <p style={{textAlign: 'center'}}>Cargando...</p> : products.map( prod => {
            return <Item key={prod.id} item={prod}/>
        })
    )
}

export default ItemList;