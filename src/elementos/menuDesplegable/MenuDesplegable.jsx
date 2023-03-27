import React, {useState} from 'react';
import styles from './menuDesplegable.module.css'
import grid from '../../elementos/grid.module.css'
import Btn from './../btn/Btn';


const MenuDesplegable = ({menuDesplegable, setMuestra, muestra, setMenuDesplegable}) => {

    return ( 
           <div className={`${menuDesplegable ? styles.contenedor : styles.contenedorNone }`}>
           <div className={styles.mm}>
              <ul>
                <li onClick={() => setMenuDesplegable() }><a href='#senor'>About B-PROST</a></li>
                <li onClick={() => setMenuDesplegable() }><a href='#ingredientes'>Ingredientes</a></li>
                <li onClick={() => setMenuDesplegable() }><a href='#top'>Top</a></li>
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