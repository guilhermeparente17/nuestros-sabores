import styled from 'styled-components'

export const InputFormat = styled.input`
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