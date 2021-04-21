import { getNhlApiUrl } from "HockeyCards/utils";
import { PlayerResponse } from "types/hockeyCards";

const delay = async (timeout = 0) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export const fetchPlayer = async (id: number) => {
  const [response] = await Promise.all([
    fetch(getNhlApiUrl("people", id.toString())),
    delay(2000),
  ]);

  const { people }: PlayerResponse = await response.json();

  if (people.length === 0) {
    throw new Error("Player not found");
  }

  return people[0];
};

const playerOptions = [
  { label: "Sebastian Aho", value: 8478427 },
  { label: "Mikael Granlund", value: 8475798 },
  { label: "Pekka Rinne", value: 8471469 },
  { label: "Jani Hakanpää", value: 8475825 },
];

export const PlayerSelect: React.FC<{
  value: number;
  setValue: (value: number) => void;
}> = (props) => {
  const { value, setValue } = props;
  return (
    <select
      style={{ margin: "2rem", padding: "0.5rem" }}
      value={value}
      onChange={(event) => setValue(Number(event.target.value))}
    >
      <option></option>
      {playerOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
