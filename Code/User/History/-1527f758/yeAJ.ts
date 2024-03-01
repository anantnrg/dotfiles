import { makeProject } from '@motion-canvas/core';

import intro from './scenes/00_intro?scene';
import whatIsCargo from './scenes/02_what_is_cargo?scene';
import lastVideo from './scenes/01_last_video?scene';
import usingCargo from './scenes/03_using_cargo?scene';
import variables from './scenes/04_variables?scene';
import types from './scenes/05_types?scene';

import './styles.css';

export default makeProject({
  scenes: [intro, lastVideo, whatIsCargo, usingCargo, variables, types],
});
