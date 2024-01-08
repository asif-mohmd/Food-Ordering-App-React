import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [login,setLogin] = useState("Login")



  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li> 
          <li>Contact us</li>
          <li>Cart</li>
        
          <button className="login" onClick={()=>{setLogin("Logout")}}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
