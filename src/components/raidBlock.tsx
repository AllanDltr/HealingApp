interface RaidBlockProps {
  name: string;
  picture: string;
  imageAlt: string;
  onClick: () => void;
}

export const RaidBlock = ({
  name,
  picture,
  imageAlt,
  onClick,
}: RaidBlockProps) => (
  <div className="p-4 text-center bg-gray-700 rounded-lg" onClick={onClick}>
    <img src={picture} alt={imageAlt} className="mx-auto mb-2" />
    <span className="text-red">{name}</span>
  </div>
);
