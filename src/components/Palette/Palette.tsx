import React from "react";
import "./Palette.css";
import { PaletteColor } from "./PaletteColor";

interface PaletteProps {
  newColor: string;
  setNewColor: (color: string) => void;
}

export const Palette: React.FC<PaletteProps> = ({ newColor, setNewColor }) => {
  const colors = [
    "red",
    "violet",
    "green",
    "blue",
    "yellow",
    "orange",
    "white",
    "black",
    "pink",
    "brown",
  ];

  return (
    <>
      <h2>Color</h2>
      <div className="palette">
        {colors.map((color) => {
          const chosen = newColor === color;
          return (
            <PaletteColor
              key={color}
              chosen={chosen}
              color={color}
              setNewColor={setNewColor}
            />
          );
        })}
      </div>
    </>
  );
};
