import { createContext, useState } from "react";

export let ContadorContext = createContext(null)

let ContadorProvider = ({children}) =>{
    let [contador, setContador] = useState(0)

    let incrementar = ()=>{
        setContador(contador + 1)
    }

    let decrementar = ()=>{
        if(contador <= 0){
            setContador(contador)
        }else{
        setContador(contador - 1)
        }
    }

return <ContadorContext.Provider value={{contador, incrementar, decrementar}}>
    {children}
</ContadorContext.Provider>
}

export default ContadorProvider