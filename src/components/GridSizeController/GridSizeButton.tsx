import React from "react";

interface GridSizeButtonProps {
  size: number;
  setGridSize: (size: number) => void;
}

export const GridSizeButton: React.FC<GridSizeButtonProps> = ({
  size,
  setGridSize,
}) => {
  return (
    <button role="button" className="button" onClick={() => setGridSize(size)}>
      {`${size}x${size}`}
    </button>
  );
};
