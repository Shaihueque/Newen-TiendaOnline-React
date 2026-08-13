import { useContext } from "react"
import { CartContext } from "./context/CartContext" 
import { Link } from "react-router-dom"
import Styles from "./modulesCSS/Items.module.css"
function Items({ prod }){
    // 1. Obtenemos la función addToCart desde el contexto
    const { addToCart } = useContext(CartContext)

    const handleAdd = (e) => {
        e.stopPropagation() // Detiene la propagación de eventos
        e.preventDefault()  // Evita cualquier comportamiento por defecto si está dentro de un Link

        // 2. Ejecutamos la función agregando el producto (por defecto suma 1)
        addToCart(prod, 1)
        
        console.log("Producto agregado al carrito:", prod.name)
    }

    return(
        <div className={Styles.cards}>
            <Link className={Styles.decoration} to={`/detailProduct/${prod.id}`}>
                <img className={Styles.imgCard} src={prod.image} alt={prod.name} />
                <div className={Styles.conteinerArticleCard}>
                    <p className={Styles.textName}>{prod.name}</p>
                    <p className={Styles.textPrice}>{prod.price}</p>
                    <p className={Styles.textCategory}>{prod.category.join(" , ")}</p>
                </div>
            </Link>
            
            <div className={Styles.containerBtn}>
                <button 
                    className={`${Styles.btnAddToCart} ${Styles.btnAddCart}`} 
                    onClick={handleAdd}
                >
                    Agregar al carrito
                </button>   
            </div>    
        </div>
    )
}

export default Items