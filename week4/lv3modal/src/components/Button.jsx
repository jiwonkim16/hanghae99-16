import React from "react";

function Button() {
  const primaryBtn = () => alert("버튼을 만들어 보세요");
  const negativeBtn = () => prompt("어렵나요?");
  return (
    <div>
      <h1>Button</h1>
      <div>
        <button onClick={primaryBtn}>Large Primary Button</button>
        <button>Medium</button>
        <button>Small</button>
      </div>
      <div>
        <button onClick={negativeBtn}>Large Negative Button</button>
        <button>Medium</button>
        <button>Small</button>
      </div>
    </div>
  );
}

export default Button;
