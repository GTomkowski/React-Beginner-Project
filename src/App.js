import React from "react";
import InputForm from "./components/InputForm/InputForm";
import styles from "./App.module.css";
import NameList from "./components/NameList/NameList";
function App() {
	// tutaj bedziemy renderowac modala warunkowow w zaleznosci czy NameList length > 0 czy nie

	return (
		<div className={styles.wrapper}>
			<InputForm />
			<NameList />
		</div>
	);
}

// project scope

// what is needed?

// a name list appears - with nameItems Component with a nameItem Components

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
