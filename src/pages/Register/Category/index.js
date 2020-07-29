import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../components/TemplateBase';
import FormField from '../../../components/FormField';

function RegisterCategory() {
  const defaultValues = {
    name: '',
    description: '',
    color: '#000000',
  };
  const [values, setValues] = useState(defaultValues);
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.getAttribute('name')]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories([ ...categories, values ]);
    setValues(defaultValues);
  }

  return (
    <TemplateBase>
      <h1>Cadastro de categoria</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
          height="auto"
          color="#FFFFFF"
          text
        />
        <FormField
          label="Descrição"
          type="textArea"
          name="description"
          value={values.description}
          handleChange={handleChange}
          color="#FFFFFF"
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          handleChange={handleChange}
          padding="4px 16px"
          height="50px"
          color="#FFFFFF"
          text
        />
        <ul>
          {
            categories.map((category, index) => (
              <li key={`category-${index}`}>
                { category.name }
              </li>
            ))
          }
        </ul>
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