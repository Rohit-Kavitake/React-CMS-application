import { React, useEffect, useState } from "react";
import firebase from 'firebase'
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import { Row, Col } from "antd";


function Dashboard({ user }) {
	const userEmail = user.email;
	const [Docsize, setDocsize] = useState();
	const getData = async () => {
		console.log(userEmail);
		db.collection(String(userEmail))
			.get()
			.then((querySnapshot) => {
                setDocsize(querySnapshot.size)
			});
	};

	useEffect(() => {
        getData();
        console.log(Docsize)
	}, [getData]);

	if (user === "Anonymous") {
		return (
			<div className="container">
				<h1 className="text-center">Please Login to Continue</h1>
				<Link to="/">Click Here</Link>
			</div>
		);
	}
	return (
		<div className="container">
			<h1 className="text-center m-1">Welcome {user.displayName}</h1>
			<div >
				<Row gutter={[16, 16]}>
					<Col
						xs={24}
						sm={12}
						lg={6}
						xl={4}
						className="mr-2 ml-5 p-5 border border-success rounded"
					>
						<img
							className="img-fluid m-2"
							src="https://www.flaticon.com/premium-icon/icons/svg/55/559416.svg"
							alt="notify"
						/>
						<h4 className="text-center">Total News</h4>
						<h2 className="text-center">{Docsize}</h2>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Dashboard;
