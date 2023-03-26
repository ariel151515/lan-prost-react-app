import styles from './pie.module.css'
import grid from '../../elementos/grid.module.css'

const Pie = () => {
    return ( 
        <div className={styles.contenedor}>
          <div className={grid.grid}>
                <div className={styles.textoUno}>Privacy Policy | Terms and Conditions | Miami, Florida, United States  | info@americanproductsco.com</div>
                <div className={styles.textoDos}>Copyright © 2022 americanproductsco.com | Todos los derechos reservados.</div>
          </div>
        </div>
     );
}
 
export default Pie;

