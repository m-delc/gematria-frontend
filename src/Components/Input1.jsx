import React, { useState, useEffect } from "react";
import "../App.css";

const Input1 = () => {
  const [alphabet, setAlphabet] = useState(null);
  const [inputtest, setinputtest] = useState("");

  const fetchAlphabet = async () => {
    const data = await fetch("http://localhost:3000/alphabets");
    const json = await data.json();
    // console.log(json)
    setAlphabet(json);
  };

  useEffect(() => {
    fetchAlphabet().catch(console.error);
  }, []);

  console.log(alphabet)

  const aaa = inputtest.split("");
  //   console.log(aaa)
  //   console.log(inputtest)

  return (
    <div>
      <input
        type="text"
        value={inputtest}
        onChange={(e) => setinputtest(e.target.value)}
      ></input>
      <br></br>
      {aaa}
    </div>
  );
};

export default Input1;
