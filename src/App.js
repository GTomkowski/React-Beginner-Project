import React, { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import styles from "./App.module.css";
import NameList from "./components/NameList/NameList";
import Modal from "./components/Modal/Modal";
function App() {
	const [itemArray, setItemArray] = useState([]);
	const [inputObject, setInputObject] = useState({});
	const [isClicked, setIsClicked] = useState(false);

	const handleListData = (listItem) => {
		setItemArray((prevExpenses) => {
			return [listItem, ...prevExpenses];
		});
	};

	const handleInputData = (inputData) => {
		setInputObject(inputData);
	};

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
			{modalContent === null && <NameList passedArray={itemArray}></NameList>}
		</div>
	);
}

export default App;

// teraz jeszcze tylko zostalo mi zamkniecie formularza
