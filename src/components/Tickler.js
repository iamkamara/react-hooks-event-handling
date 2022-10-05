import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
