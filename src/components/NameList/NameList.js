import React from "react";
import styles from "./NameList.module.css";
import NameItem from "./NameItem";

const NameList = (props) => {
	return (
		<div className={styles.list}>
			<ul className={styles['form-control']}>
				<NameItem></NameItem>
				<NameItem></NameItem>
				<NameItem></NameItem>
				<NameItem></NameItem>
				<NameItem></NameItem>
			</ul>
		</div>
	);
};

//

// chce zeby namelist przejal styl ktory znajduje sie w input formie

export default NameList;
