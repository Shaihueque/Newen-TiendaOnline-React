import { Link } from "react-router-dom"
import Button from "./Button"
import Styles from "./modulesCSS/Items.module.css"
function Items({prod}){

   /* const handleAdd = () => {
        console.log("Producto agregado:", prod)
        // Si más adelante le pasás una función para guardar en el carrito, se ejecuta acá:
        if (onAddToCart) {
            onAddToCart(prod)
        }
    }*/

    const handleAdd = (e) => {
        e.stopPropagation()
        console.log("Producto agregado:", prod)
    }

    return(
        <div className={Styles.cards}>
            <Link className={Styles.decoration} to={`/detailProduct/${prod.id}`}>
                <img className={Styles.imgCard} src={prod.img} alt={prod.name} />
                <div className={Styles.conteinerArticleCard}>
                    <p className={Styles.textName}>{prod.name}</p>
                    <p className={Styles.textPrice}>{prod.price}</p>
                    <p className={Styles.textCategory}>{prod.category.join(" , ")}</p>
                </div>
            </Link>
                <div className={Styles.containerBtn}>
                    <button 
                                className={`${Styles.btnAddToCart} ${Styles.btnAddCart}`} 
                                onClick={handleAdd}>
                                Agregar al carrito
                    </button>   
                </div>    
        </div>
    )
}

export default Items