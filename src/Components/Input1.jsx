import React, { useState, useEffect } from "react";
import "../App.css";
import { useAtom } from "jotai";
import { alphabetAtom } from "../State.jsx";
import { v4 } from "uuid";

const Input1 = () => {
  const [alphabet, setAlphabet] = useAtom(alphabetAtom);
  const [inputtest, setinputtest] = useState("");

  const fetchAlphabet = async () => {
    const data = await fetch("http://localhost:3000/alphabets");
    const json = await data.json();
    setAlphabet(json);
  };

  useEffect(() => {
    fetchAlphabet().catch(console.error);
  }, []);

  // console.log(alphabet);
  // const aaa = inputtest.split("");
  console.log();

  return (
    <div>
      <input
        type="text"
        value={inputtest}
        onChange={(e) => setinputtest(e.target.value)}
      ></input>
      <br></br>
      {inputtest
        ? alphabet
            .filter((x) => x.letter === inputtest)
            .map((filteredLetter) => (
              <li key={v4()}>{filteredLetter.values.english_ordinal}</li>
            ))
        : null}
    </div>
  );
};

export default Input1;
