import React from "react"
import  ReactDOM  from "react-dom/client"


const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNdcsoiIdR5WbgEeSXjKPuEKJ3FHASgnWTw&usqp=CAU" alt="" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestaurantCard = () =>{
    return(
        <div className="res-card" style={{backgroundColor:"rgb(249, 249, 248)"}}>
          <img className="RestaurantCardImg" src="https://b.zmtcdn.com/data/pictures/chains/4/50574/3faca0f3f3635c659e15c0504873c503_o2_featured_v2.jpg" alt="" />
            <h3 className="RestaurantCardName">Meghana Foods</h3>
        </div>
    )

}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>

        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)