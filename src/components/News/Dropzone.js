import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "100px",
	borderWidth: 2,
	borderRadius: 2,
	borderColor: "#eeeeee",
	borderStyle: "dashed",
	backgroundColor: "#fafafa",
	color: "#bdbdbd",
	transition: "border .3s ease-in-out",
};

const activeStyle = {
	borderColor: "#2196f3",
};

const acceptStyle = {
	borderColor: "#00e676",
};

const rejectStyle = {
	borderColor: "#ff1744",
};

function DropzoneComponent(props) {
	const onDrop = useCallback((acceptedFiles) => {
		console.log(acceptedFiles);
		props.file(acceptedFiles)
	}, []);

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		onDrop,
		accept: props.filetype,
	});

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isDragActive, isDragReject, isDragAccept]
	);

	return (
		<div {...getRootProps({ style })} className="m-3">
			<input {...getInputProps()} />
			<div>Drag and drop your {props.filelabel } here.</div>
		</div>
	);
}

export default DropzoneComponent;