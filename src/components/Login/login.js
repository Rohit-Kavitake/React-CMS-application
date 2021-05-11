import { React } from "react";
import { Form, Input, Button } from "antd";
import { oauth } from "../../Firebase";
import firebase from "firebase";
import { useHistory } from "react-router";

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 8 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values) => {
	console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

function Login() {
	let history = useHistory();
	const signIn = async () => {
		// User Google SignIn
		await oauth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
		let provider = new firebase.auth.GoogleAuthProvider();
		oauth.signInWithPopup(provider).then((auth) => {
			console.log(auth);
			history.push("/dashboard");
		});
	};

	return (
		<>
			<div className="container  ">
				<div className=" col-sm-12 col-lg-12  col-md-12 mt-4 border border-primary rounded">
					<h2 className="text-center allign-middle">Login</h2>
					<hr></hr>
					<Form
						{...layout}
						name="basic"
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							label="Email"
							name="username"
							rules={[{ required: true, message: "Please input your Email!" }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{ required: true, message: "Please input your password!" },
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item {...tailLayout}>
							<Button type="primary" htmlType="submit">
								Login
							</Button>
							<a
								className="m-4 justified-content-center"
								htmlType="button"
								onClick={() => {
									signIn();
								}}
							>
								<img src="https://img.icons8.com/plasticine/48/000000/google-logo.png" />
							</a>
						</Form.Item>
						{/* <Form.Item {...tailLayout}></Form.Item> */}
					</Form>
					<p className="text-center">
						*Currently signin with google is implemented
					</p>
				</div>
			</div>
		</>
	);
}

export default Login;
