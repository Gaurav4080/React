import React, {useState} from 'react'
export default function TextForms(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("Uppercase was Clicked")
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter your Text here!')
    return (
        <div>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        </div>
    )
}