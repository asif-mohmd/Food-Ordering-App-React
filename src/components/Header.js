import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="flex justify-between">
      <div className="logoContainer">
        <img className="w-40" src={LOGO_URL} alt="" />
      </div>

      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
          <li>Cart</li>

          <button
            className="login"
            onClick={() => {
              btnName === "Login" ?
                setbtnName("Logout") :
                setbtnName("Login")
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
