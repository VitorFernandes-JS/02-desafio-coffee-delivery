import styled from "styled-components";

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1.025rem;
  margin-top: 3.5rem;
  margin-bottom: 2.25rem;

  width: 16rem;
  height: 18rem;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;

  background-color: ${(props) => props.theme.card};
`;

export const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;

  margin-top: -2rem;
`;

export const Category = styled.span`
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};

  font-size: 0.6rem;
  font-weight: "bold";
  font-family: "Roboto", sans-serif;

  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: "bold";
  font-family: "Baloo 2", sans-serif;

  color: ${(props) => props.theme.subtitle};
`;

export const Description = styled.span`
  color: ${(props) => props.theme.label};
  font-size: 0.75rem;
  font-weight: "bold";
  font-family: "Roboto", sans-serif;
  text-align: center;

  margin-inline: 1.3rem;

  margin-bottom: 2.05rem;
`;

export const DivValueAndButtons = styled.div`
  display: flex;
`;

export const Value = styled.span`
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Baloo 2", sans-serif;
`;

export const DivButtonsRemoveAndAdd = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.button};
  border-radius: 6px;

  margin-left: 1.25rem;
  margin-right: 1rem;

  span {
    color: ${(props) => props.theme.title};
    font-size: 1rem;

    margin-top: -0.07rem;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.5rem;

  color: ${(props) => props.theme.purple};

  &:hover {
    opacity: 0.6;
  }
`;

export const ButtonRemove = styled(Button)``;

export const ButtonAdd = styled(Button)``;

export const ButtonToCart = styled.button`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.purpleDark};
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.5rem;

  border-radius: 6px;

  &:hover {
    opacity: 0.8;
  }
`;
