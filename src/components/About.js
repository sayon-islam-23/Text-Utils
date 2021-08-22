import React from 'react'

export default function About(props) {

    
   /*  const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor : 'white'
    })
    const [btnText, setBtnText] = useState('Enable dark Mode')

    const toggleStyle = () =>{
        if (document.body.style.backgroundColor === '#030a41'){
            setMyStyle({
                color: 'white',
                backgroundColor : 'black',
                border: "1px solid white"
            })
            setBtnText("Enable light mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor : 'white',
            })
            setBtnText("Enable dark mode")
        }
    } */
    return (
            <div className="container my-5" style={{backgroundColor: props.mode==='dark'?'black':'white'}}>

            <div class="p-3 mb-4 bg-light rounded-3">
            <div class="container-fluid py-3">
            <h1 class="display-5 fw-bold">About Text-Utils</h1>
            <p class="col-md-8 fs-4 my-3">It is a mini web application by which you can customize your texts easily, you can convert your entire text into uppercase or lowercase, or reverse it entire, very easily.</p>
            <b>created by "Sayon Islam"</b>
            </div>
            </div>
            {/* <div className="container my-3">
            <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div> */}
            </div>
    )
}
