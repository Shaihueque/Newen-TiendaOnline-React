
import Styles from "./modulesCSS/Boton.module.css"

function Boton ({label, variant, onClick}){
    return <button className={`${Styles.btnG} ${Styles[variant]}`} onClick={onClick}>{label} </button>
}

export default Boton