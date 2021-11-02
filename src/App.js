import './App.css';
import AppHeader from './components/AppHeader';
import ListView from './components/ListView';
import NewItemView from './components/NewItemView';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import useLocalStorage from '../src/useLocalStorage';
import {useEffect } from 'react'

function App() {

	const [data, setData] = useLocalStorage('superHeros', [
		{
			id: Math.random().toString(36).substr(2, 9),
			name: 'Superman',
			creator: 'DC Comics',
			url: 'https://www.dccomics.com/',
		},
	]);

  useEffect(() => {
	  
	}, [data]);



return (
	<div className="App">
		<header>
			<AppHeader />
		</header>

		<Switch>
			<Route exact path="/">
				<ListView data={data} setData={setData} />
			</Route>
			<Route path="/addnewitem">
				<NewItemView setData={setData} data={data} />
			</Route>
		</Switch>
	</div>
);
}

export default App;
