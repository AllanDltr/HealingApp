import { useState } from "react";
import abilityData from "./abilityData.json";
import { AbilityIcon } from "./abilityIcon";

export function SimulationDisplay() {
  const [isActive, setIsActive] = useState(false);
  const [classSelected, setClassSelected] = useState("");

  const filteredAbilities = abilityData.filter((ability) => {
    return ability.spec === classSelected;
  });

  const toggleOpacity = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="grid grid-cols-6 gap-4 mb-4">
      <div className="flex flex-col">
        {" "}
        <label> Base damage </label>
        <input placeholder="100000" />
      </div>
      <div className="flex flex-col">
        <label> Kind of damage </label>
        <div className="flex flex-row">
          <button
            className={`px-4 py-2 text-sm text-white bg-teal-600 rounded-1 ${
              isActive ? "opacity-30" : ""
            }`}
            onClick={toggleOpacity}
          >
            Single
          </button>
          <button
            className={`px-4 py-2 text-sm text-white bg-teal-600 rounded-1 ${
              isActive ? "opacity-30" : ""
            }`}
          >
            AoE
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label> Type of damage </label>
        <div className="flex flex-row">
          <button
            className={`px-4 py-2 text-sm text-white bg-teal-600 rounded-1 ${
              isActive ? "opacity-30" : ""
            }`}
            onClick={toggleOpacity}
          >
            Magical
          </button>
          <button
            className={`px-4 py-2 text-sm text-white bg-teal-600 rounded-1 ${
              isActive ? "opacity-30" : ""
            }`}
          >
            Physical
          </button>
        </div>
      </div>
      <select
        value={classSelected}
        onChange={(e) => setClassSelected(e.target.value)}
      >
        <option value="">Sélectionnez une classe</option>
        <option value="BM">Hunter Beast Mastery</option>
        <option value="équilibre">Druide Equilibre</option>
        // Add more options as needed
      </select>

      {filteredAbilities.map((ability, index) => (
        <AbilityIcon
          key={index}
          src={ability.src}
          alt={ability.alt}
          title={ability.title}
        />
      ))}
    </div>
  );
}
