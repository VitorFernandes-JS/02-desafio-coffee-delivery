import styled from "styled-components";

export const CardCoffeeHorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;

    width: 19rem
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;

  margin-top: -0.3rem;
`;

export const DivTitleAndValue = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TitleCoffee = styled.h3`
  font-size: 0.8rem;
  margin-left: 1rem;
  color: ${(props) => props.theme.subtitle};

  font-weight: 600;
  font-family: "Roboto", sans-serif;
`;

export const ValueCoffee = styled.span`
    font-size: 1rem;
    color: ${(props) => props.theme.text};
    font-weight: 600;
    
    font-family: "Roboto", sans-serif;

    margin-left: 3rem;

`

export const DivTitleAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DivButtons = styled.div`
  display: flex;
`;

export const ButtonLessAndmore = styled.div`
  padding: 0.3rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.button};

  width: 4.75rem;
  margin-left: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1rem;
    margin-inline: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme.purple};

  &:hover {
    opacity: 0.6;
  }
`;

export const ButtonRemove = styled(Button)``;

export const ButtonAdd = styled(Button)``;

export const ButtonRemoveToCart = styled.button`
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme.button};

  width: 5.85rem;
  margin-left: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  span {
    font-size: 0.8rem;
    margin-left: 0.3rem;

    color: ${(props) => props.theme.subtitle};
  }
`;

export const Line = styled.hr`
  width: 15rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  border: 1px solid ${(props) => props.theme.button};
`
