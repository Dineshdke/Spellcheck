import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleChange = (e)=>{
    const {value} = e.target;
    setInput(value.toLowerCase());
    const words = input.split(' ');
    const correctedwords = words.map((item) => {
      const word = customDictionary[item.toLocaleLowerCase()] ;
      return word || item ;
    });
    let correctedText = correctedwords.join(' ');
    console.log(correctedwords)
    console.log(words)
    const firstCorrection = correctedwords.find((word,idx)=>{
      return word!==(words[idx]);
    });

    setSuggestions(firstCorrection);
  }

  



  return (
    <>
      <h2>Spell Check and Auto-Correction</h2>
      <textarea name="textarea" placeholder="Enter text..." value={input} onChange={handleChange}></textarea>
      {suggestions ? <div>Did you mean: <strong>{suggestions}?</strong></div> : ''}
    </>
  );
}

export default App;

