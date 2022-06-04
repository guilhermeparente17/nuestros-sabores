import styled from 'styled-components';

export const SystemPanel = styled.div`
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const SPHeader = styled.header`
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 15px;
`;

export const SPTitle = styled.h1`
    font-size: 35px;
    font-weight: 700;
    color: #700B24;
    margin-left: 20px;
`;

export const SPBody = styled.section`
    width: 100%;
    height: 700px;
    background-color: #fff;
    border-radius: 20px;
    padding: 15px;
`;

export const SPRevenueContainer = styled.div`
    margin: 20px 0px 0px 20px;
    width: 97%;
    height: 90px;
    background-color: #700B24;
    color: #fff;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SPRTitle = styled.h2`
    font-size: 25px;
    margin-bottom: 5px;
`;

export const SPRDescription = styled.p`
    
`;

export const SPRContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SPRItems = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
    margin-right: 30px;
`;

export const SPSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;