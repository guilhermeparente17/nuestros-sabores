import React from 'react';
import { Formik, useFormik } from 'formik';

import {
    Form
} from './FormRegister.Elements'
import { Link } from 'react-router-dom';
import api from '../../api/api';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Input from '../Input/Input';
import FormCol from '../FormCol/FormCol';
import Button from '../Button/Button';

const FormRegister = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));

            console.log(values);
            // fetch('http://localhost:8000/users').then(data => console.log(data)).catch(error => console.log(error));
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
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        required={true}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </FormCol>

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
                        placeholder="Password"
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
                        placeholder="repeatPassword"
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

export default FormRegister;