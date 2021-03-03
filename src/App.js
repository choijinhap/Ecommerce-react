import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shoppage.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInPage from './pages/sign-in/sign-inpage.component.jsx';
function App() {
	return (
		<div>
			<Header></Header>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/signin' component={SignInPage} />
			</Switch>
		</div>
	);
}

export default App;
