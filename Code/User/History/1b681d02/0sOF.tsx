import { makeScene2D, Circle, Txt, Img, Rect } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, easeOutSine } from '@motion-canvas/core';
import ferrisImg from '../assets/ferris.svg';

export default makeScene2D(function* (view) {
  const thanks = createRef<Txt>();

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
      ref={thanks}
      opacity={0}
      x={-400}
    >Thanks for watching!</Txt>
  )

  yield chain(
    all(
      tween(0.75, v => {
        thanks().x(map(-400, 0, easeOutSine(v)))
      }),
      tween(0.75, v => {
        thanks().opacity(map(0, 1, easeOutSine(v)))
      })
    )
  );
});
