import {Route, Routes} from "react-router-dom"
import ItemListContainer from "./ItemListCointainer"
import ItemDetailProduct from "./detailProduct/DetailProduct"
import ContainerCart from "./carrito/ContenedorCart"
import CheckOut from "./CheckOut"

function Main (){
    return(
        <div>
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>

                <Route path="/category/:categoryId" element={<ItemListContainer />} />

                <Route path="/detailProduct/:productId" element={<ItemDetailProduct/>}/>

                <Route path="/cart" element={<ContainerCart/>}/>

                <Route path="/checkOut" element={<CheckOut/>}/>
                  
            </Routes>
        </div>
    )
}

export default Main