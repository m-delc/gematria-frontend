import React, { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { alphabetAtom } from "../State.jsx";

const [, setAlphabet] = useAtom(alphabetAtom);

const fetchAlphabet = async () => {
  const data = await fetch("http://localhost:3000/alphabets");
  const json = await data.json();
  setAlphabet(json);
};

export default fetchAlphabet;
