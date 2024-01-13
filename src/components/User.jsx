import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);



console.log("Render")
  return (
    <div className="user-card">

      <h1>Count = {count}</h1>
      <h1>Count 2 = {count2}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >Increasing Button</button>

      <h2>Name: {props.name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: </h4>
    </div>
  );
};

export default User;
