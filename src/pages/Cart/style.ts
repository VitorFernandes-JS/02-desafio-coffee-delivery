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

export const DivAdressAndMethodsPayment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyAddress = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 6px;
  width: 40rem;

  margin-bottom: 0.85rem;
  padding: 2.5rem;

  div:first-child {
    display: flex;
    flex-direction: row;
  }
`;

export const TitleCoffees = styled.h2`
  margin-bottom: 1rem;

  font-family: "Baloo 2", cursive;
  font-size: 1.25rem;
  font-weight: 900;

  color: ${({ theme }) => theme.subtitle};
`;

export const DivMapAndText = styled.div`
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

const InputBase = styled.input`
  background-color: ${({ theme }) => theme.input};
  border-radius: 4px;

  padding: 0.5rem 1rem;

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;

  color: ${({ theme }) => theme.text};

  border: 1px solid ${({ theme }) => theme.button};
  margin-bottom: 1rem;
  margin-left: 0.85rem;
`;

export const InputCEP = styled(InputBase)`
  width: 30%;
`;

export const InputStreet = styled(InputBase)`
  width: 64%;
`;

export const InputNumber = styled(InputBase)`
  width: 20%;
`;

export const InputComplement = styled(InputBase)`
  width: 74%;
`;

export const InputDistrict = styled(InputBase)`
  width: 28%;
`;

export const InputCity = styled(InputBase)`
  width: 54%;
`;

export const InputState = styled(InputBase)`
  width: 9.5%;
  text-align: center;
`;

export const DivTitleCoffeeAndInformationsCoffe = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 2rem;
`;

export const DivInformationsCoffeeInCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${({ theme }) => theme.card};
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;

  padding: 2rem;
`;

export const DivInformationsOrder = styled.div`
  display: flex;
`
