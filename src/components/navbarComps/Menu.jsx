import { NavLink } from "react-router-dom"
import Styles from "../modulesCSS/HeaderModules/Menu.module.css"
function Menu (){

   const handlerActive = ({ isActive }) => 
        isActive ? `${Styles.opcionesMenu} ${Styles.activo}` : Styles.opcionesMenu;

    return(
        <div className={Styles.containerMenuOp}>
            <NavLink className={handlerActive} to="/">Inicio</NavLink>
            <NavLink className={handlerActive} to="/category/remeras">Remeras</NavLink>
            <NavLink className={handlerActive} to="/category/buzos">Buzos</NavLink>
            <NavLink className={handlerActive} to="/category/hombres">Hombres</NavLink>
            <NavLink className={handlerActive} to="/category/mujeres">Mujeres</NavLink>
            <NavLink className={handlerActive} to="/category/unisex">Unisex</NavLink>
        </div>
    )
}
export default Menu