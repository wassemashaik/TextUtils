// import React, { useState } from 'react'

export default function About(props) {
    //  style={darkMode}
    // const [btnText, setBtnText] = useState('Enable Dark Mode')
    // const toggleStyle = () => {
    //     if(darkMode.color === 'white'){
    //         setDarkMode({
    //             backgroundColor: 'white',
    //             color: 'black'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }else {
    //         setDarkMode({
    //             backgroundColor: 'black',
    //             color: 'white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    // }
  return (
    <div className="container mb-3" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}} mode={props.mode}>
        <h2>About Us</h2>
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}}>
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyse your text
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        TextUtils app helps you to analyze your text according to the options given to you.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}}>
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free To Use
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}} aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        TextUtils App is free to use without any annoying ads and it is easily understandable.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}}>
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}} aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        This word counter software works on any browser such as Chrome, Brave, Firefox, Internet Explorer etc.
                    </div>
                </div>
            </div>
        </div>
        {/* <button onClick={toggleStyle} className='btn btn-primary my-3' type='button'>{btnText}</button> */}
    </div>
  )
}
