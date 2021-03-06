import React from 'react';
import { Formik, useFormik } from 'formik';

import {
    Form
} from './FormRegister.Elements'
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Input from '../Input/Input';
import FormCol from '../FormCol/FormCol';
import Button from '../Button/Button';


const FormRegister = () => {
    let navigate = useNavigate();
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
                    navigate('/login');

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
                <FormCol>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nome"
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

export default FormRegister;