import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  width: 355px;
  text-align: center;

  @media screen and (max-width: 410px) {
    right: 10px;
  }
  @media screen and (max-width: 380px) {
    width: 330px;
  }
  @media screen and (max-width: 340px) {
    width: 300px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
  outline: none;
`;

CartDropdownButton.displayName = 'CartDropdownButton';

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

EmptyMessageContainer.displayName = 'EmptyMessageContainer';

export const CartItemsContainer = styled.div`
  height: 240px;
  display: block;
  overflow: scroll;
  width: 350px;

  @media screen and (max-width: 410px) {
    right: 10px;
  }
  @media screen and (max-width: 380px) {
    width: 320px;
  }
  @media screen and (max-width: 340px) {
    width: 290px;
  }
`;
