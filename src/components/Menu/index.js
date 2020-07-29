import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from '../Components/ButtonLink'

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da AluraFlix"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;