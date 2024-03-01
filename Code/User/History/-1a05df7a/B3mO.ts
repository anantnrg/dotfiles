import { makeProject } from "@motion-canvas/core";

import intro from "./scenes/00_intro?scene";
import memory_allocation from "./scenes/01_memory_allocation?scene";
import outro from "./scenes/outro?scene";

import "./styles.css";

export default makeProject({
  scenes: [intro, outro],
});
