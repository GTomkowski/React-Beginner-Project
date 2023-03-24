import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
	const [modal, setModal] = useState(true);
	const clickHandler = () => {
		setModal(!modal);
	};
	return (
		<div>
			{modal && (
				<div>
					<div className={styles.overlay}></div>
					<div className={styles.modal}>
						<div className={styles["modal__header"]}>
							<h2 className={styles["modal__title"]}>Invalid Input</h2>
						</div>
						<div className={styles["modal__body"]}>
							<p className={styles["modal__text"]}>{props.message}</p>
							<button
								onClick={clickHandler}
								className={styles["modal__button"]}
							>
								okay
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
// upon clicking on the button I want to disable the component somewhere else

// i can move state from modal to app and then depending on that state I can conditionally render a modal
export default Modal;
