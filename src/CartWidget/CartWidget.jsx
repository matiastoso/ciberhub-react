import { ShoppingCart } from "@mui/icons-material";

const CartWidget = () => {
    return (
        <div>
            <ShoppingCart sx={{fontSize: '2rem'}} />
            <span>1</span>
        </div>
    )
}
export default CartWidget;