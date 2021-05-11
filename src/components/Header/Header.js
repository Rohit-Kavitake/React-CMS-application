import { React} from "react";
import { Layout} from "antd";

const { Header} = Layout;

function TopHeader() {
	return (
		<div>
			<Header className="site-layout-background" style={{ padding: 0 }}>
				<h2 style={{ color: "White", paddingLeft: "1.5rem" }}>MaQueen</h2>
			</Header>
		</div>
	);
}

export default TopHeader;
