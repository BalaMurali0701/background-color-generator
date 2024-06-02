import React, { useState, useEffect} from "react";
import "./content.css";

export default function Content() {
  const [color, setColor] = useState("000000");

  const generateColor = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return hex;
  };

  const changeColor = () => {
    setColor(generateColor());
  };

  useEffect(() => {
    document.body.style.backgroundColor = `#${color}`;
  }, [color]);

  function gradient() {
    const copyText = `background-color: #${color};`;
    navigator.clipboard.writeText(copyText);
    console.log("Copied the text: " + copyText);
  }

  return (
    <div className="content merriweather-black">
      <span className="display__wrap">background-color: #{color};</span>
      <div className="button__wrap">
        <span onClick={changeColor} id="button__1">Generate</span>
        <span onClick={gradient} id="button__2">Copy</span>
      </div>
    </div>
  );
}