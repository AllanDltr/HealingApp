// Define the AbilityIcon component

import { useState } from "react";
import raidData from "../src/datas/raidData.json";
import { AbilityDisplay } from "./components/abilityDisplay";
import { RaidBlock } from "./components/raidBlock";

interface AbilityIconProps {
  src: string;
  alt: string;
}

interface StatProps {
  label: string;
  value: string;
}

interface RaidBossProps {
  id: number;
  name: string;
  abilities: string[];
}

const AbilityIcon = ({ src, alt }: AbilityIconProps) => (
  <img src={src} alt={alt} className="w-10 h-10" />
);

const Stat = ({ label, value }: StatProps) => (
  <div className="text-gray-300">
    {label} <span className="text-white">{value}</span>
  </div>
);

export const HealingApp = () => {
  const [selectedBoss, setSelectedBoss] = useState<RaidBossProps | null>(null);

  const handleRaidBlockClick = (RaidBoss: RaidBossProps) => {
    setSelectedBoss(RaidBoss);
  };

  const abilitiesData = [
    {
      src: "/inv_10_alchemy_bottle_shape2_black.webp",
      alt: "Ability 1 placeholder",
    },
  ];

  const statsData = [{ label: "Damage scaling:", value: "11:83" }];

  return (
    <div className="font-sans text-white bg-gray-900">
      <div className="max-w-screen-lg p-4 mx-auto">
        {/* Top section */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Left panel */}
          <div className="p-4 bg-gray-800 rounded-lg">
            {/* ... Left panel content ... */}
            <div className="grid grid-cols-6 gap-4 mb-4">
              {abilitiesData.map((ability, index) => (
                <AbilityIcon key={index} src={ability.src} alt={ability.alt} />
              ))}
            </div>
            {/* ... Rest of the Left Panel ... */}
          </div>

          {/* Right panel */}
          <div className="p-4 bg-gray-800 rounded-lg">
            <h2 className="mb-4 text-3xl font-bold text-red-500">You die</h2>
            {statsData.map((stat, index) => (
              <Stat key={index} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>

        {/* Bottom section with bosses */}
        <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4 lg:grid-cols-8">
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
