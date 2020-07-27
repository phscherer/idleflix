import React from 'react';
import data from './data/dados_iniciais.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={"O que é front-end? Trabalhando na área..."}
      />
      {
        data.categorias.map((categoria) => (
          <Carousel category={categoria} />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
