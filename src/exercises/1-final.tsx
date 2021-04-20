import * as React from "react";

import "components/HockeyCard/HockeyCard.scss";

const HockeyCard: React.FC = (props) => {
  return (
    <div className="hockey-card">
      <div className="hockey-card__fullName">Patrik Laine</div>
      <div className="hockey-card__position">Left Wing</div>
      <table className="hockey-card__detailTable">
        <tr>
          <td>Height:</td>
          <td>6' 5"</td>
        </tr>
        <tr>
          <td>Weight:</td>
          <td>210</td>
        </tr>
        <tr>
          <td>Birth date:</td>
          <td>1998-04-19</td>
        </tr>
      </table>
    </div>
  );
};

export default HockeyCard;
