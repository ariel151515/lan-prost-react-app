import styles from './senor.module.css'
import grid from '../../elementos/grid.module.css'
import senor from '../senor/img/senor.png'
 
const Senor = () => {
    return ( 
        <div className={styles.container}>
            <div className={grid.grid}>
            <img src={senor} alt="" title='' className={styles.senorImg}/>

            <div className={styles.contenedorTexto}>
                <span className={styles.titulo}>Valoramos El Poder De La Naturaleza Para Mejorar Nuestra Salud.</span>
                <span className={styles.parrafo}>
                    <p className={styles.pp}>
                    A diferencia de otros suplementos del mercado actual, B-PROST NATUAL es un producto diseñado para tratar los síntomas causados por la HBP (hiperplasia prostática benigna), como el ardor al orinar, la nicturia, el goteo después de orinar, orinar con mucha frecuencia, orinar poco o no orinar.
                    </p>
                    <p className={styles.ppp}>
                    A diferencia de otros suplementos del mercado actual, B-PROST NATUAL es un producto diseñado para tratar los síntomas causados por la HBP (hiperplasia prostática benigna), como el ardor al orinar, la nicturia, el goteo después de orinar, orinar con mucha frecuencia, orinar poco o no orinar.
                    </p>
                </span>
            </div>
        </div>
        </div>
     );
}
 
export default Senor;