import { ChangeEvent, useRef } from "react";
import styles from "./InputFile.module.scss";

const InputFile = () => {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const onClickHandler = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};
	return (
		<>
			<button onClick={onClickHandler} className={`${styles.button}`}>
				Select from computer
			</button>
			<input
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					const selectedFile = e.target.files?.[0];
					console.log(selectedFile);
				}}
				ref={fileInputRef}
				type="file"
				style={{ display: "none" }}
			/>
		</>
	);
};

export default InputFile;
