import Styles from "../modulesCSS/FooterModules/containerCompsFooter.module.css"
import RedesContact from "./RedesContact"
import DerechosReservados from "./DerechosReservados"
function ContainerCompsFooter(){
    return(
        <div className={Styles.conteinerFooter}>
            <RedesContact />
            <DerechosReservados />
        </div>
    )
}

export default ContainerCompsFooter