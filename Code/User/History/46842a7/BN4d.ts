import { makeProject } from '@motion-canvas/core';

import intro from './scenes/00_intro?scene';
import diff_statements from './scenes/01_diff_statements?scene';
import infinite_loops from './scenes/02_infinite_loops?scene';
import while_loops from './scenes/03_while_loops?scene';
import for_loops from './scenes/04_for_loops?scene';
import outro from './scenes/outro?scene';

import './styles.css';

export default makeProject({
  scenes: [intro, diff_statements, infinite_loops, while_loops, for_loops, outro],
});
