import React,{useState} from "react";



export default function TextForm(props) {
    const handleOnChange = (event)=>{
       
           setText(event.target.value);
           
       }
    const handleUPclick = ()=>{
 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    };
    const handleLWclick = ()=>{
        
          let newText = text.toLowerCase();
          setText(newText)
          props.showAlert("Converted to lowercase!", "success")
      };
    const handleClearText = ()=>{
        
          let newText = "";
          setText(newText)
          props.showAlert("Cleard all text!", "success")
      };
      const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        props.showAlert("Copied all text!", "success")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text to clipboard!", "success")
      };
      const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success")
      };

 

    const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter your text...." style={{backgroundColor: props.mode==='dark'?'#254471':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPclick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLWclick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read this</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text to preview...'}</p>
    </div>
    </>
  );
}
