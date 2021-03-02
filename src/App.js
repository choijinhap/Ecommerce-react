import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
	<div>
		<h1>hats page</h1>
	</div>
);
function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
