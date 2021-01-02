import React from 'react' 
import "../styles.css"

export default function WebCamBorder(props){
  return(
    <div className="borderCSS"
    style={{
      width: props.width,
      height: props.height,
      backgroundImage: `linear-gradient(45deg, ${props.color1},
          ${props.color2},
          ${props.color3}, 
          ${props.color4},
          ${props.color1},
          ${props.color2})`,
      backgroundSize: "800% 800%",
      animation: `gradient ${props.time} linear infinite`
    }}
  ></div>
  )
}