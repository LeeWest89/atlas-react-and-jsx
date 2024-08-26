import React from 'react'

// SocialLinks component
const SocialLinks = () => {
  //social-links div
  return (
    <div className="social-links">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/lee-a-west/" target="_blank">
        <img src="/src/assets/linkedin.svg" alt="LinkedIn Profile" />
      </a>
      {/* Github */}
      <a href="https://github.com/LeeWest89/atlas-react-and-jsx.git" target="_blank">
        <img src="/src/assets/github.svg" alt="Github Profile" />
      </a>
    </div>
  );
};

export default SocialLinks;