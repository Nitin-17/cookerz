import { useState } from "react";
import icon from "../assets/cooknew.png";

const Title = () => <img src={icon} alt="Food Logo" className="logo" />;

const loggedUser = () => {
  //API call to check authentication
  return true;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title /> {/* Component Composition */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Use</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            {isLoggedIn ? (
              <button
                className="search-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="search-btn"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header; //used for a single export function

/* 

use :
export const Title=()=> to export the component and use import {Title} to import the component

*/
