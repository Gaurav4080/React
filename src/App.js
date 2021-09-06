// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";
import React, { useState } from 'react';
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1e0465';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <NavBar title="TextCleaner" mode = {mode} toggleMode={toggleMode}/>
    <strong><Alert alert=" Research says, Dark mode saves the moiture of your eyes, what are you waiting for?"/></strong>
    <div className="container my-3">
      <TextBox heading="Enter the Text to Auto Analyse Below!!" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;