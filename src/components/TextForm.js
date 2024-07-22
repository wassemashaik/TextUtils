import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')
  const [textColor, setTextColor] = useState('#000000')

  const onChangeText = (event) => {
    setText(event.target.value)
  }
  const onUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("UpperCase has been applied", "success")
  }
  const onLowClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("LowerCase has been applied", "success")
  }
  const onInverseClick = () => {
    let newText = ""
    for (let i = text.length-1; i>= 0; i--){
      newText +=text[i]
    }
    setText(newText)
    props.showAlert("Inverse has been applied", "success")
  }
  const randomColors = ["#282c34", "#eb4034", "#ccc60c", "#6ae03f", "#3fe0b0", "#3f90e0", "#3f47e0"]
  const onRandomChange = () => {
    let randomIndex = Math.floor(Math.random() * randomColors.length)
    setTextColor(randomColors[randomIndex])
  }
  const onClearText = () => {
    let newText = ""
    setText(newText)
    props.showAlert("All the text is Cleared", "success")
  }
  const wordCount = (text)=> {
    const trimmedText = text.trim()
    if (trimmedText === ''){
      return 0 
    }
    return trimmedText.split(/\s+/).length
  }
  return (
    <>
    <div className='container m-3' style={{color: props.mode === 'light'? 'black': 'white'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label" ></label>
        <textarea 
          style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',borderColor: props.mode === 'light'? '#3d3d3f': '#c3d6fc' ,color: props.mode === 'light'? 'black': 'white' }} 
          placeholder='Enter your text here' 
          className="form-control" 
          id="myBox" 
          value={text} 
          rows="9" 
          onChange={onChangeText}>
        </textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-2 mt-2" onClick={onUpClick} >UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 mt-2" onClick={onLowClick} >lowercase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 mt-2" onClick={onInverseClick}>
          Inverse
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 mt-2" onClick={onRandomChange}>color</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 mt-2" onClick={onClearText}>clear Text</button>
        </div>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'? 'black': 'white'}}>
      <h1>Your Text Summary</h1>
      <p>{wordCount(text)} words</p>
      <p>{text.length} characters</p>
      <p>{0.008 * text.split(' ').filter((element)=> {return element.length !==0}).length} Minutes to read the text</p>
      <h2>Preview</h2>
      <p style={{ color:textColor}}>{text.length >0 ? text: 'Enter your text above to see the preview here'}</p>
    </div>
    </>
  )
}
