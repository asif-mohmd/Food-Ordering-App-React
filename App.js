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


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>

        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)