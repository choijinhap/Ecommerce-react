import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shoppage.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInPage from './pages/sign-in/sign-inpage.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}></Header>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SignInPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
