import Logo from "./Logo"
import SearchBar from "./Buscador"
import UserIcons from "./UserIcons"
import Menu from "./Menu"

import Styles from "../modulesCSS/HeaderModules/ContainerCompHeader.module.css"

function ContainerCompHeader(){
    return(
        <div className={Styles.conteinerCompHeader}>
            <Logo />
            <SearchBar />
            <UserIcons />
            <Menu />
        </div>
    )
}

export default ContainerCompHeader