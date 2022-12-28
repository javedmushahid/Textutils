import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
// import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
   if(mode==='light'){
     setMode('dark');
     document.body.style.backgroundColor='grey';
       }
   else{
    setMode('light');
    document.body.style.backgroundColor='white';
   }
  }
  return (
    <>
<Navbar mode={mode}  toggleMode={toggleMode}/>
<div className="container my-3">

  <TextForm heading="Enter the your text to convert it to upper case" mode={mode}/>
   {/* <About/>  */}
</div>
    </>
  );
}

export default App;
