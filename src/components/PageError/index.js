import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--red);
    color: var(--white);
    flex:1;    
    padding-top:50px;
    padding-left:5%;
    padding-right:5%;
`;

function PageError({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageError;
