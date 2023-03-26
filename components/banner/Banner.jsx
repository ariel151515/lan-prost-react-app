import styles from '../banner/banner.module.css'
import grid from '../../elementos/grid.module.css'
import sellos from '../banner/img/sellos.png'
import bottle from '../banner/img/bottle.png'

const Banner = () => {
    return ( 
        <div className={grid.grid}>
            <div className={styles.textosBanner}>
                <span className={styles.tituloPrincipal}>La Próstata No Tiene Que Hacer Tu Vida Imposible</span>
                <p className={styles.parrafo}>
                  Descubre AC PROST, la fórmula que contempla la problemática de la próstata desde una mirada integral y natural
                </p>
                <img src={sellos} alt="sellos" className={styles.sellos} />
            </div>
            <img src={bottle} alt="bottle B-PROST-NATURAL"  className={styles.bote}/>
        </div>
     );
}
 
export default Banner;