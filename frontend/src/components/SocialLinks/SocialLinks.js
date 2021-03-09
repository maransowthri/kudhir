import React from "react";

const SocialLinks = ({ socials }) => {
  const links = socials.map((link) => {
    const url = new URL(link);
    const hostnameArr = url.hostname.split(".");
    const product = hostnameArr[hostnameArr.length - 2];
    return (
      <a key={product} href={link} target="_blank" rel="noreferrer">
        <i className={`fab fa-${product} fa-2x`}></i>
      </a>
    );
  });
  return <>{links}</>;
};

export default SocialLinks;
