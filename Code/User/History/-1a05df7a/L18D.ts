import { makeProject } from "@motion-canvas/core";

import intro from "./scenes/00_intro?scene";
// import theory from "./scenes/01_theory?scene";

import "./styles.css";

export default makeProject({
  scenes: [intro],
});
