import React from 'react';
import './sign.styles.scss';
import SignIn from './../SignIn/sign-in.component';
import SignUp from './../sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage