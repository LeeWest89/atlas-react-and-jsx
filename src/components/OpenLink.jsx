import openImg from "/src/assets/open.svg";

// OpenLink component
const OpenLink = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <img src={openImg} alt="Open Link" />
    </a>
  );
};

export default OpenLink;