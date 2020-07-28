import React from 'react';
import data from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import TemplateBase from '../../components/TemplateBase';

function Homepage() {
  return (
    <div style={{ background: "#141414" }}>
      <TemplateBase>
        <BannerMain
          videoTitle={data.categorias[0].videos[1].titulo}
          url={data.categorias[0].videos[1].url}
          videoDescription={"Stay tuned for news involving the mobile game Idle Heroes"}
        />
        {
          data.categorias.map((categoria) => (
            <Carousel category={categoria} />
          ))
        }
      </TemplateBase>
    </div>
  );
}

export default Homepage;
