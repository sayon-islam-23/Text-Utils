import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  
  const toggleMode =()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#030a41';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
    }
  } 
return (
      <Router> 
      <Navbar title="Text-Utils" AboutUs = "About TextUtils" bari="Home" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert="Welcome to Text-Utils"/>
      <Switch>
      <Route exact path="/about">
      <About/>
      </Route>
      <Route exact path="/">
      <TextForm heading="Enter Your Text to Convert" mode={mode}/>
      </Route>
      </Switch>
      </Router>
  );
  
}
export default App;
