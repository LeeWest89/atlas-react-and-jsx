import React from "react";
import Greeting from "./Greeting";
import SocialLinks from "./SocialLinks";

// Header component
const Header = () => {
  return (
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  );
};

export default Header;