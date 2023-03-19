import React from "react";
import styles from "./InputForm.module.css";
import Button from "./Button";
const InputForm = () => {
	return (
		<form className={styles.form}>
			<div className={styles["form-controls"]}>
				<div className={styles["form-control"]}>
					<label className={styles["form-control__label"]}>Username</label>
					<input className={styles["form-control__input"]} type="text" />
				</div>
			</div>

			<div className={styles["form-control"]}>
				<label className={styles["form-control__label"]}>Age (Years)</label>
				<input
					className={styles["form-control__input"]}
					type="number"
					step="1"
					max="99"
				/>
			</div>
			<Button></Button>
		</form>
	);
};

export default InputForm;
