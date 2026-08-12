import { Link } from "react-router-dom"
import Styles from "../modulesCSS/HeaderModules/UserIcons.module.css"
function UserIcons (){
    return(
        <div className={Styles.containerIcons}>
            <img className={Styles.icons} src="https://i.postimg.cc/HWM9bQ4D/icono-usuario-blanco.png" alt="Usuario" />
            
            <Link to={"/cart"}>
                <img className={Styles.icons} src="https://i.postimg.cc/QN7JcpkZ/icono-carrito-de-compras.png" alt="Carrito de Compras" />
            </Link>
        </div>
    )
}

export default UserIcons