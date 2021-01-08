import React from 'react'
import { Slider } from "@material-ui/core";


export default function TimeSlider(props){

  return( 
    <div className="sliderDiv">
    <Slider
            defaultValue={10}
            getAriaValueText={value => `${value}s`}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            onChangeCommitted={(e, v) => props.onChange(`${v}s`)}
            step={1}
            min={1}
            max={600}
          />
    </div>
  )
}