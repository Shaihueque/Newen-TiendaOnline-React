import { useParams } from "react-router-dom"
import { products } from "../data/products"
import ItemDP from "./ItemDP"


function ItemDetailProduct(){

    let { productId } = useParams()
    let product = products.find(prod => prod.id === Number(productId))

    if (!product) {
        return <h2>Producto no encontrado</h2>
    }
    return <div>
        <ItemDP prod={product}/>
    </div>
}

export default ItemDetailProduct