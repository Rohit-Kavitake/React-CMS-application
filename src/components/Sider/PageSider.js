import { React, useState,useEffect } from "react";
import { Layout, Menu } from "antd";
import {
	MessageTwoTone,
	HomeTwoTone,
	InfoCircleTwoTone,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { oauth } from "../../Firebase"

const { Sider } = Layout;

function PageSider() {
	const [collapsed, setCollapsed] = useState(false);

	const signOut = () => {
		// User Google Signout
		oauth.signOut();
	};

	return (
		<Sider
			collapsedWidth="60"
			collapsible
			collapsed={collapsed}
			onCollapse={() => setCollapsed(!collapsed)}
		>
			<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
				<Menu.Item key="1" icon={<HomeTwoTone />}>
					<Link to="/dashboard">Dashboard</Link>
				</Menu.Item>
				<Menu.Item key="2" icon={<MessageTwoTone />}>
					<Link to="/news">News</Link>
				</Menu.Item>
				<Menu.Item
					key="3"
					icon={<InfoCircleTwoTone />}
					onClick={() => signOut()}
				>
					<Link to="/">Logout</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
}

export default PageSider;