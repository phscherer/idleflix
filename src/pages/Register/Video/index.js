import React from 'react';
import TemplateBase from '../../../components/TemplateBase';
import { Link } from 'react-router-dom';

function RegisterVideo() {
  return (
    <TemplateBase>
      <h1>Cadastro de video</h1>
      <Link to="/register/category">
        Cadastrar categoria
      </Link>
    </TemplateBase>
  );
}

export default RegisterVideo;