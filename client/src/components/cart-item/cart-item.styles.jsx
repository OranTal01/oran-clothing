import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  justify-content: center;
`;

export const CartItemImage = styled.img`
    width: 60px;
    height: 80px;
`;

export const ItemDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;

export const QuantityContainer = styled.span`
width: 30%;
display: flex;
justify-content: center;
  span {
    margin: 0 10px;
  }

  div{
    cursor: pointer;
  }

`;

export const RemoveButtonContainer = styled.span`
width: 30%;
  cursor: pointer;
`;

export const TextContainer = styled.span`
width: 30%;

  @media screen and (max-width: 800px) {
    
  }
`;
