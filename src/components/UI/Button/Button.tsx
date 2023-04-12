import { ChangeEvent, useRef } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	text: string;
	btnLight?: string;
}

const Button = ({ text, btnLight }: ButtonProps) => {
	return (
		<>
			<button className={`${styles.button} ${btnLight}`}>{text}</button>
		</>
	);
};

export default Button;
