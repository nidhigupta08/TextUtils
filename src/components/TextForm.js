import React,{ useState} from 'react'

export default function TextForm(props) {

  const handleUpClick=()=>{
  //  console.log("Uppercase was clicked" + text);
    //setText("you have clicked on handleUpChange");
    let newText=text.toUpperCase();
    setText(newText);
  }
  
  const handleLoClick=()=>{
    let lower_case=text.toLowerCase();
    setText(lower_case);
  }

  const handleTitleClick = () => {
    let titleCase = text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(titleCase);
  };

  const handleSentenceCaseClick = () => {
    let SentenceCase = text.toLowerCase().split('. ').map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('. ');
    setText(SentenceCase);
  };

  const handleAltCaseClick = () => {
    let AltCase = '';
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        AltCase += text.charAt(i).toUpperCase();
      } else {
        AltCase += text.charAt(i).toLowerCase();
      }
    }
    setText(AltCase);
  };
    // Event handler for input change
  const handleOnChange=(event)=>{
    //console.log("on change");
    setText(event.target.value)   // Update inputText state
   
  } 
  
  const handleRemoveSpacesClick = () => {
    const newText = text.replace(/\s+/g, ' '); // Replace multiple spaces with single space
    setText(newText);
  };

  const handleClearClick = () => {
    setText('');
  };
  
    // Declare a new state variable, which we'll call "text" and set the default value "enter txt here".
    //and want to update thn we have to call function "setText"
 const [text, setText] = useState('');

//  setText("dgngfngyhnjhg");  correct way to chnge 
//text="new text"   error will arise directly assigning the value is not allowed. Use function "setText"
  return (

<>
<div style={{color:props.mode==='light'?'black':'white'}}>
    <div className='container'  >
    
  <div className="form-group">
    <h2 >{props.heading} </h2>
    {/* without onChange fun i cannot able to write anything in the textbox. */}
    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(80 79 79)':'white', color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea> 
  </div>

  <div className='p-3'>
  <button className="btn btn-outline-success mx-2 " onClick={handleUpClick}>Convert to Upper Case</button>
  <button className="btn btn-outline-info" onClick={handleLoClick}> Convert to Lower Case</button>
  <button className='btn btn-outline-primary mx-2' onClick={handleTitleClick}>Convert to Title Case </button>
  <button className='btn btn-outline-warning mx-2' onClick={handleSentenceCaseClick}> Convert to Sentence Case</button>
  <button className='btn btn-outline-danger mx-2' onClick={handleAltCaseClick}>Convert to Alternative Case</button>
  <button className='btn btn-outline-danger mx-2 my-2' onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
  <button className='btn btn-outline-danger mx-2 my-2' onClick={handleClearClick}>Clear All</button>
  </div>
 
    </div>

    <div className="container my-3">
      <h1>Your summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      {/* Word Count	Slow (125 wpm)	Average (300 wpm)	Fast (450 wpm)    .1/125==0.008
         125 words	   1 minutes	      0.4 minutes	       0.3 minutes */}
       <p>{0.008 * text.split(" ").length } minutes takes to read .</p>
    </div>
         <h3>Preview</h3>
         <p>{text.length>0? text:"Enter something in the textbox above to preview it here."}</p>
</div>
</>
  )
}