import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        /* console.log("Uppercase button clicked" + text); */
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () =>{
        /* console.log("Lowercase button clicked" + text); */
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () =>{
        /* console.log("clear button clicked" + text); */
        let newText = (" ");
        setText(newText)
    }
    const handleReverseClick = () =>{
        /* console.log("Reverse button clicked" + text); */
        let newText = text.split("").reverse().join("");
        setText(newText)
    }
    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const handleOnChange = (event) =>{
        /* console.log("Text area text is changing") */
        setText(event.target.value)
    }
    
    const [text, setText] = useState(''); // text is a variable which has a default value 'Enter Text Here', 
                                          // for updation use setText function 
    return (
        <>
        <div className="container my-3">
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" onChange = {handleOnChange} rows="6" style={{backgroundColor: props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button type="button" className="btn-sm btn-primary" onClick={handleUpClick}>Uppercase</button>
            <button type="button" className="btn-sm btn-success mx-1" onClick={handleLowClick}>Lowercase</button>
            <button type="button" className="btn-sm btn-warning mx-1" onClick={handleReverseClick}>Reverse</button>
            <button type="button" className="btn-sm btn-danger mx-1" onClick={handleClearClick}>Clear</button>
           
        </div>
        <div className="container my-4">
            <h3 style={{color: props.mode==='dark'?'white':'black'}}>Your Text Summary</h3>
            <p style={{color: props.mode==='dark'?'white':'black'}}>Your text has {text.split(" ").length} words and {text.length} characters</p>
            <p style={{color: props.mode==='dark'?'white':'black'}}>Your text {0.008 * text.split(" ").length} minutes read</p>
            <h3 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h3>
            <textarea className="form-control" value={text.length>0?text:"Enter something above to preview it here...."} id="myBox" onChange = {handleOnChange} rows="6" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            <div className="container my-3">
            <button type="button" className="btn-sm btn-dark mx-1" onClick={handleCopy} style={{backgroundColor: props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}}>Copy</button>
            </div>
        </div>
        </>
    )
}
