import * as React from "react";

import { Player } from "types/hockeyCards";
import { PlayerImage, Flag } from "components";

import "components/HockeyCard/HockeyCard.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data: Player = {
  id: 8479339,
  fullName: "Patrik Laine",
  link: "/api/v1/people/8479339",
  firstName: "Patrik",
  lastName: "Laine",
  primaryNumber: "29",
  birthDate: "1998-04-19",
  currentAge: 23,
  birthCity: "TAMPERE",
  birthCountry: "FIN",
  nationality: "FIN",
  height: "6' 5\"",
  weight: 210,
  active: true,
  alternateCaptain: true,
  captain: false,
  rookie: false,
  shootsCatches: "R",
  rosterStatus: "Y",
  currentTeam: {
    id: 29,
    name: "Columbus Blue Jackets",
    link: "/api/v1/teams/29",
  },
  primaryPosition: {
    code: "L",
    name: "Left Wing",
    type: "Forward",
    abbreviation: "LW",
  },
};

/**
 * Exercise 2: Using Props
 * The code you write here renders at the route http://localhost:3000/exercices/2
 *
 * You can see what the end result should look like at http://localhost:3000/exercices/2-final
 * */

// Start here!
// First define MyProps and give the HockeyCard MyProps type.
// pass `data`-variable as `player`-prop to <HockeyCard />
const HockeyCardContainer: React.FC = (props) => <HockeyCard />;
export default HockeyCardContainer;

// define player as prop of type Player
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MyProps = {};

// Pass Props type component with React.FC<MyProps>
const HockeyCard: React.FC = (props) => {
  // props is just a (read only) object with keys defined with MyProps so it can be destructured with
  // const { someProp } = props

  return (
    <div className="hockey-card__wrapper">
      <PlayerImage
        size="huge"
        className="hockey-card__image"
        // Get id from props
        id={8479339}
        // get fullName from props
        fullName="Patrik Laine"
        // TIP: since player-prop has exactly same properties as required (plus extra), you can use destructuring to pass these props
        // {...player}
      />

      {/* Render 'C' when player is captain and 'A' when player is alternateCaptain */}
      {/* When player is neither, don't render anything (not even empty div) */}
      {/* TIP: Use ternary operator / short circuit truth check to render null/undefined/empty string instead of div */}
      {/* TIP: You may want to derive `captainStatus` beforehand, perhaps with `getCaptainStatus()` helper function */}
      <div className="hockey-card__captainStatus">A</div>

      <div className="hockey-card__primaryNumber">
        {/* get primaryNumber from props */}29
      </div>

      <div className="hockey-card__details">
        <div className="hockey-card__fullName">
          {/* get fullName from props */}
          <span>Patrik Laine</span>

          {/* get nationality from props */}
          <Flag nationality="FIN" />
        </div>

        <div className="hockey-card__position">
          {/* get primaryNumber from props */}Left Wing
        </div>

        <table className="hockey-card__detailTable">
          <tr>
            <td>Height:</td>
            <td>{/* get height from props */}6' 5"</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{/* get height from props */}210</td>
          </tr>
          <tr>
            <td>Birth date:</td>
            <td>{/* get birthDate from props */}1998-04-19</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
