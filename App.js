import React from "react"
import  ReactDOM  from "react-dom/client"


const Heading = () =>(
    <div id="container">
         <h1>Hellow World</h1>
    </div>
      
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading/>)