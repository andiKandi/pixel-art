import React from "react";
import { Square } from "../Square/Square";
import "./Row.css";

interface RowProps {
  squareNumber: number;
  newColor: string;
}

export const Row: React.FC<RowProps> = ({ squareNumber, newColor }) => {
  const squares = [];

  for (let i = 0; i < squareNumber; i++) {
    squares.push(<Square key={`Square_${i}`} newColor={newColor} />);
  }

  return (
    <>
      <div className="row">{squares}</div>
    </>
  );
};
