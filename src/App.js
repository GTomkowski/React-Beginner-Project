import React, { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import styles from "./App.module.css";
import NameList from "./components/NameList/NameList";
import Modal from "./components/Modal/Modal";
function App() {
	const [itemArray, setItemArray] = useState([]);
	// przekazemy z input form do "gory" tablice obiektow, nastepnie jako props do namelist

	const handleListData = (listItem) => {
		setItemArray((prevExpenses) => {
			console.log(prevExpenses);
			return [listItem, ...prevExpenses]; // works as inteded
		});
	};
	// ...[{}] = {}

	// [{}, ...[{}] ] = [{}, {}]

	return (
		<div className={styles.wrapper}>
			<InputForm onSaveArray={handleListData} />
			{/* <NameList passedArray={itemArray} /> */}
			<Modal></Modal>
		</div>
	);
}

export default App;
