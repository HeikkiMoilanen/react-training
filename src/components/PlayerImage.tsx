import * as React from "react";

type Size = "small" | "default" | "large" | "huge";

const getSize = (size: Size) => {
  const defaultSize = 168;
  const sizeMap = {
    small: 60,
    default: defaultSize,
    large: defaultSize,
    huge: defaultSize,
  };

  return sizeMap[size];
};

const getMagnifier = (size: Size) => {
  const magnifierMap = { small: "", default: "", large: "@2x", huge: "@3x" };

  return magnifierMap[size];
};

export const PlayerImage: React.FC<{
  id: number;
  fullName: string;
  className?: string;
  size?: Size;
}> = (props) => {
  const { id, fullName, size: sizeProp = "default", className } = props;

  const size = getSize(sizeProp);
  const magnifier = getMagnifier(sizeProp);

  return (
    <img
      className={className}
      src={`http://nhl.bamcontent.com/images/headshots/current/${size}x${size}/${id}${magnifier}.jpg`}
      alt={`Profile of ${fullName}`}
    />
  );
};

export default PlayerImage;
