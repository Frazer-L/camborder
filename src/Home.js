import React, { useEffect, useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

import "./styles.css";

import Header from "./components/Header";
import ColorPicker from "./components/ColorPicker";
import TimeSlider from "./components/TimeSlider";

import WebCamBorder from "./components/WebCamBorder";

export default function Home() {
  const currentURL = window.location.href;

  const [c1, setC1] = useState("#ee7752");
  const [c2, setC2] = useState("#e73c7e");
  const [c3, setC3] = useState("#23a6d5");
  const [c4, setC4] = useState("#23d5ab");
  const [time, setTime] = useState("10s");
  const webcamBorderURL = `${currentURL}border/${c1.substring(
    1
  )}/${c2.substring(1)}/${c3.substring(1)}/${c4.substring(1)}/${time}`;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [webcamBorderURL]);

  return (
    <>
      <Header />
      <div className="centered">
        <div className="sliderDiv">
          <h6>{`Animation time (${time}):`}</h6>
          <TimeSlider onChange={setTime} />
        </div>
        <ColorPicker color={c1} onChange={setC1} title="COLOR 1" />
        <ColorPicker color={c2} onChange={setC2} title="COLOR 2" />
        <ColorPicker color={c3} onChange={setC3} title="COLOR 3" />
        <ColorPicker color={c4} onChange={setC4} title="COLOR 4" />
      </div>

      <p className="grey preview">preview:</p>
      <WebCamBorder
        color1={c1}
        color2={c2}
        color3={c3}
        color4={c4}
        width="400px"
        height="300px"
        time={time}
      />
      <div className="centered copytoclipboard">
        <CopyToClipboard text={webcamBorderURL} onCopy={() => setCopied(true)}>
          <p>{webcamBorderURL}</p>
        </CopyToClipboard>

        {copied && <span className="grey">Copied to clipboard!</span>}
      </div>
      {!copied && <p className="grey"> ↑ click to copy to clipboard ↑ </p>}
    </>
  );
}
