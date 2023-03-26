import styles from './card.module.css'
import grid from '../../elementos/grid.module.css'
import achiote from './img/achiote.png'
import sawPalmetto from './img/sawPalmetto.png'
import pumpkinSeeds from './img/pumpkinSeeds.png'
import zinc from './img/zinc.png'


const Card = ({imagen,nombre}) => {
    return ( 
        <div className={styles.contenedor}>

            {
                imagen === 'achiote'  ? <img src={achiote} alt="" /> :
                imagen === 'sawPalmetto'  ? <img src={sawPalmetto}  alt=""/> : 
                imagen === 'pumpkinSeeds'  ? <img src={pumpkinSeeds}  alt=""/> :
                imagen === 'zinc'  ? <img src={zinc}  alt=""/> :
                ' '
                
            }


         <div className={styles.tituloDiv}>
               {
                    nombre === 'achiote'  ?  'Achiote' :
                    nombre === 'sawPalmetto'  ?  'Saw Palmetto'  : 
                    nombre === 'pumpkinSeeds'  ?  'Pumpkin Seeds'  :
                    nombre === 'zinc'  ?  'Zinc'  :
                    ' '
                }
         </div>


         <div className={styles.texto}>
                El achiote contiene antioxidantes que pueden proteger la salud de la próstata y prevenir enfermedades relacionadas con ella
         </div>
        
        </div>

     );
}
 
export default Card;