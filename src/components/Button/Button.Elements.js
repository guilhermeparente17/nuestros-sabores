import styled from 'styled-components';

export const ButtonFormat = styled.button`
    width: 180px;
    height: 50px;
    background-color: ${(props) => props.bgColor};
    outline: none;
    border:0;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    margin-left: ${(props) => `${props.marginL}px`};
    margin-top: 20px;
    margin-top: ${(props) => `${props.marginT}px`};
    border-radius: ${(props) => `${props.borderRadius}px`};
    
    &:hover{
        background-color: ${(props) => props.bgColorHover};
        transition: 0.4s ease-in-out;
    }
`;