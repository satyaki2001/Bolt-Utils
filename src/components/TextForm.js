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
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}

    const handleOnChange = (event)=>{
      console.log("On Change!");
      setText(event.target.value);
    }
  
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
      <h2 className='mb-4'>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" placeholder="Enter text here!" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#2D5071':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary ms-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.replace(/\s/g, "").length} characters</p>
      <p>Reading time: {0.008 * text.replace(/\s/g, "").length} </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"No text to preview"}</p>
    </div>
    </>
  )
}
