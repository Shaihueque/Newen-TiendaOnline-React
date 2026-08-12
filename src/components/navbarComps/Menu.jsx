import { NavLink } from "react-router-dom"
import Styles from "../modulesCSS/HeaderModules/Menu.module.css"
function Menu (){

   const handlerActive = ({ isActive }) => 
        isActive ? `${Styles.opcionesMenu} ${Styles.activo}` : Styles.opcionesMenu;

    return(
        <div className={Styles.containerMenuOp}>
            <NavLink className={handlerActive} to="/">Inicio</NavLink>
            <NavLink className={handlerActive} to="/categoria/remeras">Remeras</NavLink>
            <NavLink className={handlerActive} to="/categoria/buzos">Buzos</NavLink>
            <NavLink className={handlerActive} to="/categoria/hombres">Hombres</NavLink>
            <NavLink className={handlerActive} to="/categoria/mujeres">Mujeres</NavLink>
            <NavLink className={handlerActive} to="/categoria/unisex">Unisex</NavLink>
        </div>
    )
}
export default Menu