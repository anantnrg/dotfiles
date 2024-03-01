import { makeScene2D, Circle, Txt, Img, Rect } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, easeOutSine } from '@motion-canvas/core';
import ferrisImg from '../assets/ferris.svg';

export default makeScene2D(function* (view) {
  const thanks = createRef<Txt>();
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
    <Img
      ref={ferrisLogo}
      src={ferrisImg}
      width={900}
      scale={0.15}
      x={850}
      y={450}
    ></Img>
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
      y={250}
    >Thanks for watching!</Txt>
  );

  yield* all(
    tween(0.75, value => { ferrisLogo().scale(map(0.15, 1, easeOutSine(value))) }),
    tween(0.75, value => { ferrisLogo().x(map(850, 0, easeOutSine(value))) }),
    tween(0.75, value => { ferrisLogo().y(map(450, 0, easeOutSine(value))) }),
  );

  yield* chain(
    tween(0.75, value => { ferrisLogo().y(map(0, -150, easeOutSine(value))) }),
    all(
      tween(0.75, v => {
        thanks().x(map(-400, 0, easeOutSine(v)))
      }),
      tween(0.75, v => {
        thanks().opacity(map(0, 1, easeOutSine(v)))
      })
    ),
    waitFor(2),
  );
});
