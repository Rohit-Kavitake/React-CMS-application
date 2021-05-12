import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import { Row, Col } from "antd";


function Dashboard({ user, username }) {
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

	if (username) {
		return (
			<div className="container text-center">
				<h1 className="text-center ">Welcome {user.displayName}</h1>
				<div>
					<Row gutter={[16, 16]}>
						<Col
							xs={24}
							sm={12}
							lg={6}
							xl={4}
							className="border border-success rounded"
						>
							<img
								className="img-fluid "
								src="https://www.flaticon.com/svg/vstatic/svg/564/564619.svg?token=exp=1620834540~hmac=1e6846e28da76def06506eda1c25de53"
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
	return (
		<div className="container">
			<h1 className="text-center">
				Please Login to Continue <Link to="/">Click Here</Link>
			</h1>
		</div>
	);
}

export default Dashboard;
