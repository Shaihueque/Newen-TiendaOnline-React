import { useState } from "react"
import { useContext } from "react"
import { CountBtnMenos } from "../CountBtnMenos"
import { CountBtnMas } from "../CountBtnMas"
import Contador from "../Contador"
import Styles from "../modulesCSS/DetailProduct/ItemDP.module.css"
import { ContadorContext } from "../context/ContadorContext"


function ItemDP({prod}){

    let {contador} = useContext(ContadorContext)
    // Estado opcional por si querés capturar la cantidad seleccionada en el Counter
    const [quantity, setQuantity] = useState(1)

    if (!prod) {
        return <p>Cargando producto...</p>
    }

    const handleAdd = () => {
        console.log(`Producto agregado: ${prod.name}, Cantidad: ${quantity}`)
        /* 
        if (onAddToCart) {
            onAddToCart(prod, quantity)
        } 
        */
    }
    return(
        <div className={Styles.container}>
            <div className={Styles.containerImg}><img className={Styles.Img} src={prod.img} alt="{prod.name}" /></div>
            <div className={Styles.containerDescription}>
                <h3>{prod.name}</h3>
                <p>${prod.price}</p>
                <p>Descripcion</p>
                <div className={Styles.containerCant}>
                <CountBtnMenos className={Styles.btnG}/>
                <p>Cantidad: {contador}</p>
                <CountBtnMas/>
                </div>
                
                <button 
                    className={`${Styles.btnAddToCart} ${Styles.btnAddCart}`} 
                    onClick={handleAdd}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemDP