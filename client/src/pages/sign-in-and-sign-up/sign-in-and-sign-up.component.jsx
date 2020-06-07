import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { selectErrorCurrentUser } from '../../redux/user/user.selectors';

import { SignInAndSignUpContainer, Error } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = ({ error }) => (
  <div>
    <Error>{error && error.message}</Error>
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  </div>
);

const mapStateToProps = createStructuredSelector({
  error: selectErrorCurrentUser
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
