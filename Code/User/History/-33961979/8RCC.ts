import { makeProject } from '@motion-canvas/core';

import intro from './scenes/00_intro?scene';
import theory from './scenes/01_theory?scene';
import code from './scenes/03_code?scene';

import './styles.css';

export default makeProject({
  scenes: [scene],
});
