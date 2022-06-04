import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Selectors from '../../store/Selectors';
import Button from '../../components/Button/Button'

import {
    SystemPanel,
    SPHeader,
    SPTitle,
    SPBody,
    SPRevenueContainer,
    SPRTitle,
    SPRDescription,
    SPRContent,
    SPRItems,
    SPSection
} from './Panel.Elements'
import { FaBookOpen, FaPencilAlt, FaTimesCircle } from 'react-icons/fa';

const Panel = () => {
    const user = useSelector(Selectors.getUser);
    console.log(user);
    const [revenues, setRevenues] = useState([]);

    useEffect(() => {
        setRevenues(user?.revenues);
    }, [user]);


    return (
        <SystemPanel>
            <SPHeader>
                <SPTitle>Bem vindo {user?.name} 👋</SPTitle>
            </SPHeader>

            <SPBody>
                <SPSection>
                    <SPTitle>Suas Receitas</SPTitle>
                    <Link to="nova-receita">
                        <Button
                            bgColor={'#700B24'}
                            bgColorHover={'#990f31'}
                            marginT={0}
                            marginL={20}
                            borderRadius={20}
                        >Nova Receita</Button>
                    </Link>
                </SPSection>

                {
                    revenues?.map(revenue => {
                        return <SPRevenueContainer key={revenue._id}>
                            <SPRContent>
                                <SPRTitle>{revenue.name}</SPRTitle>
                                <SPRDescription>{revenue.description}</SPRDescription>
                            </SPRContent>

                            <SPRItems>
                                <FaPencilAlt style={{ cursor: 'pointer' }} size="30" color="white" />
                                <FaBookOpen style={{ cursor: 'pointer' }} size="30" color="white" />
                                <FaTimesCircle style={{ cursor: 'pointer' }} size="30" color="white" />
                            </SPRItems>
                        </SPRevenueContainer>
                    })
                }
            </SPBody>

        </SystemPanel>
    )
}

export default Panel