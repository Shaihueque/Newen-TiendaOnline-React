import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../firebase/db" 
import ItemDP from "./ItemDP"

function ItemDetailProduct() {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { productId, id } = useParams()
    const docId = productId || id 

    useEffect(() => {
        setLoading(true)

        if (docId) {
            getProductById(docId)
                .then((data) => {
                    setProduct(data)
                })
                .catch((err) => {
                    console.error("Error al traer el producto de Firebase:", err)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [docId])

    if (loading) {
        return <h2>Cargando detalle del producto...</h2>
    }

    if (!product) {
        return <h2>Producto no encontrado</h2>
    }

    return (
        <div>
            <ItemDP prod={product} />
        </div>
    )
}

export default ItemDetailProduct