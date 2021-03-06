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
import Exercise5 from "./5";
import Final5 from "./5-final";
import Exercise6 from "./6";
import Final6 from "./6-final";
import Exercise7 from "./7";
import Final7 from "./7-final";
import Extra71 from "./7-extra1";
import Extra72 from "./7-extra2";
import Exercise8 from "./8";
import Final8 from "./8-final";
import Extra8 from "./8-extra1";
import Exercise9 from "./9";
import Final9 from "./9-final";
import Extra91 from "./9-extra1";
import Extra92 from "./9-extra2";

const Exercise4Container: React.FC = (props) => <Exercise4 roster={roster} />;
const Final4Container: React.FC = (props) => <Final4 roster={roster} />;
const Exercise5Container: React.FC = (props) => <Exercise5 roster={roster} />;
const Final5Container: React.FC = (props) => <Final5 roster={roster} />;
const Exercise6Container: React.FC = (props) => <Exercise6 roster={roster} />;
const Final6Container: React.FC = (props) => <Final6 roster={roster} />;

const exercises = [
  { path: "/exercices/1", label: "1 - Exercise", component: Exercise1 },
  { path: "/exercices/1-final", label: "1 - Final", component: Final1 },
  { path: "/exercices/2", label: "2 - Exercise", component: Exercise2 },
  { path: "/exercices/2-final", label: "2 - Final", component: Final2 },
  { path: "/exercices/3", label: "3 - Exercise", component: Exercise3 },
  { path: "/exercices/3-final", label: "3 - Final", component: Final3 },
  {
    path: "/exercices/4",
    label: "4 - Exercise",
    component: Exercise4Container,
  },
  {
    path: "/exercices/4-final",
    label: "4 - Final",
    component: Final4Container,
  },
  {
    path: "/exercices/5",
    label: "5 - Exercise",
    component: Exercise5Container,
  },
  {
    path: "/exercices/5-final",
    label: "5 - Final",
    component: Final5Container,
  },
  {
    path: "/exercices/6",
    label: "6 - Exercise",
    component: Exercise6Container,
  },
  {
    path: "/exercices/6-final",
    label: "6 - Final",
    component: Final6Container,
  },
  { path: "/exercices/7", label: "7 - Exercise", component: Exercise7 },
  { path: "/exercices/7-final", label: "7 - Final", component: Final7 },
  {
    path: "/exercices/7-extra-1",
    label: "7 - Extra points 1",
    component: Extra71,
  },
  {
    path: "/exercices/7-extra-2",
    label: "7 - Extra points 2",
    component: Extra72,
  },
  { path: "/exercices/8", label: "8 - Exercise", component: Exercise8 },
  { path: "/exercices/8-final", label: "8 - Final", component: Final8 },
  {
    path: "/exercices/8-extra",
    label: "8 - Extra points",
    component: Extra8,
  },
  { path: "/exercices/9", label: "9 - Exercise", component: Exercise9 },
  { path: "/exercices/9-final", label: "9 - Final", component: Final9 },
  {
    path: "/exercices/9-extra-1",
    label: "9 - Extra points 1",
    component: Extra91,
  },
  {
    path: "/exercices/9-extra-2",
    label: "9 - Extra points 2",
    component: Extra92,
  },
] as const;

export default exercises;
