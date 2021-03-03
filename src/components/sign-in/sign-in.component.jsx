import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};
	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an acount</h2>
				<span>Sign in with your email</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						label='email'
						value={this.state.email}
						onChange={this.handleChange}
						type='email'
						required
					/>
					<FormInput
						name='password'
						label='password'
						value={this.state.password}
						onChange={this.handleChange}
						type='password'
						required
					/>
					<CustomButton type='submit'>Sign In</CustomButton>
				</form>
			</div>
		);
	}
}
export default SignIn;
