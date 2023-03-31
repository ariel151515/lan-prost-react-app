import React, {useEffect, useState} from 'react'
import styles from './boxFlotante.module.css'
import Btn from '../btn/Btn'
import secure from '../boxFlotante/img/secure.png'

const BoxFlotante = ({setMuestra, muestra}) => {
    
    return ( 
       <div className={`${muestra ? styles.containerNone : styles.container }`}>
              <div className={styles.contenedor}>  
                 <div className={styles.contenedorbtnDos}>
                            <Btn 
                                 texto="Asesoramiento Gratis"
                                 setMuestra={setMuestra}
                                />
                        </div>
              </div>
       </div>
     );
}


export default BoxFlotante;