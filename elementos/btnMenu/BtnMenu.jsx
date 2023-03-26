import styles from './btnmenu.module.css'
import phone from './img/phone.png'

const BtnMenu = ({texto, setMuestra, muestra, setMenuDesplegable}) => {

    function ariel(){
        if(!muestra) {
            setMenuDesplegable(false)
            setMuestra(true)
        }
    }
   
    return ( 
             <button className={styles.boton} onClick={() => ariel()}>
                <img src={phone} /> 
                <p>{texto}</p>
            </button>
     );
}
 
export default BtnMenu;
