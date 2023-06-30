import { ChangeEvent, useRef, useState } from "react";
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
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const selectedFile = event.target.files?.[0];
        }}
        ref={fileInputRef}
        type="file"
        className={styles.inputFile}
      />
    </>
  );
};

export default InputFile;
