import React from 'react'

import {
    CompaniesContainer,
    CompDiv,
    CompaniesLogo,
    CompLogo
} from './Companies.Elements'

import ifood from '../../assets/images/ifood.png'
import aiqfome from '../../assets/images/aiqfome.png'
import uberEats from '../../assets/images/ubereats.jpg'

const Companies = () => {
    return (
        <CompaniesContainer>
            <CompDiv />

            <CompaniesLogo>
                <CompLogo width="150" height="150" src={ifood} />
                <CompLogo width="150" height="50" margin="100" src={aiqfome} />
                <CompLogo width="150" height="150" src={uberEats} />
            </CompaniesLogo>

            <CompDiv />
        </CompaniesContainer>
    )
}

export default Companies