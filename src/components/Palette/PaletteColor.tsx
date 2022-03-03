import React from "react";
import "./PaletteColor.css";

interface PaletteColorProps {
  color: string;
  setNewColor: (color: string) => void;
  chosen: boolean;
}

export const PaletteColor: React.FC<PaletteColorProps> = ({
  color,
  setNewColor,
  chosen,
}) => {
  return (
    <>
      <button
        className={chosen ? "palette__color--chosen" : "palette__color"}
        onClick={() => {
          setNewColor(color);
        }}
        style={{ backgroundColor: color }}
      />
    </>
  );
};
