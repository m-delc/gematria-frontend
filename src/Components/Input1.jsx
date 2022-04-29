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

  const englishOrdinal = inputtest
    ? alphabet
        .filter((x) => x.letter === inputtest)
        .map((filteredLetter) => filteredLetter.values[0].english_ordinal)
    : null;

  const fullReduction = inputtest
    ? alphabet
        .filter((x) => x.letter === inputtest)
        .map((filteredLetter) => filteredLetter.values[0].full_reduction)
    : null;
  const reverseOrdinal = inputtest
    ? alphabet
        .filter((x) => x.letter === inputtest)
        .map((filteredLetter) => filteredLetter.values[0].reverse_ordinal)
    : null;
  const reverseFullReduction = inputtest
    ? alphabet
        .filter((x) => x.letter === inputtest)
        .map(
          (filteredLetter) => filteredLetter.values[0].reverse_full_reduction
        )
    : null;

  // console.log(englishOrdinal);

  return (
    <div>
      <input
        type="text"
        value={inputtest}
        onChange={(e) => setinputtest(e.target.value)}
      ></input>
      <br></br>
      {/* {inputtest
        ? alphabet
            .filter((x) => x.letter === inputtest)
            .map((filteredLetter) => (
              <li key={v4()}>{filteredLetter.values.english_ordinal}</li>
            ))
        : null} */}
      English Ordinal: {englishOrdinal}
      <br></br>
      Full Reduction: {fullReduction}
      <br></br>
      Reverse Ordinal: {reverseOrdinal}
      <br></br>
      Reverse Full Ordinal: {reverseFullReduction}
    </div>
  );
};

export default Input1;
