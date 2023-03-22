import React from "react";
import styles from "./NameItem.module.css";

const NameItem = (props) => {
	return (
		<li
			className={styles.item}
		>{`${props.userName} ${props.age} years old`}</li>
	);
};

export default NameItem;
