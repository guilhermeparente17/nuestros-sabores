import styled from 'styled-components';

export const CompaniesContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CompDiv = styled.div`
    width: 80%;
    height: 1px;
    background-color: #000;
`;

export const CompaniesLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
`;

export const CompLogo = styled.img`
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    margin: ${(props) => `0px ${props.margin}px`};
`;