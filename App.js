import React, { useState } from 'react';
import './App.css';

/* Componentes */
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Senor from './components/senor/Senor';
import Ingredientes from './components/ingredientes/Ingredientes';
import Envios from './components/envio/Envio';
import Footer from './components/footer/Footer';
import Pie from './components/pie/Pie';

/* Componentes ventana modal */
import VentanaModal from '../src/elementos/ventanaModal/VentanaModal';
import ContenidoModal from './components/contenidomodal/ContenidoModal';


function App() {

  const [muestra, setMuestra] = useState(false);
  const [menuDesplegable, setMenuDesplegable] = useState(false)

  return (
    <div className="App">
      <VentanaModal props={<ContenidoModal />} setMuestra={setMuestra} muestra={muestra} />
      <Header
        setMuestra={setMuestra}
        muestra={muestra}
        menuDesplegable={menuDesplegable}
        setMenuDesplegable={setMenuDesplegable}
      />
      <Banner />
      <Senor />
      <Ingredientes />
      <Envios />
      <Footer />
      <Pie />
    </div>
  );
}

export default App;
