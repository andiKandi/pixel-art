import React from "react";

interface DownloadButtonProps {
  filetype: string;
  screenshot: (filetype: string) => void;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  filetype,
  screenshot,
}) => {
  return (
    <button
      role="button"
      className="button"
      onClick={() => {
        screenshot(filetype);
      }}
    >
      {filetype}
    </button>
  );
};
