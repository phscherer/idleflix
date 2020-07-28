import React from 'react';
import TemplateBase from '../../../components/TemplateBase';
import { Link } from 'react-router-dom';

function RegisterCategory() {
  return (
    <TemplateBase>
      <h1>Cadastro de categoria</h1>
      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>
        <button>
          Cadastrar
        </button>
      </form>
      <Link to="/">
        Voltar para página inicial
      </Link>
    </TemplateBase>
  );
}

export default RegisterCategory;