interface Ability {
  abilityName: string;
  baseDamage: number;
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
    <div>
      <h2>Abilities for {boss.name}</h2>
      <ul>
        {boss.abilities.map((ability, index) => (
          <li key={index}>
            {ability.abilityName}: {ability.baseDamage}
          </li>
        ))}
      </ul>
    </div>
  );
};
