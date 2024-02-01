import CartWidget from "./components/CartWidget";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App () {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer mensaje="Bienvenido a mi Ecommerce"/>
        </div>
    )
}

export default App;