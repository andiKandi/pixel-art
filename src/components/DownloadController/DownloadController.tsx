import html2canvas from "html2canvas";
import React from "react";
import { DownloadButton } from "./DownloadButton";

export const DownloadController = () => {
  const downloadImage = (image: string, fileName: string) => {
    const downloadLink = window.document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.href = image;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    downloadLink.remove();
  };

  const screenshot = async (fileType: string) => {
    if (document.getElementById("grid")) {
      const canvas = await html2canvas(document.getElementById("grid")!);
      if (fileType === "jpeg" || fileType === "png") {
        const image = canvas.toDataURL(`image/${fileType}`, 1.0);
        downloadImage(image, `Pixel-Art_${new Date().getTime()}`);
      } else {
        const image = canvas.toDataURL(`image/${fileType}`, 1.0);
        downloadImage(image, `Pixel-Art_${new Date().getTime()}.gif`);
      }
    }
  };

  return (
    <div className="download-controller">
      <h2>Download Your Art</h2>
      <DownloadButton filetype={"png"} screenshot={screenshot} />
      <DownloadButton filetype={"jpeg"} screenshot={screenshot} />
      <DownloadButton filetype={"gif"} screenshot={screenshot} />
    </div>
  );
};
