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
                        Collapsible Group Item #1
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}}>
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Collapsible Group Item #2
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}} aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}}>
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Collapsible Group Item #3
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" style={{backgroundColor: props.mode === 'light'? '#dde0e6': '#4b4c50',color: props.mode === 'light'? 'black': 'white'}} aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
        </div>
        {/* <button onClick={toggleStyle} className='btn btn-primary my-3' type='button'>{btnText}</button> */}
    </div>
  )
}
