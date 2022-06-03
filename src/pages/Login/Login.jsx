import React from 'react'
import Header from '../../components/Header/Header'
import LoginForm from '../../components/LoginForm/LoginForm'

import {
    LoginContainer,
    LoginCard,
    LoginTitle
} from './Login.Elements'

const Login = () => {
    return (
        <>
            <Header />
            <LoginContainer>
                <LoginCard>
                    <LoginTitle>É um prazer tê-lo conosco!</LoginTitle>

                    <LoginForm />
                </LoginCard>
            </LoginContainer>
        </>

    )
}

export default Login