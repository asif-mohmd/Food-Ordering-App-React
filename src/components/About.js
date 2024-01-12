import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class AboutClass extends React.Component{
    constructor(){
        super()

        console.log("Parent Constructor")
    }

    

    componentDidMount(){
        console.log("Parent Component Did Mount")
    }

    render(){
        console.log("Parent Rendering Function")
        return(
            <div>
        
            <h1>About Class</h1>
            <User name={"Asif Function"}/>
            <UserClass name={"Asif Class"} job={"Software Development"}/>
          </div>
        )
    }
}


export default AboutClass;



// const About = () => {
//     return (
//       <div>
          
//         <h1>About page</h1>
//         <User name={"Asif Function"}/>
//         <UserClass name={"Asif Class"} job={"Software Development"}/>
//       </div>
//     );
//   };
  