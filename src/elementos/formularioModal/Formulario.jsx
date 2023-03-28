import React, {useState} from 'react'
import styles from './formulario.module.css'
import Btn from './../btn/Btn'
import usa from './img/usa.png'
import mexico from './img/mexico.png'
import chile from './img/chile.png'
import flecha from './img/flecha.png'
import pik from './img/pik.png'

const Formulario = () => {
    
    const [leads, setLeads] = useState({
      nombre:'',
      email:'',
      telefono:''
    })

    const [leventaform, setLeventaform] = useState()
    const [banderas, setBanderas] = useState(false)
    const [prefijo, setPrefijo] = useState('+1')


  
    const handleSubmit = (e) => {
       e.preventDefault()
    }

    const handleChange = () => {

    } 

    
    const SetMexico = () => {
      setPrefijo('+56')
      setBanderas(!banderas)
    }

    const SetChile = () => {
      setPrefijo('+34')
      setBanderas(!banderas)
    }

    const SetUsa = () => {
      setPrefijo('+1')
      setBanderas(!banderas)
    }

    const Leventaform = () => {
        setLeventaform(true)
    }


    return ( 
        <div className={styles.main}>
           <form onSubmit={(e) => handleSubmit(e)}>
              {/* Contenedor del input*/}
               <div className={styles.in}>
                  <input type="text" placeholder="* Escribe tu nombre" required="required" handleChange={null}/>
               </div>

               {/* Contenedor del input*/}
               <div className={styles.in}>
                  <input type="text" placeholder="* Escribe tu email" required="required"/>
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

                        <div className={styles.inw}>
                             <input type="text" placeholder="* Escribe tu Whatsapp" required="required" onClick={() => Leventaform(true)}/></div>
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
                              <p className={styles.plusB}>+56</p>  
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
   
                 <button className={styles.btn}>
                    <p>¡Quiero Que Me Contacten!</p>
                 </button>
              
           </form>
        </div>
     );
}
 
export default Formulario;