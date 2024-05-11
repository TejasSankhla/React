import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pass, setpass] = useState("");
  const [passlen, setpasslen] = useState(6);
  const [digits, setdigits] = useState(false);
  const [chars, setchars] = useState(false);
  // useEffect([generatePass]);
  function generatePass() {
    var pasw = "";
    var digit = "0123456789";
    var charac = "!@#$&*";
    var store = "asdfghjklzxcvbnmqwertyuiop";
    if (digits) {
      store += digit;
    }
    if (chars) {
      store += charac;
    }
    for (var len = 1; len <= passlen; len++) {
      let ind = Math.floor(Math.random() * store.length);
      pasw += store[ind];
      setpass(pasw);
    }
  }

  return (
    <div class="container">
      <h1>Password Generator</h1>

      <div class="Password_bar">
        <input
          type="text"
          id="input_pass"
          placeholder="password"
          readOnly
          value={pass}
          style={{ fontFamily: "serif", fontSize : "20px" }}
        />
        <button id="gen" onClick={generatePass}>
          {" "}
          Generate
        </button>
      </div>
      <div class="options">
        <div class="left-most">
          <span style={{ color: "white", padding: "2px" }}>Length </span>
          <input
            type="range"
            name="pass_length"
            min="6"
            max="10"
            id="pass_len"
            value={passlen}
            onChange={(e) => setpasslen(e.target.value)}
          />
          <label for="pass_len" style={{ fontSize: "25px", margin: "0 10px" }}>
            {passlen}
          </label>
        </div>
        <div class="right-most" style={{ margin: "0 2rem" }}>
          <label for="num_checkbox">
            <input
              type="checkbox"
              name="include_numbers"
              id="num_checkbox"
              checked={digits}
              onChange={(e) => setdigits(e.target.checked)}
            />
            Digits
          </label>
          <label for="num_checkbox" style={{ margin: "2rem" }}>
            <input
              type="checkbox"
              name="include_numbers"
              id="num_checkbox"
              checked={chars}
              onChange={(e) => setchars(e.target.checked)}
            />
            [\@#$]
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
