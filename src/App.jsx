import RandomQuestions from "./RandomQuestions/RandomQuestions"
import PredefinedQuestions from "./PredefinedQuestions/PredefinedQuestions"
import ToggleableTab from "./ToggleableTab/ToggleableTab";
import Input from "./Input/Input";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { useState } from "react";
import FormContext from "./context/FormContext";

const App = () => {

  const [formData, setFormData] = useState({});

  console.log('App')


  function handleSubmit(e)
  {
    e.preventDefault();
    console.log(formData);
  }

  return (

    <>

    <FormContext.Provider value={setFormData}>

      <form onSubmit={handleSubmit}>
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          <ToastContainer />

          <Input 
            fieldType={'text'}
            fiedlPlaceHolder={"Total number of questions"}
            fieldPattern={"^[0-9]\d*"}
            fieldErrorMsg={"Value must be an positive number"}
          />

          <ToggleableTab tabs={[
            {label:"Random Questions", value: <RandomQuestions/>}, 
            {label:"Predefined Questions", value: <PredefinedQuestions/>}
          ]}/>

          <button type="submit">Submit</button>

      </form>
    </FormContext.Provider>
    </>

    )
}

export default App