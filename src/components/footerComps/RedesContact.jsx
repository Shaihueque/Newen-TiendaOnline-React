import Styles from "../modulesCSS/FooterModules/RedesContact.module.css"
function RedesContact(){
    return(
        <div className={Styles.containerRedes}>
            <img className={Styles.imgRedes} src="https://i.postimg.cc/CL8R570M/facebook.png" alt="FaceBook" />
            <img className={Styles.imgRedes} src="https://i.postimg.cc/ZKNWnHmb/instagram-(1).png" alt="Instagram" />
            <img className={Styles.imgRedes} src="https://i.postimg.cc/MKBnH5wx/twiter.png" alt="twiter" />
        </div>
    )
}

export default RedesContact