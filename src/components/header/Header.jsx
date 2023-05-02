import React,{useState} from 'react'
import styles from './header.module.css'
import menu from './img/menuNegro.png'
import menuClose from './img/menuClose.png'
//import flecha from './../header/flecha.png'
import grid from '../../elementos/grid.module.css';
import Btn from './../../elementos/btn/Btn'
import MenuDesplegable from './../../elementos/menuDesplegable/MenuDesplegable'



const Header = ({setMuestra, muestra}) => {

    const [menuDesplegable, setMenuDesplegable] = useState(false)

    return ( 
        <div className={styles.header}>

            <MenuDesplegable 
                menuDesplegable={menuDesplegable} 
                setMenuDesplegable={setMenuDesplegable} 
                setMuestra={setMuestra} 
                muestra={muestra}
                />

            <div className={grid.grid}>
                <div className={styles.logo}>B-PROST NATURAL</div>
                    <div className={styles.menu}>
                        <span>SOBRE NOSOTROS</span>
                        <span>INGREDIENTES</span>
                    </div>
                    <div className={styles.contenedorBotonCompra}>
                        <Btn 
                           texto="ASESORAMEINTO GRATIS" 
                           setMuestra={setMuestra}
                           muestra={muestra}
                           /></div>

                    <button className={`${!muestra ? styles.btnburguer : styles.btnburguerNone }`}
                            onClick={() => setMenuDesplegable(!menuDesplegable)}
                    ><img src={`${menuDesplegable ? menuClose : menu }`} alt="" /></button>
            </div>
        </div>
     );
}
 
export default Header;