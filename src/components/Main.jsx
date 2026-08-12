import {Route, Routes} from "react-router-dom"

import ItemListContainer from "./ItemListCointainer"
import ItemDetailProduct from "./detailProduct/DetailProduct"
import ContainerCart from "./carrito/ContenedorCart"

function Main (){
    return(
        <div>
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>

                <Route path="/categoria/:categoryId" element={<ItemListContainer />} />

                <Route path="/detailProduct/:productId" element={<ItemDetailProduct/>}/>

                <Route path="/cart" element={<ContainerCart/>}/>
                  
            </Routes>
        </div>
    )
}

export default Main