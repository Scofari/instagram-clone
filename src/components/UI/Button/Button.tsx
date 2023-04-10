import { ChangeEvent, useEffect, useRef } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    btnLight?: string;
}

const Button = ({ text, btnLight }: ButtonProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onClickHandler = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <button
                onClick={onClickHandler}
                className={`${styles.button} ${btnLight}`}
            >
                {text}
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

export default Button;
// import styles from "./Button.module.scss";

// interface ButtonProps {
// 	text: string;
// 	btnLight?: string;
// }

// const Button = ({ text, btnLight }: ButtonProps) => {
// 	return <button className={`${styles.button} ${btnLight}`}>{text}</button>;
// };

// export default Button;
