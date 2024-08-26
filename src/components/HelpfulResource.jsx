import React from "react";
import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

// HelpfulResouce component
const HelpfulResouce = ({ link, label }) => {
  return (
    <div className="helpful-resource">
      {label}
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
};

export default HelpfulResouce;