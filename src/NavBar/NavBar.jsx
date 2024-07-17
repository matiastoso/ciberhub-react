import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <header>
            <h1>Electro Hub</h1>
            <button>Computadoras</button>
            <button>Notebooks</button>
            <button>Celulares</button>
            <CartWidget />
        </header>
    )
}

export default NavBar;