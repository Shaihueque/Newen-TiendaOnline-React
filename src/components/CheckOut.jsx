import { createOrder } from "../firebase/db"
import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"
import { serverTimestamp } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import Styles from "./modulesCSS/CheckOut.module.css"

function CheckOut() {
    let { cart, totalPrice, clearCart } = useContext(CartContext)
    let [orderId, setOrderId] = useState(null)
    const navigate = useNavigate() 

    let handleCreateOrder = (e) => {
        e.preventDefault()

        let form = e.target
        let fullname = form.fullname.value
        let email = form.email.value
        let phoneNumber = form.phoneNumber.value
        let addres = form.addres.value

        createOrder({
            user: { fullname, email, phoneNumber, addres },
            items: cart,
            total: totalPrice,
            time: serverTimestamp()
        }).then((id) => {
            setOrderId(id)

            // Disparamos SweetAlert con toda la información
            Swal.fire({
                title: "¡Compra realizada!",
                html: `
                    <p>Gracias por comprar en <strong>Tienda Newen ❤️</strong></p>
                    <p style="margin-top: 10px;">Código de seguimiento: <strong>${id}</strong></p>
                    <p>Monto abonado: <strong>$${totalPrice}</strong></p>
                `,
                icon: "success",
                confirmButtonColor: "#000",
                confirmButtonText: "Volver al Inicio"
            }).then((result) => {
                //  Al hacer clic en "Volver al Inicio", limpia el carrito y redirige a "/" osea Inicio
                if (result.isConfirmed) {
                    if (clearCart) clearCart()
                    navigate("/")
                }
            })
        })
    }

    return <div className={Styles.containerForm}>
        <h2>Antes de finalizar tu compra, necesitamos los siguientes datos:</h2>
        <form action="" onSubmit={handleCreateOrder}>
            <input id="fullname" type="text" placeholder="Nombre: ej Fernando Fernandez" className="input"/>
            <input id="email" type="text" placeholder="Email: ej ferFernandez@mail.com" className="input"/>
            <input id="phoneNumber" type="text" placeholder="num de celular ej: 2214747456" className="input"/>
            <input id="addres" type="text" placeholder="Direccion: ej CABA, Moreno 123" className="input"/>
            {/* Opcional: Podés mostrarle el total antes de confirmar */}
                <h3>Total a pagar: ${totalPrice}</h3>
            <button className={Styles.btnG}>Finalizar Compra</button>
        </form>
    </div>
}

export default CheckOut