import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  flex: 1;
  padding-top: 50px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: var(--black);
  color: var(--white);
`;

function TemplateBase({ children }) {
  return (
    <>
      <Menu />
        <Main>
          { children }
        </Main>
      <Footer />
    </>
  );
}

export default TemplateBase;