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

    return ( 
             <div className={styles.contenedorboton}>
               <button className={styles.boton} onClick={() => cierraMenuDesplegable()}>
                  <img src={phone} alt="" className={styles.sdsd}/> 
                  <p className={styles.klkl}>{texto}</p>
                </button>
             </div>
     );
}
 
export default Btn;
