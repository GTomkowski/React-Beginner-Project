import React from "react";
import styles from "./NameItem.module.css";

const NameItem = (props) => {
	return (
		<li
			className={styles.item}
		>{`${props.username} ${props.age} years old`}</li>
	);
};

export default NameItem;
