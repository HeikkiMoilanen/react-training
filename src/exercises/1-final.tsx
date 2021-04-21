import * as React from "react";

import "components/HockeyCard/HockeyCard.scss";

const HockeyCard: React.FC = (props) => {
  return (
    <div className="hockey-card__wrapper">
      <div className="hockey-card__fullName">Jani Hakanpaa</div>
      <div className="hockey-card__position">Defenseman</div>
      <table className="hockey-card__detailTable">
        <tr>
          <td>Height:</td>
          <td>6' 5"</td>
        </tr>
        <tr>
          <td>Weight:</td>
          <td>218</td>
        </tr>
        <tr>
          <td>Birth date:</td>
          <td>1992-03-31</td>
        </tr>
      </table>
    </div>
  );
};

export default HockeyCard;
