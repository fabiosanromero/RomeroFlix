import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';
import Pagina404 from '../../assets/img/404.jpg';
import './page404.css';

const Main = styled.main`
    background-color: var(--Yellow);
    color: var(--white);
    min-height: calc(100vh - var(--bodyPaddingTop));
    display: flex;
    flex-direction: column;
    padding-left:5%;
    padding-right:5%;
`;

function Page404() {
    return(
        <>
        <Menu/>
            <Main>
            <img className="Page404" src={Pagina404} alt="404 - Page not found"/>
            <br></br>
            <Link to="https://br.freepik.com/vetores/negocio">Negócio vetor criado por pikisuperstar - br.freepik.com</Link>   
            </Main>
        <Footer/>
        </>
    );

}

export default Page404;