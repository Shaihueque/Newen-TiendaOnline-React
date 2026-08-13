
import AppHeader from "./components/AppHeader"
import Main from "./components/Main"
import AppFooter from "./components/AppFooter"
import CartProvider from "./components/context/CartContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div>
      <CartProvider>
        <AppHeader />
        <Main />
        <AppFooter />
        <ToastContainer />
      </CartProvider>
    </div>
  )
}

export default App
