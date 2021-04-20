import * as React from "react";
import cx from "classnames";
import defaultProfile from "./defaultProfile.png";

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
  const magnifierMap = { small: 1, default: 1, large: 2, huge: 3 };

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

  const [fallbackImage, setFallbackImage] = React.useState<string>("");

  const magnifierText = magnifier > 1 ? `@${magnifier}x` : "";

  const targetSize = size * magnifier;

  const src = `http://nhl.bamcontent.com/images/headshots/current/${size}x${size}/${id}${magnifierText}.jpg`;

  return (
    <img
      style={{ width: targetSize, height: targetSize }}
      className={cx("player-image", className)}
      onError={() => setFallbackImage(defaultProfile)}
      src={fallbackImage || src}
      alt={`Profile of ${fullName}`}
    />
  );
};
