import styles from './contenidoModal.module.css'
import Formulario from '../../elementos/formularioModal/Formulario';

const ContenidoModal = () => {
    return ( 
        <div className={styles.contenedor}>
            <h1>¿Cuánto vale dejar de pasar vergüenza y volver a sentirse hombre?</h1>
            <p>Dejenos sus datos de contacto y nos comunicaremos con usted lo antes posible</p>
            <div className={styles.contenedorFormulario}>
               < Formulario />
            </div>
            <p className={styles.pie}>Al proporcionarnos su información, usted acepta la recopilación y el uso de su información de acuerdo con nuestros Términos de servicio y Política de privacidad.</p>
        </div>
     );
}
 
export default ContenidoModal;