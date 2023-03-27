import React, { useState } from "react";
import styles from "./InputForm.module.css";
import Button from "./Button";
const InputForm = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setAge] = useState("");

	const handleUsernameChange = (event) => {
		setEnteredUsername(event.target.value);
	};
	const handleAgeChange = (event) => {
		setAge(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const listData = {
			username: enteredUsername,
			age: enteredAge,
			key: Math.random().toString(),
		};

		props.onSaveArray(listData);
		props.inputData(listData);
		setEnteredUsername("");
		setAge("");
	};

	return (
		<form onSubmit={formSubmitHandler} className={styles.form}>
			<div className={styles["form-controls"]}>
				<div className={styles["form-control"]}>
					<label className={styles["form-control__label"]}>Username</label>
					<input
						onChange={handleUsernameChange}
						className={styles["form-control__input"]}
						type="text"
						value={enteredUsername}
					/>
				</div>
			</div>

			<div className={styles["form-control"]}>
				<label className={styles["form-control__label"]}>Age (Years)</label>
				<input
					onChange={handleAgeChange}
					className={styles["form-control__input"]}
					type="number"
					step="1"
					max="99"
					value={enteredAge}
				/>
			</div>
			<Button ></Button>
		</form>
	);
};

export default InputForm;
