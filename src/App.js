import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#4b4c50'
      showAlert("Dark Mode enabled", "success")
    }else {
      setMode('light')
      document.body.style.backgroundColor = '#dde0e6'
      showAlert("Light Mode enabled", "success")
    }
  }
  return (
    <>
    <BrowserRouter>
     <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Text Area" mode={mode}/> }/>
        <Route path="/about" element={<About mode={mode}/>}/>
      </Routes>
      </div> 
      </BrowserRouter>
    </>
  );
}

export default App;
