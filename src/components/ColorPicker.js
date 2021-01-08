import React from 'react'
import { ChromePicker } from "react-color";
import Tippy from "@tippyjs/react";


export default function ColorPicker(props){
  return(<div className="colorpickerDiv">
          <Tippy
            interactive={true}
            placement={'bottom'}
            content={
              <ChromePicker color={props.color} onChange={color => props.onChange(color.hex)} />
            }
          >
            <button className="ref-button" style={{ backgroundColor: props.color }}>
              {props.title}
            </button>
          </Tippy>
        </div>)

}
