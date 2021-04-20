import { roster } from "./data";

import React from "react";
import Exercise1 from "./1";
import Final1 from "./1-final";
import Exercise2 from "./2";
import Final2 from "./2-final";
import Exercise3 from "./3";
import Final3 from "./3-final";
import Exercise4 from "./4";
import Final4 from "./4-final";

const Exercise4Container: React.FC = (props) => <Exercise4 roster={roster} />;
const Final4Container: React.FC = (props) => <Final4 roster={roster} />;

const exercises = [
  { path: "/exercices/1", label: "Exercise 1", component: Exercise1 },
  { path: "/exercices/1-final", label: "Final 1", component: Final1 },
  { path: "/exercices/2", label: "Exercise 2", component: Exercise2 },
  { path: "/exercices/2-final", label: "Final 2", component: Final2 },
  { path: "/exercices/3", label: "Exercise 3", component: Exercise3 },
  { path: "/exercices/3-final", label: "Final 3", component: Final3 },
  { path: "/exercices/4", label: "Exercise 4", component: Exercise4Container },
  { path: "/exercices/4-final", label: "Final 4", component: Final4Container },
] as const;

export default exercises;
