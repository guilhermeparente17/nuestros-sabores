import React from 'react'

import {
    InputFormat
} from './Input.Elements'

export const Input = ({ id, name, ...props }) => {
    return (
        <InputFormat
            id={id}
            name={name}
            {...props}
        />
    )
}

export default Input