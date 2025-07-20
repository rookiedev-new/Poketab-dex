import React, { useState, useRef, useEffect } from "react";
import "./pokedex.css";
import { Info1 } from "./pokeImg";
import { Info2 } from "./pokestats";
import { Info } from "./context";
function Dex() {
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
      <div className=" p-2 text-center m-auto   w-[450px] sm:rounded-2xl h-auto  bg-gray-400 font-serif font-bold">

        <h3 className="sm:text-4xl text-3xl pb-2">Pokedex</h3>
        <Info.Provider value={poke}>
          <input
            type="text"
            ref={name}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleF();
              }
            }}
            placeholder="Enter Pokemon name or id no"
            className="bg-white border-none  sm:w-[250px] text-[15px] sm:text-lg  px-2 text-center mx-2 sm:mx-4"
          />
          <button onClick={handleF} className="bg-green-600 mr-[10px] sm:mx-0 text-white px-1 ">
            Fetch
          </button>

{!poke && <h3 className="text-red-700 my-3 text-3xl underline">{errormsg}</h3>}
          {poke && <Info1 />}
          
          {poke && <Info2 />}
        </Info.Provider>
      </div>
    </>
  );
}
export default Dex;
