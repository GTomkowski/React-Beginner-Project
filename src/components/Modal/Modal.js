import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
	if (!props.open) return null; // jesli false, to modal sie nie wyswietli
	return (
		<div>
			<div className={styles.overlay} onClick={props.onClose}></div>
			<div className={styles.modal}>
				<div className={styles["modal__header"]}>
					<h2 className={styles["modal__title"]}>Invalid Input</h2>
				</div>
				<div className={styles["modal__body"]}>
					<p className={styles["modal__text"]}>{props.message}</p>
					<button onClick={props.onClose} className={styles["modal__button"]}>
						okay
					</button>
				</div>
			</div>
		</div>
	);
};
// nasluchuje na onclose

// i can move state from modal to app and then depending on that state I can conditionally render a modal
export default Modal;
