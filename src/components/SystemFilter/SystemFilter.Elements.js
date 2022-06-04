import styled from 'styled-components'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const SystemFilterContainer = styled.div`
    width: ${(props) => `${props.isOpen ? '70px' : '250px'}`};
    height: 100vh;
    background-color: #3D0614;

    transition: 0.2s ease-in-out;
`;

export const SystemFilterHeader = styled.header`
    width: 100%;
    height: 50px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-top: 10px;
`;

export const SystemFilterTitle = styled.h1`
    font-weight: 500;
    text-transform: uppercase;
    font-size: 25px;

    display: ${(props) => props.isOpen ? 'none': 'block'};
`;

export const ArrowLeft = styled(FaArrowLeft)`
    cursor: pointer;
`;

export const ArrowRight = styled(FaArrowRight)`
    cursor: pointer;
`;


export const SystemFilterNav = styled.nav`
    padding: 15px;
`;

export const SystemFilterList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const SystemFilterItem = styled.li`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    margin-bottom: 30px;
`;

export const SFImg = styled.img`
    width: 50px;
    height: 50px;
    color: white;
`;

export const SFOption = styled.span`
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
    color: #fff;

    display: ${(props) => props.isOpen ? 'none': 'block'};
`;
