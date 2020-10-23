import React, { ReactNode } from "react";

interface ITitle {
  children: ReactNode;
  color?: string;
}
function Title({ children, color }: ITitle) {
  return (
    <b
      onClick={() => console.log("dfdfd")}
      style={{
        color,
      }}
    >
      {children}
    </b>
  );
}

export default Title;
