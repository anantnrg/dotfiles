import { makeProject } from "@motion-canvas/core";

import intro from "./scenes/00_intro?scene";
import memoryAllocation from "./scenes/01_memory_allocation?scene";
import outro from "./scenes/outro?scene";

import "./styles.css";

export default makeProject({
  scenes: [intro, memoryAllocation, outro],
});
