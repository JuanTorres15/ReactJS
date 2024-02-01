import CartWidget from "./CartWidget";

function NavBar () {
    return (
        <nav>
            <h1>Distribuidora Mil Colores C.A</h1>
            <div>
                <button>Foami Liso</button>
                <button>Foami Escarchado</button>
                <button>Foami Oficio</button>
            </div>
            <CartWidget/>
        </nav>
    )    
}

export default NavBar;