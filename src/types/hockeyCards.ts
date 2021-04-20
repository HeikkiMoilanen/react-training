export type Position =
  | { abbreviation: "G"; code: "G"; name: "Goalie"; type: "Goalie" }
  | { abbreviation: "D"; code: "D"; name: "Defenseman"; type: "Defenseman" }
  | { abbreviation: "RW"; code: "R"; name: "Right Wing"; type: "Forward" }
  | { abbreviation: "LW"; code: "L"; name: "Left Wing"; type: "Forward" }
  | { abbreviation: "C"; code: "C"; name: "Center"; type: "Forward" }
  | { abbreviation: "N/A"; code: "N/A"; name: "Unknown"; type: "Unknown" }
  | {
      abbreviation: "Head Coach";
      code: "HC";
      name: "Head Coach";
      type: "Coach";
    };

export type ShootsCatches = "R" | "L";

export type RosterStatus = "N" | "Y";

export type Player = {
  id: number;
  fullName: string;
  link: string;
  firstName: string;
  lastName: string;
  primaryNumber: string;
  birthDate: string;
  currentAge: number;
  birthCity: string;
  birthStateProvince?: string;
  birthCountry: string;
  nationality: string;
  height: string;
  weight: number;
  active: boolean;
  alternateCaptain: boolean;
  captain: boolean;
  rookie: boolean;
  shootsCatches: ShootsCatches;
  rosterStatus: RosterStatus;
  currentTeam: TeamBase;
  primaryPosition: Position;
};

export type PlayerResponse = {
  people: Player[];
};

export type RosterItem = {
  person: { id: number; fullName: string; link: string };
  jerseyNumber: string;
  position: Position;
};

type Venue = {
  id: number;
  name: string;
  link: string;
  city: string;
  timeZone: { id: string; offset: number; tz: string };
};

type TeamBase = { id: number; name: string; link: string };

type Team = TeamBase & {
  venue: Venue;
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  division: { id: number; name: string; link: string };
  conference: { id: number; name: string; link: string };
  franchise: { franchiseId: number; teamName: string; link: string };
  shortName: string;
  officialSiteUrl: string;
  franchiseId: number;
  active: boolean;
};

export type TeamWithRoster = Team & {
  roster: { roster: RosterItem[]; link: string };
};

export type TeamResponse = {
  teams: TeamWithRoster[];
};
