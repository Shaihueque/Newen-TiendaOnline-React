
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../firebase/db" 
import ItemList from "./ItemList"
import Styles from "./modulesCSS/ItemListContainer.module.css"

function ItemListContainer(){
    let [products, setProducts] = useState([])

    let [loading, setLoading] = useState(true)

    let { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        getProducts(categoryId)
            .then((data) => {
                setProducts(data)
            })
            .catch((err) => {
                console.error("Error al cargar productos:", err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return <h2>Cargando productos...</h2>
    }

    return (
        <div>
            {/* Pasa los productos que vinieron de Firebase */}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer