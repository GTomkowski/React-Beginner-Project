import React from "react";
import styles from "./NameList.module.css";
import NameItem from "./NameItem";

const NameList = (props) => {
	// podczas klikniecia przycisku submit przekazywane sa dwa itemy naraz, powinien wyswietlac sie jeden
	let itemContent = null;

	if (props.passedArray.length > 0) {
		itemContent = props.passedArray.map((item) => {
			return (
				<NameItem
					userName={item.username}
					age={item.age}
					key={item.key}
				></NameItem>
			);
		});
	}
	return (
		<div className={styles.list}>
			<ul className={styles["form-control"]}>{itemContent}</ul>
		</div>
	);
};

//

// chce zeby namelist przejal styl ktory znajduje sie w input formie

export default NameList;
