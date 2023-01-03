import styled from "styled-components";

export const DivPaymentMethods = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 6px;

  padding: 2rem 2.5rem;
  width: 60%;

  div:first-child {
    display: flex;
    flex-direction: row;
  }
`;

export const DivDollarAndText = styled.div`
  margin-bottom: 2rem;

  h4 {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 600;

    color: ${({ theme }) => theme.subtitle};

    margin-bottom: 0.3rem;
    margin-left: 0.5rem;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;

    margin-left: 0.5rem;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
  }
`;

export const DivButtonsPaymentMethodCredit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text};
  }
`;

const ButtonPaymentMethodsBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.button};
  border: none;
  border-radius: 6px;

  padding: 1rem 1.2rem;
  margin-right: 1rem;
  gap: 0.5rem;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        background-color: ${({ theme }) => theme.purpleLight};
    }

`;

export const ButtonPaymentMethodCredit = styled(ButtonPaymentMethodsBase)``;

export const ButtonPaymentMethodDebit = styled(ButtonPaymentMethodsBase)``;

export const ButtonPaymentMethodMoney = styled(ButtonPaymentMethodsBase)``;
