import React from "react";
import { GridSizeButton } from "./GridSizeButton";
import "./GridSizeController.css";

interface GridSizeControllerProps {
  setGridSize: (size: number) => void;
}

export const GridSizeController: React.FC<GridSizeControllerProps> = ({
  setGridSize,
}) => {
  return (
    <>
      <h2>Set Grid Size</h2>
      <section className="grid-size-controller">
        <GridSizeButton size={8} setGridSize={setGridSize} />
        <GridSizeButton size={12} setGridSize={setGridSize} />
        <GridSizeButton size={16} setGridSize={setGridSize} />
        <GridSizeButton size={32} setGridSize={setGridSize} />
      </section>
    </>
  );
};
