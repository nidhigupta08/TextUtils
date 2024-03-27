import React,{ useState,} from 'react'

export default function TextForm(props) {

  const convertToRsText = () => {
    const convertedText = text.replace(
      /\b(Rs\.?|rs\.?|rs)\s*(\d+)\b/gi,
      (match, prefix, number) => `${numberToWords(Number(number))} `
    );
    setText(convertedText);
    props.showAlert('Converted Rs. numbers to text!', 'success');
  };
  const numberToWords = (number) => {
    // Implement your logic to convert number to words here
    // This is a simplified example. You may use libraries like num-words for more accurate conversion
    const regex = /\b(Rs\.?|rs\.?|rs)\s*(\d+)\b/gi;

    const convertToWords = (num) => {
      // Define arrays for units, tens, and scales
      const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
      const scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

      // Function to convert a group of 3 digits into words
      const convertGroup = (num) => {
        let result = '';

        // Extract the hundreds place
        const hundreds = Math.floor(num / 100);
        if (hundreds > 0) {
          result += units[hundreds] + ' Hundred ';
          num %= 100;
        }

        // Extract the tens and units place
        if (num > 0) {
          if (num < 20) {
            result += units[num] + ' ';
          } else {
            const tensPlace = Math.floor(num / 10);
            result += tens[tensPlace] + ' ';
            num %= 10;
            if (num > 0) {
              result += units[num] + ' ';
            }
          }
        }

        return result.trim();
      };

      // Function to convert a number to words
      const convertToWords = (num) => {
        if (num === 0) return 'Zero';

        let result = '';
        let groupCount = 0;

        while (num > 0) {
          const group = num % 1000;
          if (group > 0) {
            result = convertGroup(group) + scales[groupCount] + ' ' + result;
          }
          num = Math.floor(num / 1000);
          groupCount++;
        }

        return result.trim();
      };

      return convertToWords(num);
    };

    // Use regex to find and replace numbers with their textual representation
    const convertedText = text.replace(regex, (match, prefix, number) => {
      return `${convertToWords(Number(number))} `;
    });

    return convertedText;
};

  const handleGenerateRandomText = () => {
    // Generate random text or Lorem Ipsum placeholder text
    const randomText = loremIpsum(); // Call a function to generate Lorem Ipsum text
    setText(randomText);
    props.showAlert('Generated random text!', 'success');
  };

  const loremIpsum = () => {
    // Lorem Ipsum text generator function
    return 'Do not let perfectionism stall you. A small "Rs.200" error in a report can be fixed.  But mistakes happen everywhere - a rs.1,500 miscalculation on an invoice, a rs.75 mistake in ordering supplies. The key is to learn from them.  Fix the errors, adjust your approach, and keep moving forward. Progress, not perfection, is the path to success.';
  };

  const handleUpClick=()=>{
    //  console.log("Uppercase was clicked" + text);
      //setText("you have clicked on handleUpChange");
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick=()=>{
      let lower_case=text.toLowerCase();
      setText(lower_case);
      props.showAlert("Converted to lowercase!","success");
    }

    const handleTitleClick = () => {
      let titleCase = text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setText(titleCase);
      props.showAlert("Converted to titlecase!","success");
    };

    const handleSentenceCaseClick = () => {
      let SentenceCase = text.toLowerCase().split('. ').map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('. ');
      setText(SentenceCase);
      props.showAlert("Converted to sentencecase!","success");
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
      props.showAlert("Converted to alternativecase!","success");
    };

      // Event handler for input change
    const handleOnChange=(event)=>{
      //console.log("on change");
      setText(event.target.value)   // Update inputText state
     
    }
  
    const handleRemoveSpacesClick = () => {
      const newText = text.replace(/\s+/g, ' '); // Replace multiple spaces with single space
      setText(newText);
      props.showAlert("Removed whitespace!","success");
    };
  
    const handleExtractNumberClick = () => {
      const extractedNumbers = text.match(/\d+/g); // Regular expression to extract numbers
      if (extractedNumbers) {
        const numbersString = extractedNumbers.join(', '); // Join extracted numbers into a string
        setText(numbersString);
        props.showAlert("Extracted number!","success");
      } else {
        alert('No numbers found in the input text.');
      }
    };

    const handleReverseTextClick = () => {
      const reversedText = text.split('').reverse().join('');
      setText(reversedText);
      props.showAlert("Converted to reverse!","success");
    };

    const handleLineCountClick = () => {
      const lineCount = text.split('\n').length;
      setText(`Number of lines: ${lineCount}`);

    };

    const handleRemoveSpecialCharsClick = () => {
      const removedSpecialCharsText = text.replace(/[^\w\s]/gi, '');
      setText(removedSpecialCharsText);
      props.showAlert("Removed special character!","success");
    };

const handleEncryptTextClick = () => {
    const encryptedText = text
      .split('')
      .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
      .join('');
    setText(encryptedText);
  };
  
  const handleDecryptTextClick = () => {
    const decryptedText = text
      .split('')
      .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
      .join('');
    setText(decryptedText);
  };

  const handleWordCountClick = () => {
    const words = text.split(/\s+/).filter(word => word !== ''); // Split text by spaces and filter out empty strings
    const wordCountText = `Word count: ${words.length}`;
    setText(wordCountText);
  };

  const handleSortTextClick = () => {
    const sortedText = text.split('\n').sort().join('\n');
    setText(sortedText);
    props.showAlert('Text sorted alphabetically!', 'success');
  };

  const handleCopy=()=>
  {
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
  }

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
  <button className='btn btn-outline-primary mx-2 my-2' onClick={handleGenerateRandomText}>
              Generate Random Text
            </button>
  <button className="btn btn-outline-primary mx-2" onClick={convertToRsText}>Convert to Rs Text</button>         
  <button className="btn btn-outline-success mx-2 " onClick={handleUpClick}>Convert to Upper Case</button>
  <button className="btn btn-outline-info" onClick={handleLoClick}> Convert to Lower Case</button>
  <button className='btn btn-outline-primary mx-2' onClick={handleTitleClick}>Convert to Title Case </button>
  <button className='btn btn-outline-warning mx-2' onClick={handleSentenceCaseClick}> Convert to Sentence Case</button>
  <button className='btn btn-outline-danger mx-2' onClick={handleAltCaseClick}>Convert to Alternative Case</button>
  <button className='btn btn-outline-danger mx-2 my-2' onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
  

      <button className='btn btn-outline-info mx-2 my-2' onClick={handleExtractNumberClick}>Extract Numbers</button>

      <button className="btn btn-outline-primary mx-2" onClick={handleReverseTextClick}>Reverse Text</button>
      <button className="btn btn-outline-info mx-2" onClick={handleLineCountClick}>Count Lines</button>
      <button className="btn btn-outline-secondary mx-2" onClick={handleRemoveSpecialCharsClick}>Remove Special Characters</button>
      <button className="btn btn-outline-secondary mx-2" onClick={handleEncryptTextClick}>Encrypt Text</button>
       
        <button className="btn btn-outline-warning mx-2" onClick={handleDecryptTextClick}>Decrypt Text</button>
        <button className="btn btn-outline-secondary mx-2" onClick={handleWordCountClick}>Count Words</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleSortTextClick}>
              Sort Text
            </button>
      <button className='btn btn-outline-warning mx-2 my-2' onClick={handleCopy}>Copy to clipboard</button>
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