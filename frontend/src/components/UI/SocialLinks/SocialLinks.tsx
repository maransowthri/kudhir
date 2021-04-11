import { IProjectSocial } from "interfaces/project";
import React from "react";

interface IProps {
  socials: IProjectSocial[];
}

const SocialLinks: React.FC<IProps> = ({ socials }) => {
  const SAMPLE_SOCIALS = [
    "youtube",
    "instagram",
    "facebook",
    "twitter",
    "linkedin",
  ];

  const links = socials.map((social) => {
    const url = new URL(social.link);
    const hostnameArr = url.hostname.split(".");
    const product = hostnameArr[hostnameArr.length - 2];
    const icon = SAMPLE_SOCIALS.includes(product)
      ? `fab fa-${product} fa-2x`
      : "fas fa-globe fa-2x";
    return (
      <a key={product} href={social.link} target="_blank" rel="noreferrer">
        <i className={icon}></i>
      </a>
    );
  });
  return <>{links}</>;
};

export default SocialLinks;
