
import Button from "./components/Button"
import Counter from "./components/Counter"
import AppHeader from "./components/AppHeader"
import Main from "./components/Main"
import AppFooter from "./components/AppFooter"
import ContadorProvider from "./components/context/ContadorContext"


//import Styles from './components/modulesCSS/button.module.css'

function App() {

  return (
    <div>
      <ContadorProvider>
        <AppHeader />
        <Main />
        <AppFooter />
      </ContadorProvider>
    </div>
  )
}

export default App
