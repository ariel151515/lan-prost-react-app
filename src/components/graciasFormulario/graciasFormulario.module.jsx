import React, {useState} from 'react';
import styles from './graciasFormulario.module.css'
import profe from './img/profe.png'
import fle from './img/pro.png'
import Btn from './../../elementos/btn/Btn'
import CountdownTimer from '../../elementos/countdownTimer/CountdownTimer';

const GraciasFormulario = () => {
    return ( 
        <div className={styles.box }>

          <div className={styles.mensaje}>
          <div className={styles.men}>¡Mensaje enviado!</div>

          <img src={profe} alt="" className={styles.profe}/>

          <p className={styles.dd}>
             Nos pondremos en contacto con usted lo antes posible, pero si desea obtener ayuda más rápido solo contáctenos por WhatsApp.
          </p>

          <div className={styles.rojo}>
            <span>🔥 ¡Atención! 🔥</span>
            <p className={styles.dd}>
              Contáctenos antes que el contador llegue a 0 y recibirá un cupón de descuento de 30% 🎁
            </p>
          </div>

          <div className={styles.contador}>
              <CountdownTimer targetDate="2030-04-29" />
          </div>

          <div className={styles.contenedorBoton}>
             <Btn texto="ENVIAR MENSAJE"/>
          </div>

        </div>
        </div>
     );
}
 
export default GraciasFormulario;