import React, { useEffect, useState } from 'react'
import { FaHatCowboySide } from 'react-icons/fa'

import {
    SystemFilterContainer,
    SystemFilterHeader,
    SystemFilterTitle,
    ArrowLeft,
    ArrowRight,
    SystemFilterNav,
    SystemFilterList,
    SystemFilterItem,
    SFOption
} from './SystemFilter.Elements'

import api from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { insertCategories } from '../../store/actionsType'
import Selectors from '../../store/Selectors'


const SystemFilter = () => {
    const dispatch = useDispatch();
    const categories = useSelector(Selectors.getCategories);
    const [isOpen, setIsOpen] = useState(false);

    const handleCategories = async () => {
        try {
            const response = await api.get('categories');
            dispatch(insertCategories(response.data))
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleCategories()
    }, []); //eslint-disable-line

    return (
        <SystemFilterContainer isOpen={isOpen}>
            <SystemFilterHeader>
                <SystemFilterTitle isOpen={isOpen}>Filtros</SystemFilterTitle>

                {isOpen ? <ArrowRight onClick={() => setIsOpen(!isOpen)} size="25" color="white" /> :
                    <ArrowLeft onClick={() => setIsOpen(!isOpen)} size="25" color="white" />}
            </SystemFilterHeader>

            <SystemFilterNav>
                <SystemFilterList>
                    {
                        categories.map(categorie => {
                            return <SystemFilterItem key={categorie._id}>
                                <FaHatCowboySide size="30" color="white" />
                                <SFOption isOpen={isOpen}>{categorie.name}</SFOption>
                            </SystemFilterItem>
                        })
                    }
                </SystemFilterList>
            </SystemFilterNav>
        </SystemFilterContainer>
    )
}

export default SystemFilter