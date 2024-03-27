interface Ability {
  abilityName: string;
  baseDamage: number;
  iconImg: string;
}

interface Boss {
  name: string;
  abilities: Ability[];
}

interface AbilityDisplayProps {
  boss: Boss | null;
}

export const AbilityDisplay = ({ boss }: AbilityDisplayProps) => {
  if (!boss) return null;

  return (
    <div className="text-3xl text-center">
      <h2 className="pb-8">Compétences de : {boss.name}</h2>
      <ul>
        {boss.abilities.map((ability, index) => (
          <li key={index} className="flex items-center justify-center gap-2">
            <img src={ability.iconImg} />- {ability.abilityName} :{" "}
            {ability.baseDamage}
          </li>
        ))}
      </ul>
    </div>
  );
};
