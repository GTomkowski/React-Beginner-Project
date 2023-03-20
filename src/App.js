import React, { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import styles from "./App.module.css";
import NameList from "./components/NameList/NameList";
function App() {
	const [itemArray, setItemArray] = useState([]);
	// przekazemy z input form do "gory" tablice obiektow, nastepnie jako props do namelist

	const handleListData = (listItem) => {
		setItemArray((prevExpenses) => {
			return [listItem, ...prevExpenses];
		});
	};

	return (
		<div className={styles.wrapper}>
			<InputForm onSaveArray={handleListData} />
			<NameList passedArray={itemArray} />
		</div>
	);
}

export default App;

// how is form component structured?

/* <form> 
  <div className="form-controls">

  <div className="form-control"

  <label></label>
  <input></input>

  </div>

  

  <div className="form-control"

  <label></label>
  <input></input>

  </div>

  </div>




*/
