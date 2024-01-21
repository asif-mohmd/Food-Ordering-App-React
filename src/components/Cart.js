import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  // Efficient method of subscribing the store
  const cartItems = useSelector((store) => store.cart.items);
  const clearCartItems = useDispatch()
  console.log(cartItems);
  const itemClear = () =>{
     clearCartItems(clearCart())
  } 
  return (
    <div className="text-center  m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      <button className="bg-black text-white font-semibold rounded-lg m-2 p-1"
      onClick={itemClear}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h2>Cart is empty. Add items to the cart!</h2>}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );  
};

export default Cart;
