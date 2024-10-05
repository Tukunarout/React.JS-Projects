import React,{useState} from "react";



export default function TextForm(props) {
    const handleOnChange = (event)=>{
       
           setText(event.target.value);
           
       }
    const handleUPclick = ()=>{
 
        let newText = text.toUpperCase();
        setText(newText)
    };
    const handleLWclick = ()=>{
        
          let newText = text.toLowerCase();
          setText(newText)
      };
    const handleClearText = ()=>{
        
          let newText = "";
          setText(newText)
      };
      const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
      };
      const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      };

 

    const [text, setText] = useState("");

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter your text...." value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPclick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLWclick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read this</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
