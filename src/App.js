import { React, useEffect, useState } from "react";
import TopHeader from "./components/Header/Header";
import BottomFooter from "./components/Footer/Footer";
import PageSider from "./components/Sider/PageSider";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/Dashboard";
import News from "./components/News/News";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { oauth } from "./Firebase";
import Shownews from "./components/Shownews/Shownews";

const { Content } = Layout;

function App() {
	const [username, setUserName] = useState("Anonymous");
	const [user, setUser] = useState({});
	const initFirebaseAuth = () => {
		oauth.onAuthStateChanged(authStateObserver);
	};

	const authStateObserver = async (user) => {
		if (user) {
			setUser(user);
			setUserName(user.displayName);
			// console.log(user);
			console.log("User Logged in");
			// history.push("/dashboard");
		} else {
			console.log("user Logged Out");
		}
	};

	useEffect(() => {
		authStateObserver();
		initFirebaseAuth();
	}, [oauth.onAuthStateChanged]);
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Layout style={{ minHeight: "100vh" }}>
						<TopHeader
							className="site-layout-background"
							style={{ padding: 0 }}
							user={username}
						/>
						<Layout className="site-layout">
							<PageSider />
							<Content>
								<Route path="/dashboard">
									<Dashboard user={user} username={user.displayName} />
								</Route>
								<Route path="/news">
									<Shownews user={user.email} />
								</Route>
								<Route path="/addnews">
									<News user={user.email} />
								</Route>
							</Content>
						</Layout>
					</Layout>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
