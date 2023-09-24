import { useState, useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(false);
  const [result, setResult] = useState("");

  // code to handle password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str = str + 1234567890;
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setResult(pass);
    console.log(result);
  }, [length, numberallowed, setNumberAllowed, setResult]);
 
  useEffect(()=>{
    passwordGenerator();
  },[length,numberallowed])

  // code to handle copy
  const handlecopy = () => {
    if (result) {
      navigator.clipboard
        .writeText(result)
        .then(() => {
          toast.success("Password copied to clipboard!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        })
        .catch((error) => {
          console.error("Copy failed:", error);
        });
    } else {
      alert("No password to copy.");
    }
  };
  

  return (
    <>
   
      <div className="main_hero">
        <div className="innercontent">
          <div className="heading">
            <h1>Password Generator</h1>
            <div className="copy_section">
              <input
                type="text"
                value={result}
                readOnly
                placeholder="Generated Password"
              />
              <div className="copy_button">
                <button onClick={handlecopy}>Copy</button>
              </div>
              <div className="range_section">
                <input
                  type="range"
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                  min="6"
                  max="45"
                />
                <h3>Legth ({length})</h3>
              </div>
            </div>
            <div className="checklist">
              <div className="check1">
                <span>Numbers </span>
                <input
                  type="checkbox"
                  checked={numberallowed}
                  onChange={() => setNumberAllowed((prevValue) => !prevValue)}
                />
              </div>
              <div className="check2">
                <button onClick={passwordGenerator}>Result</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
