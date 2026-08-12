import { useContext } from "react"
import { ContadorContext } from "./context/ContadorContext"
import Styles from "./modulesCSS/BtnCant/BtnMenosMas.module.css"

export let CountBtnMas = ()=>{

    let {incrementar} = useContext(ContadorContext)
    return(
        <>
        <button className={Styles.btnG} onClick={incrementar}>+</button>
        </>
    )
}