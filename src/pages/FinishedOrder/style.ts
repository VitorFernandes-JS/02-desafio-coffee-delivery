import styled from "styled-components";

export const ContainerFinishedOrder = styled.div`
  display: flex;
  flex-direction: row;

  padding: 4rem 10rem;
`;


export const DivTexts = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 2rem;

  h1 { 

    font-family: "Baloo 2", cursive;
    font-size: 2rem;

    color: ${(props) => props.theme.yellowDark};
    margin-bottom: 0.15rem;
    margin-top: -1.5rem;
  }
`;

export const Subtitle = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  color: ${(props) => props.theme.subtitle};
  margin-bottom: 2.25rem;
`;

export const Border = styled.div`
  background-color: none;
  border: 1px solid linear-gradient(#FFC700 50%, #FFC700 100%);
 

  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  padding: 2.50rem;
`;

export const DivMapAndText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap;
  margin-bottom: 2rem;

  div {
    margin-right: 0.75rem;
  }

  div:last-child {
    margin-right: 1rem;
  }
`;

export const DivMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};

  border-radius: 999px;
`;

export const DivTimerAndText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap;
  margin-bottom: 2rem;

  div {
    margin-right: 0.75rem;
  }
`;

export const DivTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  border-radius: 999px;
`;

export const DivDollarAndText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap;

  div {
    margin-right: 0.75rem;
  }
`;

export const DivDollar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  background-color: ${(props) => props.theme.yellowDark};
  color: ${(props) => props.theme.white};

  border-radius: 999px;
`;

export const DivImg = styled.div`
  margin-top: 3.75rem;
  margin-left: 4rem;
`
