import { React, useEffect,  useState } from "react";
import {  db, storage } from "../../Firebase";
import { Form, Input, Col, Row, Select, Button } from "antd";
import {  message } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import "./new.css";
import DropzoneComponent from "./Dropzone";
const { Option } = Select;
// const { TextArea } = Input;

function News({ user }) {

	const [newsHeader, setnewsHeader] = useState("");
	const [newsCategory, setNewsCategory] = useState("not specified");
	const [newsBrief, setNewsBrief] = useState("");
	const [Description, setDescription] = useState("");
	const [ImageUrl, setImageUrl] = useState("");
	const [FileUrl, setFileUrl] = useState("");
	const [File, setFile] = useState()
	const [image, setimage] = useState()

	const onformSubmit = () => {
		db.collection(String(user)).add({
			Desc: Description,
			brief: newsBrief,
			fileurl: FileUrl,
			imgurl: ImageUrl,
			newsCategory: newsCategory,
			newsTitle : newsHeader
		}).then(() => {
			console.log("successfull")
		})
	}

	const onImageChange = async (e) => {
		const file = e[0];
		const storageRef = storage.ref();
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		setImageUrl(await fileRef.getDownloadURL());
		await console.log(FileUrl);
		if (ImageUrl !== "") {
			message.success("file uploading...");
		}
	};
	const onFileChange = async (e) => {
		const file = e[0];
		const storageRef = storage.ref();
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		setFileUrl(await fileRef.getDownloadURL());
		if (FileUrl !== "") {
			message.success("file uploading");
		}
		await console.log(FileUrl);
	};
	useEffect(() => {
		if (image)  onImageChange(image);

	}, [image])
	useEffect(() => {
		if (File)  onFileChange(File);

	}, [File])

	return (
		<Form className="m-2 ">
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
							/>
						</Col>
						<Col span={8} xs={24} sm={16} lg={8} xl={8}>
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
					<Row gutter={[24, 24]} className="mb-2">
						<Col span={19} xs={24} sm={16} lg={19} xl={19}>
							<Input
								defaultValue={newsBrief}
								placeholder="Brief Description"
								onChange={(e) => setNewsBrief(e.target.value)}
							/>
						</Col>
					</Row>
					<Row gutter={[16, 16]} className="mb-2">
						<Col xs={24} sm={24} lg={12} xl={12}>
							<Row className="m-2">
								{/* <label>Upload Image</label> */}
								<DropzoneComponent
									file={setimage}
									filetype="image/*"
									filelabel="Image "
								></DropzoneComponent>
							</Row>
							<Row className="m-2">
								{/* <label>Upload Pdf</label> */}

								<DropzoneComponent
									file={setFile}
									filetype="application/pdf"
									filelabel="Pdf File"
								></DropzoneComponent>
							</Row>
						</Col>
						<Col xs={24} sm={12} lg={12} xl={12}>
							<Row className="m-3">
								{/* <label>Description</label> */}
								<Editor
									apiKey="32ol4u0idlw2jop5zyaaywgcjwwvm5h3ro1okg0dvomwafgv"
									outputFormat="text"
									onEditorChange={(newText) => setDescription(newText)}
									init={{
										height: 400,
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
							</Row>
							<Row >
								<p>Please Wait for files to be uploaded before sumitting form, veiw Console for more Details</p>
									<Button type="primary" className="allign-center m-3" onClick={()=> onformSubmit()}>Submit</Button>
							</Row>
						</Col>
					</Row>
				</Input.Group>
			</div>
		</Form>
	);
}

export default News;
