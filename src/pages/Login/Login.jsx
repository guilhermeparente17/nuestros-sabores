import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

import {
    LoginContainer,
    LoginCard,
    LoginTitle
} from './Login.Elements'

const Login = () => {
    return (
        <>
            <LoginContainer>
                <LoginCard>
                    <LoginTitle>Login</LoginTitle>

                    <LoginForm />
                </LoginCard>
            </LoginContainer>
        </>

    )
}

export default Login