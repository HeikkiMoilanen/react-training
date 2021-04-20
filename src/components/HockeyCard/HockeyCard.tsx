import * as React from "react";

import { Player } from "types/hockeyCards";
import { PlayerImage, Flag } from "components";

import "./HockeyCard.scss";

type Props = { player: Player };

export const HockeyCard: React.FC<Props> & Extras = (props) => {
  const { player } = props;

  return (
    <Wrapper>
      <Image player={player} />

      <CaptainStatus player={player} />

      <RightCornerBadge>{player.primaryNumber}</RightCornerBadge>

      <Details>
        <Title>
          <span>{player.fullName}</span>
          <Flag nationality={player.nationality} />
        </Title>

        <Subtitle>{player.primaryPosition.name}</Subtitle>

        <DetailTable>
          <tr>
            <td>Height:</td>
            <td>{player.height}</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{player.weight}</td>
          </tr>
          <tr>
            <td>Birth date:</td>
            <td>{player.birthDate}</td>
          </tr>
        </DetailTable>
      </Details>
    </Wrapper>
  );
};

type Extras = {
  Wrapper: typeof Wrapper;
  Details: typeof Details;
  LeftCornerBadge: typeof LeftCornerBadge;
  RightCornerBadge: typeof RightCornerBadge;
  Title: typeof Title;
  Subtitle: typeof Subtitle;
  DetailTable: typeof DetailTable;
  Image: typeof Image;
  CaptainStatus: typeof CaptainStatus;
};

const Wrapper: React.FC<{ className?: string }> = (props) => {
  const { children, className = "" } = props;

  return <div className={`hockey-card__wrapper ${className}`}>{children}</div>;
};

HockeyCard.Wrapper = Wrapper;

const Details: React.FC<{ className?: string }> = (props) => {
  const { children, className = "" } = props;

  return <div className={`hockey-card__details ${className}`}>{children}</div>;
};

HockeyCard.Details = Details;

const LeftCornerBadge: React.FC<{ className?: string }> = (props) => {
  const { children, className = "" } = props;

  return (
    <div className={`hockey-card__leftCornerBadge ${className}`}>
      {children}
    </div>
  );
};

HockeyCard.LeftCornerBadge = LeftCornerBadge;

const RightCornerBadge: React.FC<{ className?: string }> = (props) => {
  const { children, className = "" } = props;

  return (
    <div className={`hockey-card__rightCornerBadge ${className}`}>
      {children}
    </div>
  );
};

HockeyCard.RightCornerBadge = RightCornerBadge;

const Title: React.FC<{ className?: string }> = (props) => {
  const { children, className = "" } = props;

  return <div className={`hockey-card__title ${className}`}>{children}</div>;
};

HockeyCard.Title = Title;

const Subtitle: React.FC<{ className?: string }> = (props) => {
  const { children, className = "" } = props;

  return <div className={`hockey-card__subTitle ${className}`}>{children}</div>;
};

HockeyCard.Subtitle = Subtitle;

const DetailTable: React.FC<{ className?: string }> = (props) => {
  const { children, className = "" } = props;

  return (
    <table className={`hockey-card__detailTable ${className}`}>
      {children}
    </table>
  );
};

HockeyCard.DetailTable = DetailTable;

const Image: React.FC<{ player: Player }> = (props) => {
  return (
    <PlayerImage size="huge" className="hockey-card__image" {...props.player} />
  );
};

HockeyCard.Image = Image;

const CaptainStatus: React.FC<{ player: Player; className?: string }> = (
  props
) => {
  const { player, className = "" } = props;

  const getCaptainStatus = () => {
    if (player.captain) {
      return "C";
    }

    if (player.alternateCaptain) {
      return "A";
    }

    return "";
  };

  const captainStatus = getCaptainStatus();

  return (
    <LeftCornerBadge className={className}>{captainStatus}</LeftCornerBadge>
  );
};

HockeyCard.CaptainStatus = CaptainStatus;
