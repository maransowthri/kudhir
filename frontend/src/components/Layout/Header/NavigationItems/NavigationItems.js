import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <div>
      <ul>
        <li>
          <NavigationItem to="/mvc">MVC</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/story">Story</NavigationItem>
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
