import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './auth-page.styles.scss';

const AuthPage = () => (
  <div className="auth-page">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthPage;
