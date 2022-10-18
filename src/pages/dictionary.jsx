import { useState, useEffect } from "react";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [word2, setWord2] = useState("");

  useEffect(() => {
    console.log(word, "state updated");
  }, [word]);

  useEffect(() => {
    console.log(word2, "state updated 2");
  }, [word2]);

  return (
    <div>
      <div>
        <input
          className="p-2"
          type="text"
          id="defineWord"
          onChange={(e) => setWord(e.target.value)}
        ></input>
      </div>
      <label htmlFor="defineWord">I want the definition for&nbsp;</label>
      <span className="text-xl font-bold">{word}</span>
      <div>
        <input
          className="p-2"
          type="text"
          id="defineWord2"
          onChange={(e) => setWord2(e.target.value)}
        ></input>
      </div>
      <label htmlFor="defineWord2">I want the definition for&nbsp;</label>
      <span className="text-xl font-bold">{word2}</span>
    </div>
  );
};

export default Dictionary;
