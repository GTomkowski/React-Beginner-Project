import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
	// nawet jak zmienimy wartosc z powrotem na null, 

	return (
		<div className={styles.modal}>
			<div className={styles["modal__header"]}>
				<h2 className={styles["modal__title"]}>Invalid Input</h2>
			</div>
			<div className={styles["modal__body"]}>
				<p className={styles["modal__text"]}>{props.message}</p>
				<button className={styles["modal__button"]}>okay</button>
			</div>
		</div>
	);
};

export default Modal;


