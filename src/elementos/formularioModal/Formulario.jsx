import React, {useState} from 'react'
import styles from './formulario.module.css'
import Btn from './../btn/Btn'
import usa from './img/usa.png'
import mexico from './img/mexico.png'
import chile from './img/chile.png'
import flecha from './img/flecha.png'
import pik from './img/pik.png'

const Formulario = () => {

    const [formulario, setFormulario] = useState()
    const [banderas, setBanderas] = useState(false)
    const [prefijo, setPrefijo] = useState('+1')


    function SetMexico() {
      setPrefijo('+56')
      setBanderas(!banderas)
    }

    function SetChile() {
      setPrefijo('+34')
      setBanderas(!banderas)
    }

    function SetUsa() {
      setPrefijo('+1')
      setBanderas(!banderas)
    }

    return ( 
        <>
           <form>
             
             <div className={styles.formu}>
               <div className={styles.in}>
                  <input type="text" className={styles.input} placeholder="Escribe tu Nombre"/>
               </div>

               <div className={styles.in}>
                  <input type="email" className={styles.input} placeholder="Escribe tu Email"/>
               </div>

               <div className={styles.in}>
                  <div className={styles.banderas}>


                      <div className={styles.paises} onClick={() => setBanderas(!banderas)}>
                          <img src={
                           `${ prefijo === '+1'  ? usa :
                               prefijo === '+56' ? chile : 
                               prefijo === '+34' ? mexico :
                               ''
                              }`

                          } alt="" className={styles.nn} />
                          <img src={pik}  className={styles.pik} alt=""/>
                          <p className={styles.plus}>{prefijo}</p>
                      </div>

                      <input type="number" className={styles.inputBanderas} placeholder="Escribe tu WhatsApp"/>
                  </div>


                  
                  <div className={`${banderas ? styles.opcionesPaises : styles.opcionesPaisesNone }`} >
                      
                      <div className={styles.option} onClick={() => SetUsa('+1')}>
                          <div className={styles.aa}>

                              <img src={usa} alt="" className={styles.Ban}/>

                              <p className={styles.plusB}>+1</p>  
                          </div>
                        <p className={styles.nombreBandra}>USA</p>
                      </div>


                      <div className={styles.option} onClick={() =>  SetChile('+56')}>
                          <div className={styles.aa}>
                              <img src={chile} alt="" className={styles.Ban}/>
                              <p className={styles.plusB}>56</p>  
                          </div>
                        <p className={styles.nombreBandra}>Chile</p>
                      </div>


                      <div className={styles.option} onClick={() => SetMexico('+34')}>
                          <div className={styles.aa}>
                              <img src={mexico} alt="" className={styles.Ban}/>
                              <p className={styles.plusB}>+34</p>  
                          </div>
                        <p className={styles.nombreBandra}>Mexico</p>
                      </div>

                  
                  </div>
                  
               </div>

             </div>

              <div className={styles.contenedorBoton}>
                 <button className={styles.btn}>
                    <p>Quiero que me contacten</p>
                    <img src={flecha} alt="" className={styles.kk}/>
                 </button>
              </div>
              

           </form>
        </>
     );
}
 
export default Formulario;