import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <NavigationItem to="/members">Members</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/feed">Feed</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/about">About</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/signin">SignIn</NavigationItem>
        </li>
      </ul>
    </div>
  );
};

export default NavigationItems;
