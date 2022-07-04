import React, { useState, useEffect } from "react";
import "./IfoodCounter.css";

function IfoodCounter() {
  const [value, setValue] = useState(1);
  const [buttonStyle, setButtonStyle] = useState("able");

  useEffect(() => {
    document.getElementById('coin').innerHTML = 2.00 * value;
  }, [value]) // QUALQUER ALTERAÇÃO

  function downValue() {
    if (value <= 2) {
      setButtonStyle("disable");
    }

    if (value > 1) {
      setValue(value - 1);
    }
  }

  function upValue() {
    setButtonStyle("able");
    setValue(value + 1);
  }

  return (
    <div className="countex-wrapper">
      <button
        className={`counter-button-minus-${buttonStyle}`}
        onClick={downValue}
      >
        -
      </button>
      <p>{value}</p>
      <button className="counter-button-plus-able" onClick={upValue}>
        +
      </button>
      <button id="coin">12,00</button>
    </div>
  );
}

export default IfoodCounter;
