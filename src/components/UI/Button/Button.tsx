import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    icon?: IconType;
}

const Button = ({
    children,
    variant = "secondary",
    size = "small",
    icon: Icon,
    ...props
}: ButtonProps) => {
    return (
        <>
            <button
                className={`${styles.button} ${
                    variant === "secondary" ? styles.btnLight : ""
                } ${size === "medium" && styles.btnMedium} ${
                    size === "large" && styles.btnLarge
                }`}
                {...props}
            >
                {children}
                {Icon && <Icon className={styles.icon} />}
            </button>
        </>
    );
};

export default Button;
