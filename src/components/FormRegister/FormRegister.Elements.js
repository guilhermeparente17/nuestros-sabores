import styled from 'styled-components'

export const Form = styled.form`
    margin: 50px;
`;

export const FormCol = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-right: ${(props) => `${props.marginR}px`};
`;

export const Input = styled.input`
    width: 100%;
    line-height: 28px;
    border: 2px solid transparent;
    border-bottom-color: #700B24;
    padding: .2rem 0;
    outline: none;
    background-color: transparent;
    color: #0d0c22;
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &::placeholder{
        color: #777;
        font-size: 18px;
    }
    
    &:focus::placeholder{
        opacity: 0;
        transition: opacity .3s;
    }
`;

export const Button = styled.button`
    width: 180px;
    height: 50px;
    background-color: #700B24;
    outline: none;
    border:0;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    margin-left: ${(props) => `${props.marginL}px`};

    &:hover{
        background-color: #BD133D;
        transition: 0.4s ease-in-out;
    }
`;