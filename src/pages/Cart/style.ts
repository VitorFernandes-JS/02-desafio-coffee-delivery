import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 10rem;

  h2:first-child {
    margin-bottom: 1rem;

    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: 900;

    color: ${({ theme }) => theme.subtitle};
  }
`;

export const BodyAddress = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 6px;

  margin-bottom: 0.85rem;
  padding: 2.5rem;

  width: 70%;

  div:first-child {
    display: flex;
    flex-direction: row;
  }
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
