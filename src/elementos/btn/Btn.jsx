import React from 'react'
import styles from './btn.module.css'
import phone from './img/phone.png'

const Btn = ({texto,setMuestra,setMenuDesplegable,menuDesplegable}) => {

    function cierraMenuDesplegable() {
       if(menuDesplegable) {
        setMenuDesplegable(false)
        setMuestra(true)
       }else{
        setMuestra(true)
       }
    }


    let WhatsApp = () => {
      window.location.assign("https://walink.co/c45d09");
      // Enlace de Whastapp creado en creado en https://walink.co/
    }

    return ( 
             <div className={styles.contenedorboton}>
                  <button className={styles.boton} onClick={() => WhatsApp()}> 
                     {/* onClick={() => cierraMenuDesplegable() */}
                     <img src={phone} alt="" className={styles.sdsd}/> 
                     <p className={styles.klkl}>{texto}</p>
                  </button>
             </div>
     );
}
 
export default Btn;
