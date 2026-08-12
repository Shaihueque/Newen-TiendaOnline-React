import { Link } from "react-router-dom"
import Styles from "../modulesCSS/HeaderModules/Logo.module.css"
function Logo() {
    return (
        <div className={Styles.containerLogo}>
           <Link to="/">
                <img className={Styles.logo} src="https://i.postimg.cc/3wqyWckk/logonegro.png" alt="Newen" />
            </Link>
        </div>
    );
}

export default Logo