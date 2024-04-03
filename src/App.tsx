import { useState } from "react";
import raidData from "../src/components/raidData.json";
import { AbilityDisplay } from "./components/abilityDisplay";
import { RaidBlock } from "./components/raidBlock";
import { SimulationDisplay } from "./components/simulationDisplay";
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

  const handleRaidBlockClick = (RaidBoss: RaidBossProps) => {
    setSelectedBoss(RaidBoss);
  };

  const statsData = [{ label: "Damage scaling:", value: "1" }];

  return (
    <div className="h-screen font-sans text-white bg-gray-900 ">
      <div className="p-4 mx-auto ">
        {/* Top section */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Left panel */}
          <div className="p-4 bg-gray-800 rounded-lg">
            <SimulationDisplay />
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
