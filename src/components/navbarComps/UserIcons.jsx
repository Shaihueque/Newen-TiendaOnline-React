import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import Styles from "../modulesCSS/HeaderModules/UserIcons.module.css"

function UserIcons (){
    const { totalItems } = useContext(CartContext)
    return(
        <div className={Styles.containerIcons}>
            <img className={Styles.icons} src="https://i.postimg.cc/HWM9bQ4D/icono-usuario-blanco.png" alt="Usuario" />
            
            <Link to="/cart" className={Styles.cartLink}>
                <img 
                    className={Styles.icons} 
                    src="https://i.postimg.cc/QN7JcpkZ/icono-carrito-de-compras.png" 
                    alt="Carrito de Compras" 
                />

                {/* Mostramos la burbuja solo si hay al menos 1 producto */}
                {totalItems > 0 && (
                    <span className={Styles.badge}>
                        {totalItems}
                    </span>
                )}
            </Link>
        </div>
    )
}

export default UserIcons