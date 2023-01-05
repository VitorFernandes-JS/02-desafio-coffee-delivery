import styled from "styled-components";

export const CardCoffeeHorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

    width: 19rem
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
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

export const ButtonLessAndmore = styled.button`
  padding: 0.3rem;
  border-radius: 6px;
  border: none;
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

export const ButtonRemoveToCart = styled.button`
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme.button};

  width: 5.85rem;
  margin-left: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 0.8rem;
    margin-left: 0.3rem;

    color: ${(props) => props.theme.subtitle};
  }
`;
