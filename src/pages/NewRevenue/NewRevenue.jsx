import React from 'react'
import Revenueform from '../../components/RevenueForm/Revenueform'

import {
    RevenueContainer,
    RevenueCard,
    RevenueTitle
} from './NewRevenue.elements'

const NewRevenue = () => {
    return (
        <RevenueContainer>
            <RevenueCard>
                <RevenueTitle>Cadastrar Nova Receita</RevenueTitle>

                <Revenueform />
            </RevenueCard>
        </RevenueContainer>
    )
}

export default NewRevenue