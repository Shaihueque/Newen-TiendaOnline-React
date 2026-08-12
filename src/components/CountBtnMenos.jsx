import { useContext } from "react"
import { ContadorContext } from "./context/ContadorContext"
import Styles from "./modulesCSS/BtnCant/BtnMenosMas.module.css"

export let CountBtnMenos = ()=>{

    let {decrementar} = useContext(ContadorContext)
    return(
        <>
        <button className={Styles.btnG} onClick={decrementar}>-</button>
        </>
    )
}