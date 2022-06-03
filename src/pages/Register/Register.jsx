import React from 'react'
import FormRegister from '../../components/FormRegister/FormRegister';
import Header from '../../components/Header/Header';

import {
    RegisterContainer,
    RegisterCard,
    RegisterTitle
} from './Register.Elements';

const Register = () => {
    return (
        <div>
            <Header />

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