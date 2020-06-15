import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 410px) {
    width: 350px;
  }
  @media screen and (max-width: 390px) {
    width: 330px;
  }
  @media screen and (max-width: 350px) {
    width: 300px;
  }

  @media screen and (max-width: 320px) {
    width: 280px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 410px) {
    display: flex;
    flex-direction: column
  }
`;
