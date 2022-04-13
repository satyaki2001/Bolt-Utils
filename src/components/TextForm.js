import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("The text is converted to uppercase", "success");
  }
  const handleLoClick = ()=>{
    console.log("Lower case was clicked!" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("The text is converted to lowercase", "success");
  }
  const handleClearClick = ()=>{
    console.log("The text was cleared" + text);
    let newText = ("");
    setText(newText);
    props.showAlert("The textbox is cleared", "success");
  }

    const handleOnChange = (event)=>{
      console.log("On Change!");
      setText(event.target.value);
    }
  
  const [text, setText] = useState('Enter text here!');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
=======
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower Case</button>

<button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.replace(/\s/g, "").length} characters</p>
      <p>Reading time: {0.008 * text.replace(/\s/g, "").length} </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text above to get the preview"}</p>
    </div>
    </>
  )
}
