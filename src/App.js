import React, { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import styles from "./App.module.css";
import NameList from "./components/NameList/NameList";
import Modal from "./components/Modal/Modal";
function App() {
	const [itemArray, setItemArray] = useState([]);
	const [inputObject, setInputObject] = useState({});
	const [openModal, setOpenModal] = useState(true);
	const handleListData = (listItem) => {
		if (listItem.username !== "" && listItem.age !== "" && listItem.age > 0) {
			setItemArray((prevExpenses) => {
				return [listItem, ...prevExpenses];
			});
		}
	}; // dzieki tej instrukcji warunkowej nie doda sie kolejny item

	// jak przepisac

	const handleInputData = (inputData) => {
		setInputObject(inputData);
		setOpenModal(true);
	};

	const nonNegativeMessage =
		"Please enter a valid name and age (non-empty values)";
	const greaterThanZeroMessage = `Please enter a valid age (> 0)`;
	let modalContent = null;

	// Tomkowski -5
	if (inputObject.username === "" && inputObject.age === "") {
		modalContent = (
			<Modal
				open={openModal}
				onClose={() => {
					setOpenModal(false);
				}}
				message="Enter valid name and username"
			></Modal>
		);
	} else if (inputObject.username !== "" && inputObject.age === "") {
		modalContent = (
			<Modal
				open={openModal}
				onClose={() => {
					setOpenModal(false);
				}}
				message="Enter valid age"
			></Modal>
		);
	} else if (inputObject.username === "" && inputObject.age !== "") {
		modalContent = (
			<Modal
				open={openModal}
				onClose={() => {
					setOpenModal(false);
				}}
				message="Enter valid username"
			></Modal>
		);
	} else if (inputObject.username !== "" && inputObject.age <= 0) {
		modalContent = (
			<Modal
				open={openModal}
				onClose={() => {
					setOpenModal(false);
				}}
				message="Age must be non-negative"
			></Modal>
		);
	}

	return (
		<div className={styles.wrapper}>
			<InputForm onSaveArray={handleListData} inputData={handleInputData} />
			{modalContent}
			<NameList passedArray={itemArray}></NameList>
		</div>
	);
}
// if I enter negative age, two messages appear

export default App;

// co ja po kolei klikam, wpisuje dane do formularza, modal sie wyswietla
// zamykam modal, wtedy openModal jest false
