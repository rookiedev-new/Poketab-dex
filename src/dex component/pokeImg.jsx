import React, { useContext } from "react";
import { Info } from "./context";

export const Info1 = () => {
  const dataobj = useContext(Info);
  const { sprites, name, types } = dataobj;

  const pokeimg = sprites.front_default;
  const pokename = name;
  const poketype = types.map((t, idx) => {
    let color;
    switch (t.type.name) {
      case "fire":
        color = "red";
        break;
      case "water":
        color = "#005c85";
        break;
      case "grass":
        color = "green";
        break;
      case "electric":
        color = "yellow";
        break;
      case "ice":
        color = "aqua";
        break;
      case "fighting":
        color = "brown";
        break;
      case "poison":
        color = "purple";
        break;
      case "ground":
        color = "#ff5722";
        break;
      case "flying":
        color = "skyblue";
        break;
      case "psychic":
        color = "#f84a68";
        break;
      case "bug":
        color = "#8aeb19";
        break;
      case "rock":
        color = "#795548";
        break;
      case "ghost":
        color = "#370b36";
        break;
      case "dragon":
        color = "#673ab7";
        break;
      case "dark":
        color = "black";
        break;
      case "steel":
        color = "silver";
        break;
      case "fairy":
        color = "lightpink";
        break;

      default:
        color = "#a4a49e";
        break;
    }
    const colorshade = {
     
      border: "3px solid white",
      backgroundColor: color, 
    };

    return (
      <span key={idx} style={colorshade} className="text-xl py-2 mx-2 rounded-2xl px-3 text-white">
        {t.type.name}
      </span>
    );
  });

  return (
  
    <div className="relative">
      <div className="absolute left-[80px] top-[18px] m-auto w-[300px] h-[180px] bg-blue-400 rounded-2xl border-4 border-white "></div>
      <img className="relative left-[110px] w-[210px] h-[200px]" src={pokeimg} alt="img" />
      <h3 className="text-3xl my-2 sm:my-3">
        Name:{pokename}
      </h3>
      <h3 className="sm:text-3xl text-2xl my-3 sm:my-4">
        <span >Type:</span>
        {poketype}
      </h3>
    </div>
  );
};
