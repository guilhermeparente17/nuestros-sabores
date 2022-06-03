import React from 'react'

import {
    HeaderContainer,
    HeaderLogo,
} from './Header.Elements'

import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/"><HeaderLogo src={Logo} /></Link>
        </HeaderContainer>
    )
}

export default Header