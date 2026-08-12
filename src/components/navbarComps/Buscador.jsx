import Styles from "../modulesCSS/HeaderModules/Buscador.module.css"
function SearchBar() {
    return (
        <div className={Styles.containerBuscadorEscritorio}>
            <input className={Styles.inputBuscador}
                type="text"
                placeholder="Busque su producto"
            />
        </div>
    );
}

export default SearchBar