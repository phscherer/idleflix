import React from 'react';
import { FooterBase } from './styles';
import IdleHeroesLogo from '../../assets/img/IdleHeroesLogo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://play.google.com/store/apps/details?id=com.droidhang.ad">
        <img
          src={IdleHeroesLogo}
          alt="Logo IdleHeroes"
          style={{ width: '225px', height: '100px' }}
        />
      </a>
      <p>
        {'All rights reserved to YouTube channel '}
        <a href="https://www.youtube.com/channel/UC-hfQMjwCis3JeALqDjL-2g">
          Barry Gaming
        </a>
        {' and to '}
        <a href="https://github.com/phscherer">
          developer
        </a>
        {' of this portal.'}
      </p>
    </FooterBase>
  );
}

export default Footer;
