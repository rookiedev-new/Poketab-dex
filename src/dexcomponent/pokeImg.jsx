import React, { useContext } from "react";
import { Info } from "./context";

export const Info1 = () => {
  const dataobj = useContext(Info);
  const { sprites, name, types } = dataobj;

  const pokeimg = sprites.front_default;
  const pokeimgshiny = sprites.front_shiny;
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
        color = "#c5eb19";
        break;
      case "rock":
        color = "#913f3f";
        break;
      case "ghost":
        color = "#510071f9";
        break;
      case "dragon":
        color = "#530399";
        break;
      case "dark":
        color = "#000000ce";
        break;
      case "steel":
        color = "#565656";
        break;
      case "fairy":
        color = "pink";
        break;

      default:
        color = "gray";
    }
    const colorshade = {
      border: "3px solid white",
      backgroundColor: color,

      display: "inline-block",
    };

    return (
      <span
        key={idx}
        style={colorshade}
        className="text-2xl md:text-3xl rounded-2xl w-28 md:w-32 py-1 mx-1    text-white"
      >
        {t.type.name}
      </span>
    );
  });

  return (
    <div className="  w-2xl mx-auto p-2 ">
      <div
        className="  py-2 flex justify-center items-center
       text-black  gap-6 text-xl"
      >
        <div className=" w-1/3 ">
          <img className="size-[100%] scale-125" src={pokeimg} alt="img" />
          <h1>Base Form</h1>
        </div>
        <div className=" w-1/3">
          <img src={pokeimgshiny} className="size-[100%] scale-125" alt="img" />
          <h1>Shiny Form</h1>
        </div>
      </div>
      <div className=" py-2">
        <h3 className="text-3xl ">Name : {pokename}</h3>
        <h3 className="text-3xl pt-4">Type :{poketype}</h3>
      </div>
    </div>
  );
};
