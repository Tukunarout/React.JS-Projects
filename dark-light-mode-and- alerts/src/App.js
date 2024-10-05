import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'

function App() {
  
  //using UseState
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  //Function for alert
  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  //function for mode change dark/light
  const toggleMode = ()=>{
    if (mode=== 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success")   
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert= {alert}/>
      <div className="container my-3">
        <TextForm heading="Enter you text to analyze" showAlert={showAlert} mode={mode}/>
        {/* <About/> */}
      </div>
      
      
    </>
  );
}

export default App;
