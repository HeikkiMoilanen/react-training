import Exercise1 from "./1";
import Final1 from "./1-final";
import Exercise2 from "./2";
import Final2 from "./2-final";
import Exercise3 from "./3";
import Final3 from "./3-final";

const exercises = [
  { path: "/exercices/1", label: "Exercise 1", component: Exercise1 },
  { path: "/exercices/1-final", label: "Final 1", component: Final1 },
  { path: "/exercices/2", label: "Exercise 2", component: Exercise2 },
  { path: "/exercices/2-final", label: "Final 2", component: Final2 },
  { path: "/exercices/3", label: "Exercise 3", component: Exercise3 },
  { path: "/exercices/3-final", label: "Final 3", component: Final3 },
] as const;

export default exercises;
