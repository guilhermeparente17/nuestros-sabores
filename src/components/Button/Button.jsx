import React from 'react'

import {
    ButtonFormat
} from './Button.Elements'

const Button = ({ children, ...props }) => {
    return (
        <ButtonFormat {...props}>{children}</ButtonFormat>
    )
}

export default Button