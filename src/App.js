
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    Type: type,
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  }

  const toggleMode = ()=>{
    if (mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success");
    }
    else 
    {setMode('dark');
    document.body.style.backgroundColor = '#18477A'
    showAlert("dark mode has been enabled", "success");}
   
  }

  return (
 </*Router*/>
 <Navbar title='Bolt Utils' mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert}/>
 <div className="container my-3">
     {/*<Switch>
          <Route exact path="/about">
            <About />*/}
         {/* </Route>
  <Route exact path="/">*/}
<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
         {/* </Route>
        </Switch>*/}
        </div>
   {/*</Router>*/})
    
  );
</>

)
      }
      export default App;
