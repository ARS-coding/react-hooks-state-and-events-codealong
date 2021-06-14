import React from "react";
import {useState} from "react";


function Toggle() {

  // My answer starts

  // function clickEventHandler(event) {
  //   event.target.firstChild.data === "OFF" ? event.target.firstChild.data = "ON" : event.target.firstChild.data = "OFF";
  // }

  // My answer ends

  const [isOn, setIsOn] = useState(false);

  function clickEventHandler(e) {
    setIsOn((isOn) => !isOn)
  }

  return (
    <button 
      style={{backgroundColor : isOn ? "blue" : "red"}}
      onClick={clickEventHandler}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
