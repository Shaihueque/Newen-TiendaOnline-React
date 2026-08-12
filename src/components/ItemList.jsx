
import Items from "./Items"
import Styles from "./modulesCSS/ItemList.module.css"
function ItemList({products}){
    return(
        <div className={Styles.containerItemList}>
            {products.map(prod=><Items prod={prod} key={prod.id}/>) }
        </div>
    )
}

export default ItemList