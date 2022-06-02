import React from 'react'
import { FaPen, FaPodcast, FaSearch } from 'react-icons/fa';

import {
    ItemsContainer,
    ItemContainer,
    ItemTitle,
    ItemDescription
} from './Items.Elements'

const Items = () => {
    return (
        <ItemsContainer>
            <ItemContainer>
                <FaPen size="30" color="#700B24" style={{ marginBottom: '15px' }} />
                <ItemTitle>Registre todas as suas receitas conosco.</ItemTitle>
                <ItemDescription>Com a Nuestros Sabores você pode registar suas receitas com segurança e repidez.</ItemDescription>
            </ItemContainer>

            <ItemContainer>
                <FaPodcast size="30" color="#700B24" style={{ marginBottom: '15px' }} />
                <ItemTitle>Registre todas as suas receitas conosco.</ItemTitle>
                <ItemDescription>Com a Nuestros Sabores você pode registar suas receitas com segurança e repidez.</ItemDescription>
            </ItemContainer>

            <ItemContainer>
                <FaSearch size="30" color="#700B24" style={{ marginBottom: '15px' }} />
                <ItemTitle>Pesquise por receitas do seu gosto.</ItemTitle>
                <ItemDescription>Com a Nuestros Sabores você pode pesquisar qualquer tipo de receita.</ItemDescription>
            </ItemContainer>
        </ItemsContainer>
    )
}

export default Items