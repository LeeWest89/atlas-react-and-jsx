import copyImg from "/src/assets/copy.svg";

// CopyLink component
const CopyLink = ({ link }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link)
  };
  return (
    <img className="copy" onClick={handleCopy} src={copyImg} alt="Copy Link" />
  );
};

export default CopyLink;