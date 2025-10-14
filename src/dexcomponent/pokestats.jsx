import React, { useContext } from "react";
import { Info } from "./context";

const Info2 = () => {
  const dataobj = useContext(Info);
  const { abilities, stats } = dataobj;

  const pokeskill = abilities.map((a, idx) => {
    return (
      <span key={idx} className="px-2 ">
        {a.ability.name}
      </span>
    );
  });

  const pokestats = stats.map((s, i) => {
    let statcol = "";
    switch (true) {
      case s.base_stat < 50:
        statcol = "red";
        break;
      case s.base_stat < 70:
        statcol = "orange";
        break;
      case s.base_stat < 90:
        statcol = "yellow";
        break;
      default:
        statcol = "green";
        break;
    }

    const statscolor = {
      backgroundColor: statcol,
      width: `${(s.base_stat)/2}%`,
      height: "11px",
      display: "inline-block",
    };

    let statLabel = "";
    switch (s.stat.name) {
      case "special-attack":
        statLabel = "Sp.Atk";
        break;
      case "special-defense":
        statLabel = "Sp.Def";
        break;
      case "attack":
        statLabel = "Atk";
        break;
      case "defense":
        statLabel = "Def";
        break;
      case "speed":
        statLabel = "Speed";
        break;
      case "hp":
        statLabel = "HP";
        break;
      default:
        statLabel = s.stat.name;
        break;
    }

    return (
      <li key={i} className="m-2 font-bold text-xl">
        <div className="flex items-center m-auto  gap-4 px-5">
          <div className="w-[80px] text-right ">{statLabel}</div>
          <div className="w-[35px]"> {s.base_stat}</div>
          <div className=" w-[80%] flex ">
            <h3  style={statscolor} className="rounded-xl 
             shadow-md shadow-black"></h3>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className=" mx-auto p-1">
      <h3 className="text-3xl font-bold py-2"> Ability :{pokeskill}</h3>

      <div className="bg-gray-800  m-auto 
       shadow-2xl shadow-black rounded-2xl w-lg p-2">
        <p className="text-4xl ">Stats: </p>
         <ul>{pokestats}</ul>
      </div>
    </div>

  );
};

export default Info2;