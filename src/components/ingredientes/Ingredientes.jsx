import styles from './ingredientes.module.css'
import grid from '../../elementos/grid.module.css'
import Card from '../../elementos/card/Card'

const Ingredientes = () => {
    return ( 
        <div className={styles.container}>
            <div className={grid.grid}>
                    <div className={styles.tituloIngredientes} id="ingredientes" >INGREDIENTES 100% NATURALES</div>
                    <div className={styles.tituloDos}>Los Ingredientes Naturales De AC PROST Han Sido Cuidadosamente Seleccionados Por Expertos en Salud</div>
                    
                    <div className={styles.contenedorCard}>
                        <Card imagen="achiote" nombre="achiote" />
                        <Card imagen="sawPalmetto" nombre="sawPalmetto" />
                        <Card imagen="pumpkinSeeds" nombre="pumpkinSeeds" />
                        <Card imagen="zinc" nombre="zinc" />
                    </div>
                </div> 
            </div>
     );
}
 
export default Ingredientes;