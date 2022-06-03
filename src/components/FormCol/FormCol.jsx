import React from 'react'

import {
    FormColFormat
} from './FormCol.Elements'

const FormCol = ({ children, ...props }) => {
    return (
        <FormColFormat {...props}>
            {children}
        </FormColFormat>
    )
}

export default FormCol