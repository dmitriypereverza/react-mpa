import React, { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  color?: string;
}
function Button({ children, color }: IButton) {
  return (
    <button
      onClick={() => console.log("dfdfd")}
      style={{
        color,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
