import { useState } from "react";
import Boton from "./Boton";
import Styles from "./modulesCSS/ContenedorContador.module.css"

function ContainerContador(){

    let [count, setCount] = useState(0)
    let handleRestar = ()=>{
        if(count <= 0){
            setCount(0)
        }else{
            setCount(count-1)
        }
    }
    return( 
    <div className={Styles.containerBtn}>
        <Boton label={'-'}  variant="btnDP" onClick={handleRestar}/>
        <p>Cantidad {count}</p>
        <Boton label={'+'} variant="btnDP" onClick={()=>setCount(count +1)}/>
    </div>
    )
}

export default ContainerContador