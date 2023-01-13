import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`;

export const DivAdressAndShoppingCart = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const DivAdress = styled.div`
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  gap: 0.25rem;
  padding: 0.5rem 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => props.theme.purpleDark};
    font-family: "Roboto", sans-serif;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

export const DivNumberItensInCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.yellowDark};
  color: ${(props) => props.theme.white};
  border-radius: 50%;

  width: 1rem;
  height: 1rem;

  position: absolute;

  top: 1.75rem;
  right: 12.6rem;

  span {
    font-size: 0.55rem;
    font-weight: 700;
  }
`;

export const ButtonShoppingCart = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};

  border-radius: 6px;

  padding: 0.5rem 0.5rem;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

export const ButtonMoon = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.hover};
  color: ${(props) => props.theme.title};

  border-radius: 6px;

  padding: 0.5rem 0.5rem;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

export const DivCityAndUF = styled.div`
  span:first-child {
    text-transform: capitalize;
  }

  span:last-child {
    text-transform: uppercase;
  }
`;
