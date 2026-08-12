
import { useContext } from "react"
import { ContadorContext } from "../context/ContadorContext"
import { CountBtnMenos } from "../CountBtnMenos"
import { CountBtnMas } from "../CountBtnMas"
import Contador from "../Contador"
import Styles from "../modulesCSS/Carrito/ItemsCart.module.css"

function ItemsCart(){
    let {contador} = useContext(ContadorContext)
    return(
        <div className={Styles.container}>
            <h2 className={Styles.titulo}>Mi Carrito</h2>
                <div className={Styles.containerItem}>
                    <div className={Styles.containerImg}><img className={Styles.image} src="https://i.postimg.cc/kGThSMsw/Remera-Over-Size-Blanco.png" alt="" /></div>
                    <div className={Styles.containerDescription}>
                        <p>Nombre</p>
                        <p>Categoria</p>
                        <p>Precio</p>
                        <div className={Styles.containerBtnCant}>
                            <CountBtnMenos />
                            <p>Cantidad: {contador}</p>
                            <CountBtnMas/>
                        </div>
                        <button className={`${Styles.btnD} ${Styles.btnG}`}>
                            Eliminar
                        </button>
                    </div>
                </div>
                <div className={Styles.containerResumen}>
                    <h4 className={Styles.resumen}>Resumen</h4>
                    <p>Cantidad de productos totales: </p>
                    <p>Sub Total: </p>
                    <p>Total a pagar: </p>
                    <button 
                        className={Styles.btnAddCart} >
                        COMPRAR
                    </button>
                </div>
                
        </div>
    )
}

export default ItemsCart