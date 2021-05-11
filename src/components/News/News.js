import { React, useEffect, useLayoutEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import { Form, Input, Col, Row, Select,Layout } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import './new.css'
const { Option } = Select;
const { TextArea } = Input;

function News({ user }) {
	const collectionName = user;
	const [newsHeader, setnewsHeader] = useState("");
	const [newsCategory, setNewsCategory] = useState("not specified");
	const [newsBrief, setNewsBrief] = useState("");
	const [Description, setDescription] = useState("");
	const [ImageUrl, setImageUrl] = useState("");
	const [FileUrl, setFileUrl] = useState("");

	return (
		<Form className="m-2 border border-success rounded">
			<div className="m-2 mt-1">
				<h2 className="text-center mt-2">Add News</h2>
				<hr></hr>
				<Input.Group>
					<Row gutter={[16, 16]} className="mb-2">
						<Col span={16} xs={24} sm={16} lg={16} xl={16}>
							<Input
								defaultValue={newsHeader}
								placeholder="News Header"
								onChange={(e) => setnewsHeader(e.target.value)}
							/>{" "}
						</Col>
						<Col span={8}>
							<Select
								placeholder="Select News Category"
								onChange={(value) => setNewsCategory(value)}
								size="middle"
							>
								<Option value="Criminal news">Criminal News</Option>
								<Option value="Sports news">Sports News</Option>
								<Option value="Arts news">Arts News</Option>
								<Option value="Political news">Political News</Option>
							</Select>
						</Col>
					</Row>
					<Row gutter={[24, 24]}>
						<Col span={18}>
							<Input
								defaultValue={newsBrief}
								placeholder="Brief Description"
								onChange={(e) => setNewsBrief(e.target.value)}
							/>
						</Col>
						<Col >
							<Editor
								apiKey="32ol4u0idlw2jop5zyaaywgcjwwvm5h3ro1okg0dvomwafgv"
								outputFormat="text"
								onEditorChange={(newText) => setDescription(newText)}
								init={{
									height: 300,
									menubar: false,
									content_style:
										"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
									plugins: [
										"advlist autolink lists link image charmap print preview anchor",
										"searchreplace visualblocks code fullscreen",
										"insertdatetime table paste code help wordcount",
									],
								}}
							/>
						</Col>
					</Row>
				</Input.Group>
			</div>
		</Form>
	);
}

export default News;
