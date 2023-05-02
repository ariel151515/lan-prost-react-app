import styles from './senor.module.css'
import grid from '../../elementos/grid.module.css'
import senor from '../senor/img/senor.png'
 
const Senor = () => {
    return ( 
        <div className={styles.container}>
            <div className={grid.grid}>
            <img src={senor} alt="" title='' className={styles.senorImg} id="senor" />

            <div className={styles.contenedorTexto}>
                <span className={styles.titulo}>Valoramos El Poder De La Naturaleza Para Mejorar Nuestra Salud.</span>
                <span className={styles.parrafo}>
                    <p className={styles.pp}>
                    AC PROST es una fórmula cuidadosamente diseñada para atender la problemática de la próstata desde una perspectiva integral y natural. Con ingredientes cuidadosamente seleccionados, AC PROST ofrece un enfoque holístico para el cuidado de la próstata, ayudando a prevenir y reducir los síntomas de la hiperplasia prostática benigna (HPB), tales como dificultad para orinar, necesidad de orinar con frecuencia y flujo de orina débil.
                    </p>
                    <p className={styles.ppp}>
                    Además, AC PROST está elaborado con ingredientes de alta calidad y es libre de químicos y otros ingredientes sintéticos que pueden ser dañinos para el cuerpo. Al elegir AC PROST, estás eligiendo una solución natural, segura y efectiva para el cuidado de la próstata.
                    </p>

                    <p className={styles.ppp}>
                    No dejes que la problemática de la próstata afecte tu calidad de vida. Con AC PROST, puedes abordar la salud de la próstata de una manera integral y natural. ¡Prueba AC PROST hoy y experimenta los beneficios de una próstata saludable!
                    </p>
                </span>
            </div>
        </div>
        </div>
     );
}
 
export default Senor;