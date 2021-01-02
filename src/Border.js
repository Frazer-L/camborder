import React from "react";
import { useParams } from "react-router-dom";
import './styles.css'
import WebCamBorder from './components/WebCamBorder'


export default function Border() {
  const { c1 } = useParams();
  const { c2 } = useParams();
  const { c3 } = useParams();
  const { c4 } = useParams();
  const { time } = useParams();

  return (
    <WebCamBorder 
    color1={`#${c1}`}
    color2={`#${c2}`}
    color3={`#${c3}`}
    color4={`#${c4}`}
    width="800px"
    height="600px"
    time={time}
  />
  )
}
