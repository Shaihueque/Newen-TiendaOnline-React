import Button from "./Button"
import { useState } from "react";

function Counter (){
    
    let [count, setCount] = useState(0)
    let handleRestar = ()=>{
        if(count <= 0){
            alert('no se puede ir por debajo del numero 0')
        }else{
            setCount(count-1)
        }
    }
    return <div>
        <p>Cantidad {count}</p>
        <Button label={'Sumar'}  variant="btnL" onClick={()=>setCount(count +1)}/>
        <Button label={'Restar'} variant="btnD" onClick={handleRestar}/>
        <Button label={'Reiniciar'} variant="btnR" onClick={()=>setCount(0)}/>
    </div>
}

export default Counter