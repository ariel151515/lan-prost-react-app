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
             <button className={styles.boton} onClick={() => cierraMenuDesplegable()}>
               <img src={phone} alt="" /> 
               <p>{texto}</p>
            </button>
     );
}
 
export default Btn;
