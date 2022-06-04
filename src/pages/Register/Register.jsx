import React from 'react'
import FormRegister from '../../components/FormRegister/FormRegister';

import {
    RegisterContainer,
    RegisterCard,
    RegisterTitle
} from './Register.Elements';

const Register = () => {
    return (
        <div>
            <RegisterContainer>
                <RegisterCard>
                    <RegisterTitle>É um prazer tê-lo conosco!</RegisterTitle>

                    <FormRegister />
                </RegisterCard>
            </RegisterContainer>
        </div>
    )
}

export default Register