import React, { useState } from "react";
import "./Pixel.css";

interface PixelProps {
  newColor: string;
}

export const Pixel: React.FC<PixelProps> = ({ newColor }) => {
  const [oldColor, setColor] = useState("white");
  return (
    <div
      className="pixel"
      onClick={() => setColor(newColor)}
      style={{ backgroundColor: oldColor }}
    />
  );
};
