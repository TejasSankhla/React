import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
function App() {
  let [color, setColor] = useState("red");
  function changeColor(color) {
    setColor(color);
  }
  return (
    <>
    <Navbar/>
      <div
        className="fixed h-screen w-screen text-center  "
        style={{ backgroundColor: color }}
      >
        <div className="px-4 py-2 rounded bg-blue-500">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 mx-5 my-5 text-sm font-semibold text-white shadow-sm"
            onClick={() => {
              changeColor("black");
            }}
          >
            Black
          </button>
          <button
            type="button"
            className="rounded-md bg-white px-3 py-2 mx-5 my-5 text-sm font-semibold text-black shadow-sm"
            onClick={() => {
              changeColor("white");
            }}
          >
            White
          </button>
          <button
            type="button"
            className="rounded-md bg-red-600 px-3 py-2 mx-5 my-5 text-sm font-semibold text-white shadow-sm"
            onClick={() => {
              changeColor("red");
            }}
          >
            Red
          </button>
          <button
            type="button"
            className="rounded-md bg-yellow-300 px-3 py-2 mx-5 my-5 text-sm font-semibold text-black shadow-sm"
            onClick={() => {
              changeColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            type="button"
            className="rounded-md bg-violet-400 px-3 py-2 mx-5 my-5 text-sm font-semibold text-black shadow-sm"
            onClick={() => {
              changeColor("orchid");
            }}
          >
            Lavender
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
