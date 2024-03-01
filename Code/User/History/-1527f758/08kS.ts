import { makeProject } from '@motion-canvas/core';

import intro from './scenes/00_intro?scene';
import whatIsCargo from './scenes/02_what_is_cargo?scene';
import lastVideo from './scenes/01_last_video?scene';
import usingCargo from './scenes/03_using_cargo?scene';
import variables from './scenes/04_variables?scene';
import types from './scenes/05_types?scene';
import using_types from './scenes/06_using_types?scene';
import outro from './scenes/outro?scene';
import audio from './audio/audio.wav';

import './styles.css';

export default makeProject({
  scenes: [intro, lastVideo, whatIsCargo, usingCargo, variables, types, using_types, outro],
  audio
});
