import * as React from "react";

import { getCountryByNationality } from "../utils";

const Flag: React.FC<{
  nationality: string;
  className?: string;
  size?: number;
}> = (props) => {
  const { nationality, size = 64, className } = props;
  const country = getCountryByNationality(nationality);

  if (!country) {
    return null;
  }

  const host = "https://www.countryflags.io";

  const src = `${host}/${country?.CCA2}/flat/${size}.png`;
  const alt = country?.Nationality;

  return <img src={src} alt={alt} className={className} />;
};

export default Flag;
