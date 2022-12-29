import styled from "styled-components";

export const InformationsContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;

  h1 {
    font-size: 2.5rem;
    font-weight: "Bold";
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme.title};
    word-wrap: word-break;

    line-height: 3rem;
    margin-bottom: 1rem;
  }

`;

export const Subtitle = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.subtitle};
  font-family: "Roboto", sans-serif;
  word-wrap: normal;

  line-height: 1.5rem;

  margin-bottom: 3rem;
  display: flex;
`;

export const InformationsItens = styled.div`
  div {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  img {
    position: absolute;
    width: 30rem;
    height: 22rem;

    flex-wrap: wrap;
    margin-left: 50%;
    margin-top: -15rem;

    &:hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
}
`;

export const DivTeste = styled.div`
  display: flex;
`

const GroupBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 60%;
`;

export const GroupShoppingCartAndPackage = styled(GroupBase)`
  margin-bottom: 1.5rem;
`;

export const GroupTimerAndCoffee = styled(GroupBase)`
  margin-bottom: 2rem;
`;

const DivIconBase = styled.div`
  display: flex;
  align-items: center;

  border-radius: 999px;
  padding: 0.5rem 0.5rem;

  color: ${(props) => props.theme.white};

  &:hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
`;

export const DivShoppingCart = styled(DivIconBase)`
  background-color: ${(props) => props.theme.yellowDark};
`;

export const DivTimer = styled(DivIconBase)`
  background-color: ${(props) => props.theme.yellow};
`;

export const DivPackage = styled(DivIconBase)`
  background-color: ${(props) => props.theme.text};
`;

export const DivCoffee = styled(DivIconBase)`
  background-color: ${(props) => props.theme.purple};
`;