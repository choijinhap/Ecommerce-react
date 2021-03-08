import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sigin-inpage.style.scss';

const SignInPage = () => (
	<div className='sign-inpage'>
		<SignIn />
		<SignUp />
	</div>
);

export default SignInPage;
