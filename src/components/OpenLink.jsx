// OpenLink component
const OpenLink = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <img src="/src/assets/open.svg" alt="Open Link" />
    </a>
  );
};

export default OpenLink;