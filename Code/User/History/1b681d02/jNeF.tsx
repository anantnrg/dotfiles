import { makeScene2D, Circle, Txt, Img, Rect } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, easeOutSine } from '@motion-canvas/core';
import ferrisImg from '../assets/ferris.svg';

export default makeScene2D(function* (view) {
  const heading = createRef<Rect>();
  const ferrisLogo = createRef<Img>();

  yield view.add(
    <Txt
      y={-500}
      x={-800}
      fill="#cdd6f4"
      antialiased={true}
      fontFamily={"Orbitron"}
      fontWeight={900}
      fontSize={22}
    > © Technolog.in 2023</Txt >,
  );

  yield view.add(
    <Txt
      fontFamily={"JetBrains Mono"}
      fontSize={120}
      fill={"cdd6f4"}
      fontWeight={900}
    >Thanks for watching!</Txt>
  )

  yield waitFor(5);
});
