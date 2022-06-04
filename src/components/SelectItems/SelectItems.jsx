import React from 'react'
import { useState } from 'react'
import Select from 'react-select'

import {
    SelectContainer,
    SelectTitle
} from './Select.elements'

const SelectItems = ({ categories, setValueCategorie }) => {

    const options = categories?.map(categorie => {
        return {
            value: categorie._id,
            label: categorie.name
        }
    })
    return (
        <SelectContainer>
            <SelectTitle>Categorias</SelectTitle>
            <Select onChange={e => setValueCategorie(e.value)} options={options} />
        </SelectContainer>
    )
}

export default SelectItems