
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { products } from "./data/products"
import Styles from "./modulesCSS/ItemListContainer.module.css"

function ItemListContainer(){
    let [items, setItems] = useState([])
    let { categoryId } = useParams()

    useEffect(()=>{
        if(categoryId){
            let paramMinuscula = categoryId.toLocaleLowerCase()

            let filtrados = products.filter((prod)=>
            prod.category.some((cat)=>{
                let catMinuscula = cat.toLocaleLowerCase()

                return catMinuscula.includes(paramMinuscula) 
            }))
            setItems(filtrados)
        }else {
            setItems(products)
        }
    },[categoryId])

    return <ItemList products={items}/>
    
}

export default ItemListContainer