import { Button, Table } from "antd";
import React, { useState, useEffect } from "react";
import { db } from "../../Firebase";
import { Link } from "react-router-dom";

function Shownews({ user }) {
	const [Data, setData] = useState("");
	const [Desc, setDesc] = useState("");
	const [newsData, setnewsData] = useState([]);

	const columns = [
		{
			title: "News",
			dataIndex: "title",
			key: "title",
			render: (text) => <a>{text}</a>,
		},
		{
			title: "Description",
			dataIndex: "desc",
			key: "desc",
		},
	];

	const getData = () => {
		db.collection(String(user))
			.get()
			.then((snap) => {
				if (snap.empty) setData("Please add News");
				snap.forEach((doc) => {
					setData(doc.data().newsTitle);
					setDesc(doc.data().Desc);
                    setnewsData(
                        newsData.push({
                            title: Data,
                            desc: Desc,
                        })
                    );
				});
			});
		console.log(newsData);
	};

	useEffect(() => {
		getData();
	}, []);

	if (newsData === []) {
		return (
			<div>
				<h1> There is No news </h1>
				<Link to="/addnews">
					<Button type="primary" className="m-5 text-center">
						Add news
					</Button>
				</Link>
			</div>
		);
	}
	return (
		<div>
			<Link to="/addnews">
				<Button type="primary">Add news</Button>
			</Link>
			<Table columns={columns} dataSource={newsData} />
		</div>
	);
}

export default Shownews;
