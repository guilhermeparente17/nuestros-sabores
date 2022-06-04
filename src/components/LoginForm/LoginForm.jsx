import { Formik, useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import FormCol from '../FormCol/FormCol';
import Input from '../Input/Input';
import {
    Form
} from './LoginForm.Elements'
import api from '../../api/api'
import { insertUser } from '../../store/actionsType';
import { useDispatch } from 'react-redux';

const LoginForm = () => {

    let hist = useNavigate();
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
            const loginUser = async () => {
                try {
                    const response = await api.post('users/login', values);

                    if (response.data.length > 0) {
                        dispatch(insertUser(response.data[0]));
                        hist('/system');
                        toast.success(`Bem-vindo ao sistema ${response.data[0].name} 👋`);
                    } else {
                        toast.error('Email ou senha inválidos. Tente novamente');
                    }
                } catch (error) {
                    console.log(error)
                }
            }

            loginUser();
        },
    });
    return (
        <Formik>
            <Form onSubmit={formik.handleSubmit}>
                <FormCol>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        required={true}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </FormCol>
                <FormCol>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Senha"
                        required={true}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </FormCol>

                <Button
                    bgColor={'#700B24'}
                    bgColorHover={'#BD133D'}
                    type="submit">Entrar</Button>
                <Link to="/"><Button
                    marginL={20}
                    bgColor={'gray'}
                    bgColorHover={'black'}
                    type="submit">Voltar</Button></Link>
            </Form>
        </Formik>
    );
};

export default LoginForm;