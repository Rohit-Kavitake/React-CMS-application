import React from "react";
// import firebase from 'firebase'
import { Link } from "react-router-dom"

function Dashboard({user}) {


    console.log(user)
        if (user==="Anonymous" ) {
            return (<div className="container">
                <h1 className="text-center">Please Login to Continue</h1>
            <Link to="/">Click Here</Link>
            </div>)
    }
    return (
			<div className="container">

				<h1 className="text-center m-2">Welcome {user}</h1>
			</div>
		);
}

export default Dashboard;
