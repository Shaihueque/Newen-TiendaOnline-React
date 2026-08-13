import { useState, useContext } from "react"
import Styles from "../modulesCSS/DetailProduct/ItemDP.module.css"
import { CartContext } from "../context/CartContext"

function ItemDP({ prod }) {
    const [count, setCount] = useState(1)
    const { addToCart } = useContext(CartContext)

    // Protección temprana
    if (!prod) {
        return <p>Cargando producto...</p>
    }

    const handleAdd = () => {
        addToCart(prod, count)
    }

    const handleSumar = () => setCount(count + 1)
    const handleRestar = () => {
        if (count > 1) setCount(count - 1)
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.containerImg}>
                <img className={Styles.Img} src={prod.image} alt={prod.name} />
            </div>
            <div className={Styles.containerDescription}>
                <h3>{prod.name}</h3>
                <p>${prod.price}</p>
                <p className={Styles.descriptionText}>
                    {prod.description}
                </p>
                
                <div className={Styles.containerCant}>
                    <button className={`${Styles.btnG} ${Styles.btnCant}`} onClick={handleRestar}>-</button>
                    <p>Cantidad: {count}</p>
                    <button className={`${Styles.btnG} ${Styles.btnCant}`} onClick={handleSumar}>+</button>
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