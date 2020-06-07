import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer
} from './cart-item.styles';

const CartItem = ({ item, clearItem, addItem, removeItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
          <div onClick={() => removeItem(item)}>&#10094;</div>
          <span>{quantity}</span>
          <div onClick={() => addItem(item)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>
          ${price}
        </TextContainer>
        <RemoveButtonContainer onClick={() => clearItem(item)}>
          &#10005;
        </RemoveButtonContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);