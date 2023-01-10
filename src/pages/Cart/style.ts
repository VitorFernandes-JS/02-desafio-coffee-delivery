import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 10rem;

  h2:first-child {
    margin-bottom: 1rem;

    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: 900;

    color: ${({ theme }) => theme.subtitle};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

export const DivAdressAndMethodsPayment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivTitleCoffeeAndInformationsCoffe = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 2rem;
`;

export const TitleCoffees = styled.h2`
  margin-bottom: 1rem;

  font-family: "Baloo 2", cursive;
  font-size: 1.25rem;
  font-weight: 900;

  color: ${({ theme }) => theme.subtitle};
`;

export const DivInformationsCoffeeInCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${({ theme }) => theme.card};
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;

  padding: 2rem;

  div:first-child {
    display: flex;
    flex-direction: row;

  }
`;

export const TextNoCoffee = styled.p`
  display: flex;
  
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 900;

  color: ${({ theme }) => theme.subtitle};

  margin-left: 3.5rem;
  margin-bottom: 2rem;

`;

export const DivInformationsOrder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivTotalItems = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.75rem;

  span:first-child {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;

    color: ${({ theme }) => theme.text};
  }

  span:last-child {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    color: ${({ theme }) => theme.text};

    margin-left: 10rem;
  }
`;

export const DivFreight = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.75rem;

  span:first-child {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;

    color: ${({ theme }) => theme.text};
  }

  span:last-child {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    color: ${({ theme }) => theme.text};

    margin-left: 13.3rem;
  }
`;

export const DivTotal = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.25rem;

  strong:first-child {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    color: ${({ theme }) => theme.text};
  }

  strong:last-child {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    color: ${({ theme }) => theme.text};

    margin-left: 12.3rem;
  }
`;

export const ButtonConfirmOrder = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};

  border: none;
  border-radius: 4px;

  padding: 0.75rem 1rem;
  width: 19rem;

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;

  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
