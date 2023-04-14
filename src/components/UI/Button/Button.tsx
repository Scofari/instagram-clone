import { IconType } from "react-icons/lib";
import styles from "./Button.module.scss";

interface ButtonProps {
	text: string;
	btnLarge?: boolean;
	variant?: "primary" | "secondary";
	icon?: IconType;
}

const Button = ({
	text,
	variant = "secondary",
	btnLarge,
	icon: Icon,
}: ButtonProps) => {
	return (
		<>
			<button
				className={`${styles.button} ${
					variant === "secondary" ? styles.btnLight : ""
				} ${btnLarge && styles.btnLarge}`}
			>
				{text}
				{Icon && <Icon className={styles.icon} />}
			</button>
		</>
	);
};

export default Button;
