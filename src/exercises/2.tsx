/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import { PlayerImage, Flag } from "components";
import { players } from "./data";

import "components/HockeyCard/HockeyCard.scss";

// here you can adjust player's captain status to test changes in your code
const data = { ...players.mikael, captain: false, alternateCaptain: true };

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
        id={8475798}
        // get fullName from props
        fullName="Mikael Granlund"
        // TIP: since player-prop has exactly same properties as required (plus extra), you can use destructuring to pass these props
        // {...player}
      />

      {/* Render 'C' when player is captain and 'A' when player is alternateCaptain */}
      {/* When player is neither, don't render anything (not even empty div) */}
      {/* TIP: Use ternary operator / short circuit truth check to render null/undefined/empty string instead of div */}
      {/* TIP: You may want to derive `captainStatus` beforehand, perhaps with `getCaptainStatus()` helper function */}
      <div className="hockey-card__captainStatus">A</div>

      <div className="hockey-card__primaryNumber">
        {/* get primaryNumber from props */}64
      </div>

      <div className="hockey-card__details">
        <div className="hockey-card__fullName">
          {/* get fullName from props */}
          <span>Mikael Granlund</span>

          {/* get nationality from props */}
          <Flag nationality="FIN" />
        </div>

        <div className="hockey-card__position">
          {/* get primaryPosition from props */}Center
        </div>

        <table className="hockey-card__detailTable">
          <tbody>
            <tr>
              <td>Height:</td>
              <td>{/* get height from props */}5' 10"</td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td>{/* get height from props */}185</td>
            </tr>
            <tr>
              <td>Birth date:</td>
              <td>{/* get birthDate from props */}1992-02-26</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
