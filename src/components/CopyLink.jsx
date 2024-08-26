import React from "react";

// CopyLink component
const CopyLink = ({ link }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link)
  };
  return (
    <img className="copy" onClick={handleCopy} src="/src/assets/Copy.svg" alt="Copy Link" />
  );
};

export default CopyLink;