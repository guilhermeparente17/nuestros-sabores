import { Form, Formik, useFormik } from 'formik';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../api/api';
import { insertUser } from '../../store/actionsType';
import Selectors from '../../store/Selectors';
import Button from '../Button/Button';
import FormCol from '../FormCol/FormCol';
import Input from '../Input/Input';
import SelectItems from '../SelectItems/SelectItems';

const RevenueForm = () => {
    const dispatch = useDispatch();
    let hist = useNavigate();
    const user = useSelector(Selectors.getUser);
    console.log(user);

    const categories = useSelector(Selectors.getCategories);
    const [valueCategorie, setValueCategorie] = useState('');

    console.log(valueCategorie);


    const formik = useFormik({
        initialValues: {
            name: '',
            description: ''
        },
        onSubmit: values => {
            console.log(values);
            const createRevenue = async () => {
                try {
                    const response = await api.post('revenues', {
                        name: values.name,
                        description: values.description,
                        categories: [`${valueCategorie}`]
                    });

                    console.log(response);

                    const responseUser = await api.patch(`users/${user._id}`, {
                        revenues: [`${response.data._id}`]
                    })

                    console.log(responseUser);

                    if (responseUser.data.length > 0) {
                        dispatch(insertUser(responseUser.data[0]));
                        toast.success('Receita criada com sucesso')
                        hist('/system');
                    } else {
                        toast.error('erro ao criar receita');
                    }
                } catch (error) {
                    console.log(error)
                }
            }

            createRevenue();
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
                        id="description"
                        name="description"
                        type="textarea"
                        placeholder="Descrição"
                        rows="4"
                        required={true}
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                </FormCol>

                <FormCol>
                    <SelectItems setValueCategorie={setValueCategorie} categories={categories} />
                </FormCol>

                <Button
                    bgColor={'#700B24'}
                    bgColorHover={'#BD133D'}
                    type="submit">Criar</Button>
                <Link to="/system"><Button
                    marginL={20}
                    bgColor={'gray'}
                    bgColorHover={'black'}
                    type="submit">Voltar</Button></Link>
            </Form>
        </Formik>
    );
};

export default RevenueForm;