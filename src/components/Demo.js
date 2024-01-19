import { useMemo, useState, useRef, useCallback, useReducer } from "react";
import findNthPrime from "./helper";
// calculate value
// dependency

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  let x = 0;

  let ref = useRef(0);
  console.log(ref);

  // const prime = findNthPrime(text)
  const prime = useMemo(() => findNthPrime(text), [text]);

  // const cachedFn = useCallback(() => addTwoNum(num), [])

  
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>

      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <h1 className="font-extrabold">nth Prime: {prime}</h1>
      </div>

      <div>
        <button
          className="bg-red-300"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=", ref.current);
          }}
        >
          Click Reference Fun
        </button>
      </div>


      <span>Ref: {ref.current}</span>


      <div>
        <h2>{x}</h2>
        <button
          className="bg-orange-700"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          click normal fun
        </button>
      </div>

    </div>
  );
};

export default Demo;



