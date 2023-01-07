import styled from "styled-components";

export const ContainerFinishedOrder = styled.div`
    display: flex;
    flex-direction: row;

    padding: 4rem 10rem;
`

export const DivTexts = styled.div`
    display: flex;
    flex-direction: column;

    margin-right: 2rem;

    h1 {
        font-family: "Baloo 2", cursive;
        font-size: 2rem;

        color: ${props => props.theme.yellowDark};
        margin-bottom: 0.15rem;
    }
`

export const Subtitle = styled.span`
    font-family: "Roboto", sans-serif;
        font-weight: 500;

        color: ${props => props.theme.subtitle};
        margin-bottom: 2.25rem;
`

export const DivMapAndText = styled.div`
    display: flex;
    
`