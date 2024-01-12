import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


function RestaurantMenu() {
    const [resInfo,setResInfo] = useState("")

    useEffect(()=>{
       fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8985899&lng=77.6514648&restaurantId=334867&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json()

        console.log(json)
        // setResInfo(json?.data?.card[0].card.card)
    }

    if(resInfo === null){
        return <Shimmer/>
    }

  


  return resInfo === null ? (<Shimmer/>) : (
    <div className="menu">
        <h1>Name of the Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biriyani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
} 

export default RestaurantMenu;