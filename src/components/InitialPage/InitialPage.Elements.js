import styled from 'styled-components';

export const InitialPageContainer = styled.div`
    width: 100%;
    height: 50vh;
    background-color: #700B24;
    display: flex;
    flex-direction: column;

    border-bottom-left-radius: 50% 40%;
    border-bottom-right-radius: 50% 40%;

    
`;

export const IPContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;

`;

export const IpImg = styled.img`
    width: 800px;
    height: 450px;
    background-size: cover;
    background-position: center;
    margin-top: 50px;
    border-radius: 25px;
    box-shadow: 0 0 1em black;

    @media(max-width: 900px){
        width: 500px;
        height: 350px;
    }

    @media(max-width: 500px){
        width: 300px;
        height: 250px;
        margin-top: 25px;
    }
`;

export const IPLogo = styled.img`
    width: 200px;
    height: 150px;
`;

export const IPTitle = styled.h1`
    font-weight: 700;
    font-size: 35px;
    margin-bottom: 20px;
    text-align: center;

    @media(max-width: 900px){
        font-size: 25px;
        margin: 0px 20px;
    }
`;

export const IPSubtitle = styled.p`
    font-size: 25px;
    margin-bottom: 20px;
    text-align: center;

    @media(max-width: 900px){
        font-size: 20px;
        margin: 10px 20px;
    }
`;

export const IPButton = styled.button`
    margin-top: 20px;
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    user-select: none;
    touch-action: manipulation;

    &:hover {
        filter: brightness(110%);
    }
`;

export const IPSpanShadow = styled.span`
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform
        600ms
        cubic-bezier(.3, .7, .4, 1);

    &:hover{
        transform: translateY(4px);
        transition: transform
            250ms
            cubic-bezier(.3, .7, .4, 1.5);
    }

    &:active{
        transform: translateY(1px);
        transition: transform 34ms;
    }
`;

export const IPSpanEdge = styled.span`
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
        to left,
        hsl(340deg 100% 16%) 0%,
        hsl(340deg 100% 32%) 8%,
        hsl(340deg 100% 32%) 92%,
        hsl(340deg 100% 16%) 100%
    );
`;

export const IPSpanFrontText = styled.span`
     display: block;
    position: relative;
    padding: 12px 27px;
    border-radius: 12px;
    font-size: 1.1rem;
    color: white;
    background: hsl(345deg 100% 47%);
    will-change: transform;
    transform: translateY(-4px);
    transition: transform
        600ms
        cubic-bezier(.3, .7, .4, 1);

        &:hover{
            transform: translateY(-6px);
            transition: transform
                250ms
                cubic-bezier(.3, .7, .4, 1.5);
        }

        &:active{
            transform: translateY(-2px);
            transition: transform 34ms;
        }
`;
