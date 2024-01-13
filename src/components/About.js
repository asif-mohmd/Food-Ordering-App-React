import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutClass extends React.Component {
  // Actually, contructor is needed only when a props comes here.otherwise dont


  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>About Class</h1>
        {/* <User/> */}
        <UserClass />
      </div>
    );
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
