import styles from '../envio/envio.module.css'
import grid from '../../elementos/grid.module.css'
import envioIcono from '../envio/img/envio.png'

const Envios = () => {
    return ( 
        <div className={styles.contenedor}>
          <div className={grid.grid}>
              <div className={styles.content}>
                    <img src={envioIcono} className={styles.envioIcono} />
                         <div className={styles.textos}>
                              <p className={styles.tituloUno}>¡ORDENE HOY Y OBTENGA <span className={styles.amarillo}>ENVIO 100% GRATIS!</span></p>
                              <p className={styles.tituloDos}>*ESTA OFERTA ES POR TIEMPO LIMITADO*</p>
                            </div>
              </div>
          </div>
        </div>
     );
}
 
export default Envios;