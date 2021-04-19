import { API_ENDPOINT, API_HOST, COUNTRIES } from "./constants";

export const getNhlApiUrl = (
  ...args: [...(string | number)[], object] | string[]
) => {
  const [maybeQuery] = args.slice(-1);
  const fragments = typeof maybeQuery !== "string" ? args.slice(0, -1) : args;
  const query = typeof maybeQuery !== "string" ? maybeQuery : {};
  const path = `${API_ENDPOINT}/${fragments.join("/")}`.replace("//", "/");
  const url = new URL(path, API_HOST);

  for (const entry of Object.entries(query)) {
    url.searchParams.set(...entry);
  }
  return url.toString();
};

export const getCountryByNationality = (nationality: string) =>
  COUNTRIES.find((country) => country.CCA3 === nationality);
