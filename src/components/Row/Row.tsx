import React from "react";
import { Pixel } from "../Square/Pixel";
import "./Row.css";

interface RowProps {
  pixelNumber: number;
  newColor: string;
}

export const Row: React.FC<RowProps> = ({ pixelNumber, newColor }) => {
  const pixels = [];

  for (let i = 0; i < pixelNumber; i++) {
    pixels.push(<Pixel key={`Pixel_${i}`} newColor={newColor} />);
  }

  return (
    <>
      <div className="row">{pixels}</div>
    </>
  );
};
