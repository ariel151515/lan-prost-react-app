import styles from './pie.module.css'
import grid from '../../elementos/grid.module.css'

const Pie = () => {
    return ( 
        <div className={styles.contenedor}>
          <div className={grid.grid}>
                <div className={styles.textoUno}>
                <a href="https://americanproductsco.com/politica-de-privacidad/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> |
                <a href="https://americanproductsco.com/politica-de-privacidad/" target="_blank" rel="noopener noreferrer">Terms and Conditions </a>| Miami, Florida, United States  | info@americanproductsco.com</div>
                <div className={styles.textoDos}>Copyright © 2022 americanproductsco.com | Todos los derechos reservados.</div>
          </div>
        </div>
     );
}
 
export default Pie;

