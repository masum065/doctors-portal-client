import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointment from './Components/Appointment/Appintment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Switch>
					<Route path='/home'>
						<Home />
					</Route>
					<Route path='/appointment'>
						<Appointment />
					</Route>
					<Route path='/dashboard/appointments'>
						<Dashboard />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
