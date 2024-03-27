interface AbilityIconProps {
  src: string;
  alt: string;
  title?: string;
}

export const AbilityIcon = ({ src, alt, title }: AbilityIconProps) => (
  <img src={src} alt={alt} title={title} className="w-10 h-10" />
);
