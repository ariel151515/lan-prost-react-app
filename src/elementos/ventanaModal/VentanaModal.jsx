import React from 'react'
import styles from './../ventanaModal/ventanamodal.module.css'
import close from './img/close.png'

const VentanaModal = ({props,setMuestra,muestra}) => {

    return ( 
        <div>
           <div className={`${muestra ? styles.overlay : styles.overlayNone }`}>
                <div className={styles.contendormodal}>
                     <button 
                         className={styles.cerrar}
                         onClick={() => setMuestra(false)}
                         >
               <img src={close} alt="close"/>
                         
                         </button>

                        {props}
                        {muestra}
                </div>
           </div>
        </div>
     );
}
 
export default VentanaModal;