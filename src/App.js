import './App.css';
import AppHeader from './components/AppHeader';
import ListView from './components/ListView';
import NewItemView from './components/NewItemView';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<header>
				<AppHeader />
			</header>

			<Switch>
        <Route exact path="/">
	       <ListView />
          </Route>
				<Route path="/addnewitem">
					<NewItemView />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
