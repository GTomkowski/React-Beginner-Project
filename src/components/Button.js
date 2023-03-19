import React from "react";
import styles from "./Button.module.css";

const Button = () => {
	return (
		<button type="submit" className={styles.button}>
			Add User
		</button>
	);
};

export default Button;
