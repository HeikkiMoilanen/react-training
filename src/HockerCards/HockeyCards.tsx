import * as React from "react";

import HockeyCardMenu from "./components/HockeyCardMenu";
import HockeyCard from "./components/HockeyCard";

import "./HockeyCards.scss";

const HockeyCards: React.FC<{ teamId: number }> = (props) => {
  return (
    <div id="hockey-cards-wrapper">
      <div id="hockey-card-wrapper">
        <HockeyCard />
      </div>
      <nav id="hockey-card-menu">
        <HockeyCardMenu teamId={30} />
      </nav>
    </div>
  );
};

export default HockeyCards;
