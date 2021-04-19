export type Position =
  | { abbrev: "G"; code: "G"; name: "Goalie"; type: "Goalie" }
  | { abbrev: "D"; code: "D"; name: "Defenseman"; type: "Defenseman" }
  | { abbrev: "RW"; code: "R"; name: "Right Wing"; type: "Forward" }
  | { abbrev: "LW"; code: "L"; name: "Left Wing"; type: "Forward" }
  | { abbrev: "C"; code: "C"; name: "Center"; type: "Forward" }
  | { abbrev: "N/A"; code: "N/A"; name: "Unknown"; type: "Unknown" }
  | { abbrev: "Head Coach"; code: "HC"; name: "Head Coach"; type: "Coach" };



export type ShootsCatches = "R" | "L";

export type RosterStatus = "N";

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
  birthStateProvince: string;
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
  currentTeam: Team;
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

type Team = {
  id: 30;
  name: string;
  link: string;
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
