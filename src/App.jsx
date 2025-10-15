import React, { useState, useRef, useEffect } from "react";
import { Info1 } from "./dexcomponent/pokeImg";
import Info2 from "./dexcomponent/pokestats";
import { Info } from "./dexcomponent/context";

function App() {
  const [poke, setPoke] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const name = useRef("");
  useEffect(() => {
    name.current.focus();
  });

  function handleF() {
    const value = name.current.value;
    process(value);
  }
  async function process(code) {
    if (code === "") {
      seterrormsg("please enter a pokemon name or id");
      setPoke("");
      return;
    }
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${code}`);
      if (!data.ok) {
        throw new Error("Pokemon not found");
      }
      const response = await data.json();
      setPoke(response);

      seterrormsg("");
      name.current.value = "";
    } catch (error) {
      setPoke("");
      seterrormsg(error.message);
    }
  }

  return (
    <>
      <div
        className="text-center min-h-screen  
          font-bold text-white bg-[#3e3c3c]"
      >
        <h3
          className="text-5xl text-shadow-black 
         text-shadow-lg  "
        >
          Pokedex
        </h3>
        <Info.Provider value={poke}>
          <div
            className="flex flex-wrap p-3 bg-gray-600
           justify-center mt-2  items-center gap-5"
          >
            <input
              type="text"
              ref={name}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleF();
                }
              }}
              className="bg-white text-black
              shadow-black  shadow-xl
             border-none  w-md h-10  text-xl"
            />

            <button
              onClick={handleF}
              className="bg-red-600 
               w-20 h-10 text-xl rounded-lg text-white hover:scale-110 duration-300 transition-all"
            >
              Catch
            </button>
            <div className="bg-green-500 text-2xl w-72 border-2  p-2 rounded-xl">
              <h2>Serch for a pokemon name or using its id.</h2>
            </div>
          </div>
          {!poke && errormsg && (
            <div
              className=" bg-red-600 rounded-3xl md:w-xl flex
             justify-center items-center m-auto h-20 mt-12  p-4
             shadow-black shadow-lg
             "
            >
              <h3
                className="text-amber-100 text-4xl 
            text-shadow-md text-shadow-black "
              >
                {errormsg}
              </h3>
            </div>
          )}
          <div className="flex flex-wrap ">
            {poke && <Info1 />}

            {poke && <Info2 />}
          </div>
        </Info.Provider>
      </div>
    </>
  );
}
export default App;
