import React, { useContext } from "react";
import { Info } from "./context";

export const Info2 = () => {
  const dataobj = useContext(Info);
  const { abilities, stats } = dataobj;

  const pokeskill = abilities.map((a, idx) => {
    return (
      <span key={idx} className="px-1">
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
      width: `${s.base_stat}px`,
      height: "8px",
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
      <li key={i} className="m-1 font-bold">
        <div className="flex items-center m-auto  gap-5 px-5">
          <div className="w-[60px]">{statLabel}</div>
          <div className="w-[30px]"> {s.base_stat}</div>
          <div>
            <h3 style={statscolor} className="rounded-xl"></h3>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <h3 className="text-xl font-bold my-1"> Ability: {pokeskill}</h3>

      <h3 className="bg-gray-500 m-auto rounded-2xl mx-4 my-2 py-2 h-[220px]">
        <p className="text-2xl">Stats: </p> <ul>{pokestats}</ul>
      </h3>
    </div>
  );
};
