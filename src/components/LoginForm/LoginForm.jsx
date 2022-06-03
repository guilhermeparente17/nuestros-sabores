import { Formik, useFormik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import api from '../../api/api';
import Button from '../Button/Button';
import FormCol from '../FormCol/FormCol';
import Input from '../Input/Input';
import {
    Form
} from './LoginForm.Elements'

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
            const createUser = async () => {
                try {
                    await api.post('/users', values);
                    toast.success('usuario cadastrado com sucesso!');
                } catch (error) {
                    console.log(error)
                }
            }

            createUser();
        },
    });
    return (
        <Formik>
            <Form onSubmit={formik.handleSubmit}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
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


                <FormCol>
                    <Input
                        id="repeatPassword"
                        name="repeatPassword"
                        type="password"
                        placeholder="Repetir senha"
                    />
                </FormCol>

                <Button
                    bgColor={'#700B24'}
                    bgColorHover={'#BD133D'}
                    type="submit">Cadastrar</Button>
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