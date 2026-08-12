import Styles from './modulesCSS/button.module.css'

function Button ({label, variant, onClick}){
    return <button className={`${Styles.btnG} ${Styles[variant]}`} onClick={onClick}>{label} </button>
}

export default Button