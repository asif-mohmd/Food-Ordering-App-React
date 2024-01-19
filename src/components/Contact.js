import { useState } from "react";

const Contact = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(todo);
  console.log(todos, "kkkkkkkk");
  const handleClick = () => {
    setTodos([...todos,{text:todo}]);
    setTodo("");
  };
  return (
    <div>
      <h1>Contact us page</h1>

      <input
        type="text"
        value={todo}
        className="border border-black"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />

      <button onClick={() => handleClick()}>Click Me</button>


      <ul className="border border-black">
        {todos.map((t,index) => (
          <li key={index} className="font-bold text-black ">{t.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
