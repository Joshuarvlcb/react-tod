import { useState } from "react"


const Button = ({text,color,onclick}) => {

    // const [textColor,setTextColor] = useState('black')
    // const [bgColor,setBgColor] = useState('red')

    // const tempClick = () => {
    //     let random = Math.floor(Math.random()*999999)
    //     let bg = Math.floor(Math.random()*999999)
    //     setTextColor(`#${random}`)
    //     setBgColor(`#${bg}`)
    //     console.log("click")
    // }

    return <>
        <button  className = 'btn'  onClick = { onclick}>{text}</button>
        </>
    
}
Button.defaultProps = {
    text: 'Button',
    color:'red'
}
export default Button