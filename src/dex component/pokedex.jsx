import React, { useState, useRef, useEffect } from "react";

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
      <div className=" p-2 text-center m-auto  w-auto sm:w-[450px] sm:h-auto sm:rounded-2xl   bg-gray-400 font-serif font-bold">
        <h3 className="text-4xl pb-2">Pokedex</h3>
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
            className="bg-white border-none  w-[270px]   px-2  mx-2 sm:mx-4"
          />
          <button
            onClick={handleF}
            className="bg-green-600 mr-[10px] sm:mx-0 text-white px-2 "
          >
            Fetch
          </button>

          {!poke && (
            <h3 className="text-red-700 my-3 text-3xl underline">{errormsg}</h3>
          )}
          {poke && <Info1 />}

          {poke && <Info2 />}
        </Info.Provider>
      </div>
    </>
  );
}
export default Dex;
