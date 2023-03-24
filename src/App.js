import React, { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import styles from "./App.module.css";
import NameList from "./components/NameList/NameList";
import Modal from "./components/Modal/Modal";
function App() {
	const [itemArray, setItemArray] = useState([]);
	const [inputObject, setInputObject] = useState({});
	const [showModal, setShowModal] = useState(false);
	const handleListData = (listItem) => {
		if (listItem.username !== "" && listItem.age !== "" && listItem.age > 0) {
			setItemArray((prevExpenses) => {
				return [listItem, ...prevExpenses];
			});
		}
	};

	const handleInputData = (inputData) => {
		setInputObject(inputData);
	};

	// showModal needs to be triggered to true

	const nonNegativeMessage =
		"Please enter a valid name and age (non-empty values)";
	const greaterThanZeroMessage = `Please enter a valid age (> 0)`;
	let modalContent = null;
	if (inputObject.username === "" || inputObject.age === "") {
		modalContent = <Modal message={nonNegativeMessage}></Modal>;
	}
	if (inputObject.age < 0) {
		modalContent = <Modal message={greaterThanZeroMessage}></Modal>;
	}

	return (
		<div className={styles.wrapper}>
			<InputForm onSaveArray={handleListData} inputData={handleInputData} />
			{modalContent}

			<NameList passedArray={itemArray}></NameList>
		</div>
	);
}

export default App;
