import styles from './menuDesplegable.module.css'
import grid from '../../elementos/grid.module.css'
import Btn from './../btn/Btn';


const MenuDesplegable = ({menuDesplegable, setMuestra, muestra, setMenuDesplegable}) => {
    return ( 
        <div className={`${menuDesplegable ? styles.contenedor : styles.contenedorNone }`}>
           <div className={styles.mm}>
              <ul>
                <li>About Prostadine</li>
                <li>Ingredientes</li>
                <li>FAQ</li>
                <li><Btn
                        texto="Asesoramiento Gratis"
                        setMuestra={setMuestra}
                        muestra={muestra}
                        setMenuDesplegable={setMenuDesplegable}
                        menuDesplegable={menuDesplegable}
                      /></li>
              </ul>
           </div>
        </div>
     );
}
 
export default MenuDesplegable;