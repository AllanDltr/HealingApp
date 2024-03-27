import { useState } from "react";
import abilityData from "../src/components/abilityData.json";
import raidData from "../src/components/raidData.json";
import { AbilityDisplay } from "./components/abilityDisplay";
import { AbilityIcon } from "./components/abilityIcon";
import { RaidBlock } from "./components/raidBlock";
import { Stat } from "./components/stats";

interface AbilityDetail {
  abilityName: string;
  baseDamage: number;
  isAoe: boolean;
  iconName: string;
  wowheadLink: string;
  iconImg: string;
}
interface RaidBossProps {
  id: number;
  name: string;
  imageAlt: string;
  picture: string;
  abilities: AbilityDetail[];
}

export const HealingApp = () => {
  const [selectedBoss, setSelectedBoss] = useState<RaidBossProps | null>(null);
  const [classSelected, setClassSelected] = useState("");

  const handleRaidBlockClick = (RaidBoss: RaidBossProps) => {
    setSelectedBoss(RaidBoss);
  };

  const filteredAbilities = abilityData.filter((ability) => {
    return ability.spec === classSelected;
  });

  const statsData = [{ label: "Damage scaling:", value: "11:83" }];

  return (
    <div className="h-screen font-sans text-white bg-gray-900 ">
      <div className="p-4 mx-auto ">
        {/* Top section */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Left panel */}
          <div className="p-4 bg-gray-800 rounded-lg">
            {/* ... Left panel content ... */}
            <div className="grid grid-cols-6 gap-4 mb-4">
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
            {/* ... Rest of the Left Panel ... */}
          </div>

          {/* Right panel */}
          <div className="p-4 bg-gray-800 rounded-lg">
            <h2 className="mb-4 text-3xl font-bold text-red-500">
              You die or you live
            </h2>
            {statsData.map((stat, index) => (
              <Stat key={index} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>

        {/* Bottom section with bosses */}
        <div className="grid grid-cols-2 gap-4 pb-16 mt-8 md:grid-cols-4 lg:grid-cols-8">
          {raidData.map((RaidBoss, index) => (
            <RaidBlock
              key={index}
              picture={RaidBoss.picture}
              name={RaidBoss.name}
              imageAlt={RaidBoss.imageAlt}
              onClick={() => handleRaidBlockClick(RaidBoss)}
            />
          ))}
        </div>
        {selectedBoss && <AbilityDisplay boss={selectedBoss} />}
      </div>
    </div>
  );
};

export default HealingApp;
