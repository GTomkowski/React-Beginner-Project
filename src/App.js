import React from "react";
import InputForm from "./components/InputForm";
import styles from "./App.module.css";
function App() {
	return (
		<div className={styles.wrapper}>
			<InputForm />
		</div>
	);
}

// project scope

// what is needed?

// a label and an input - twice // this belongs to FormInput

// add button // this is a separate component named Button

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
