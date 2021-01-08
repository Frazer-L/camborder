import React from "react";

import "./styles.css";

import Header from "./components/Header";

export default function HowToPage(){
    const customCSS = "body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }"
    return(
        <div>
            <Header />
            <div className="howtopar">
                <p>
                    1) Choose your desired colors and animation time.
                </p>
                <p>
                    2) Once you're happy with your settings <strong>copy the link</strong> generated below the preview.
                </p>
                <p>
                    3) In OBS add a new source > browser source. Use the link you copied as the URL for the browser source. 
                </p>
                <p>
                    Make sure to use the following settings:
                </p>
                <p style={{fontFamily: "Monospace"}}>
                    Width: 800px     
                    <br/>
                    Height: 600px
                    <br/> 
                    <br/>
                    Custom CSS: <br/>
                    {`body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }`}
                    <br/>
                </p>
                <p>
                    Tip: <strong>You can adjust the size, aspect-ratio and border width</strong> by dragging to resize the border inside OBS. (Hold Alt while dragging to crop the edges to make the border width smaller!)
                </p>
            </div>
        </div>
        
    )
}