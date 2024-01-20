import { useState , useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const {loggedInUser} = useContext(UserContext)

  // Selector (Subscribing our store using Selector)
  const cartItems = useSelector((store)=> store.cart.items)
  
    
  return (
    <div className="flex justify-between bg-slate-100  shadow-lg m-2">
      <div className="logoContainer m-5">
        <img className="w-20" src={LOGO_URL} alt="" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2"><Link to={"/"}>Home</Link></li>
          <li className="px-2"><Link to={"/about"}>About Us</Link></li>
          <li className="px-2"><Link to={"/contact"}>Contact Us</Link></li>
          <li className="px-2"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="px-2"><Link to={"/cart"}>Cart ({cartItems.length} items)</Link></li>

          <button
            className="login pl-4"
            onClick={() => {
              btnName === "Login" ?
                setbtnName("Logout") :  
                setbtnName("Login")
            }} 
          >
            {btnName}
          </button>
          <li className="pl-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
