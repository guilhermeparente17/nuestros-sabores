import React from 'react'

import {
    InitialPageContainer,
    IPTitle,
    IpImg,
    IPContent,
    IPLogo,
    IPSubtitle,
    IPButton,
    IPSpanShadow,
    IPSpanEdge,
    IPSpanFrontText
} from './InitialPage.Elements'

import Kitchen from '../../assets/images/kitchen.jpg';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png'

const InitialPage = () => {
    return (
        <InitialPageContainer>
            <IPContent>
                <IPLogo src={Logo} />

                <IPTitle>Cadastre suas receitas e tenha o mundo da culinária em suas mãos!</IPTitle>
                <IPSubtitle>Compartilhe suas receitas com o mundo</IPSubtitle>

                <Link to="/register"><IPButton>
                    <IPSpanShadow />
                    <IPSpanEdge />
                    <IPSpanFrontText>Cadastre-se
                    </IPSpanFrontText>
                </IPButton></Link>
                <IpImg src={Kitchen} />
            </IPContent>
        </InitialPageContainer>
    )
}

export default InitialPage