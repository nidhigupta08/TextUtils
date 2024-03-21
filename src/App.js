import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode,setMode]=useState('light'); //whether dark mode is enabled or not.
 const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(65 66 68)';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
 <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="container my-3">
  <TextForm heading='Enter your text here and select the desired case conversion' mode={mode} />
 {/* <About/>  */}
</div>

   </>
  );
 
}


export default App;
