import React, { useState } from "react";
import { Palette } from "./components/Palette/Palette";
import { DownloadController } from "./components/DownloadController/DownloadController";
import { GridSizeController } from "./components/GridSizeController/GridSizeController";
import { Grid } from "./components/Grid/Grid";
import "./App.css";

function App() {
  const [newColor, setNewColor] = useState("white");
  const [gridSize, setGridSize] = useState(8);

  return (
    <>
      <header className="header">
        <h1>Pixel Art</h1>
      </header>
      <div className="wrapper">
        <main>
          <Grid rowNumber={gridSize} newColor={newColor} />
        </main>
        <aside>
          <GridSizeController setGridSize={setGridSize} />
          <Palette newColor={newColor} setNewColor={setNewColor} />
          <DownloadController />
        </aside>
      </div>
    </>
  );
}

export default App;
