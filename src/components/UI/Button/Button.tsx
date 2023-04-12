import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    variant?: "primary" | "secondary";
}

const Button = ({ text, variant = "secondary" }: ButtonProps) => {
    return (
        <>
            <button
                className={`${styles.button} ${
                    variant === "secondary" ? styles.btnLight : ""
                }`}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
