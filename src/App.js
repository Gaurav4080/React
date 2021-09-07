// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1e0465';
      showAlert("Dark Mode has been Enabled!!", "success");
      // document.title="TextCleaner | Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled!!", "success");
      // document.title="TextCleaner | Light Mode"
    }
  }
  return (
    // Things needs to be wrapped up here.
    <>
    {/* <Router> */}
    <NavBar title="TextCleaner" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert ={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
      {/* /users --> Component 1
      /users/home --> Component 2 */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextBox showAlert={showAlert} heading="Enter the Text to Auto Analyse Below!!" mode={mode}/>
          {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;