import { makeProject } from '@motion-canvas/core';

import intro from './scenes/00_intro?scene';
import theory from './scenes/01_theory?scene';
import code from './scenes/02_code?scene';
import outro from './scenes/outro?scene';

import './styles.css';

export default makeProject({
  scenes: [intro, theory, code, outro],
});
