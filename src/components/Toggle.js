import React from "react";

function Toggle() {

  // function clickEventHandler(event) {
  //   event.target.firstChild.data === "OFF" ? event.target.firstChild.data = "ON" : event.target.firstChild.data = "OFF";
  // }

  return <button onClick={clickEventHandler}>OFF</button>;
}

export default Toggle;
