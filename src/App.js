import { useState } from 'react';
import './App.css';
//import About from './components/About';


import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const[mode,setMode]=useState('light'); //whether dark mode is enabled or not.
  
  const [alert,setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },800);

  }
 const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(65 66 68)';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
 <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
  <TextForm  showAlert={showAlert} heading='Enter your text here and select the desired case conversion' mode={mode} />

 {/* <About/>  */}
 
</div>
   </>
  );
 
}


export default App;
