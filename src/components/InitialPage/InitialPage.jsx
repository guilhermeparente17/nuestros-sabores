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

const InitialPage = () => {
    return (
        <InitialPageContainer>
            <IPContent>
                <IPLogo>Nuestros Sabores</IPLogo>

                <IPTitle>Cadastre suas receitas e tenha o mundo da culinária em suas mãos!</IPTitle>
                <IPSubtitle>Compartilhe suas receitas com o mundo</IPSubtitle>

                <IPButton>
                    <IPSpanShadow />
                    <IPSpanEdge />
                    <IPSpanFrontText>Cadastre-se
                    </IPSpanFrontText>
                </IPButton>
                <IpImg src={Kitchen} />
            </IPContent>


        </InitialPageContainer>
    )
}

export default InitialPage