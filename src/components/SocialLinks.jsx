import linkedImg from "/src/assets/linkedin.svg";
import githubImg from "/src/assets/github.svg";

// SocialLinks component
const SocialLinks = () => {
  //social-links div
  return (
    <div className="social-links">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/lee-a-west/" target="_blank">
        <img src={linkedImg} alt="LinkedIn Profile" />
      </a>
      {/* Github */}
      <a href="https://github.com/LeeWest89/atlas-react-and-jsx.git" target="_blank">
        <img src={githubImg} alt="Github Profile" />
      </a>
    </div>
  );
};

export default SocialLinks;