import React, {useState} from 'react'
export default function TextForms(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = ('');
        setText(newText)
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event)=>{
        console.log("Uppercase was Clicked")
        setText(event.target.value);
    }
    const handleOnCopy = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('')
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#1e0465'}}>
            <div className="mb-3">
                <h2 >{props.heading}</h2>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'#1e0465'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleOnCopy} >Copy your Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'#1e0465'}}>
            <h3>Your Text Summary!!</h3>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Average Minutes Read!!</p>
            <h3>Text Preview</h3>
            <p>{text.length>0?text:"Enter something in the text box above to prevuiew it here!"}</p>
        </div>
        </>
    )
}