import { makeProject } from '@motion-canvas/core';

import intro from './scenes/00_intro?scene';
import diff_statements from './scenes/01_diff_statements?scene';
import outro from './scenes/outro?scene';

import './styles.css';

export default makeProject({
  scenes: [intro, diff_statements, outro],
});
