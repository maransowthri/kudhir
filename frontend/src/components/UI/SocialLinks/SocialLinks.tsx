import React from "react";

interface IProps {
  socials: string[];
}

const SocialLinks: React.FC<IProps> = ({ socials }) => {
  const SOCIALS = ["youtube", "instagram", "facebook", "twitter", "linkedin"];

  const links = socials.map((link) => {
    const url = new URL(link);
    const hostnameArr = url.hostname.split(".");
    const product = hostnameArr[hostnameArr.length - 2];
    const icon = SOCIALS.includes(product)
      ? `fab fa-${product} fa-2x`
      : "fas fa-globe fa-2x";
    return (
      <a key={product} href={link} target="_blank" rel="noreferrer">
        <i className={icon}></i>
      </a>
    );
  });
  return <>{links}</>;
};

export default SocialLinks;
