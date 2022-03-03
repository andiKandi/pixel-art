import React from "react";
import { Row } from "../Row/Row";

interface GridProps {
  rowNumber: number;
  newColor: string;
}

export const Grid: React.FC<GridProps> = ({ rowNumber, newColor }) => {
  const rows = [];
  for (let i = 0; i < rowNumber; i++) {
    rows.push(
      <Row key={`Row_${i}`} squareNumber={rowNumber} newColor={newColor} />
    );
  }
  return (
    <>
      <div id="grid" className="grid">
        {rows}
      </div>
    </>
  );
};
