import React,{useState} from 'react'


export default function (props) {
    
    const handleClicked =()=>{
       let txt=text.toUpperCase();
        setText(txt);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handlelowClicked =()=>{
        let txt=text.toLowerCase();
         setText(txt);
     }
     const handleClear=()=>{
        return setText("");
     }
     const handleCopy=()=>{
        let mytxt=document.getElementById('myBox');
        mytxt.select();
        navigator.clipboard.writeText(mytxt.value);
     }

     const handleSpaces=()=>{
        let txt1=text.split(/[ ]+/);
        setText(txt1.join(" "));
     }
    const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>  
    <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="9" placeholder='Enter Something to convert'></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleClicked}>Convert to Upper Case</button>
    <button className="btn btn-primary mx-2" onClick={handlelowClicked}>Convert to Lower Case</button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Spaces</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h4>
            Your Text Summary
        </h4>
            <p>{text.split(" ").length} words and {text.length}characters</p>
            <p>can read in {0.008 * text.split(" ").length} minutes</p>
            <h5>Preview </h5>
            <p>{text.length>0?text:'Please enter something to preiew'}</p>
    </div>
    </>
  )
}
