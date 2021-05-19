//import your dependencies & components
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import EditFriend from "./components/EditFriend";
import DeleteFriend from "./components/DeleteFriend";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";

import PrivateRoute from "./components/PrivateRoute";
function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<PrivateRoute exact path="/add-friend" component={AddFriend} />
					<PrivateRoute exact path="/edit-friend/:id" component={EditFriend} />
					<PrivateRoute exact path="/delete-friend" component={DeleteFriend} />
					<PrivateRoute exact path="/protected" component={FriendsList} />
					<Route path="/login" component={Login} />
					<Route component={Login} />{" "}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
