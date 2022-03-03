import React, { useState } from "react";
import "./Square.css";

interface SquareProps {
  newColor: string;
}

export const Square: React.FC<SquareProps> = ({ newColor }) => {
  const [color, setColor] = useState("white");
  return (
    <div
      className="square"
      onClick={() => setColor(newColor)}
      style={{ backgroundColor: color }}
    />
  );
};
