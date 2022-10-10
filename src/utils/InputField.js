import React from "react";
import styles from "./InputField.module.css";

function InputField({ inputHandler, placeholder }) {
  return (
    <React.Fragment>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => {
          inputHandler(e.target.value);
        }}
        placeholder="Enter your Name"
        required
      />
    </React.Fragment>
  );
}

export default InputField;
