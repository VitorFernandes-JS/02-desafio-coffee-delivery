import styled from "styled-components";

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  margin-top: 3.5rem;

  width: 16rem;
  height: 19.5rem;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;

  background-color: ${(props) => props.theme.card};
`;

export const Image = styled.img`
    width: 7.5rem;
    height: 7.5rem;
`;

export const Category = styled.span``;

export const Title = styled.h1``;

export const Description = styled.span``;

export const Value = styled.span``;

export const ButtonAddOrRemove = styled.button``;

export const ButtonToCart = styled.button``;
