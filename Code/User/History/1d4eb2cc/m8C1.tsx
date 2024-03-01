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
    <Rect layout direction={"column"} ref={heading} y={250} alignItems={"center"} scale={0}>
      <Txt
        fill="#F74C00"
        antialiased={true}
        fontFamily={"Orbitron"}
        fontWeight={900}
        fontSize={140}
        shadowColor={"rgba(247, 76, 0, 0.53)"}
        shadowOffset={8}
        paddingLeft={0}
        paddingRight={40}
      > Rust</Txt >
      <Txt
        fill="#cdd6f4"
        antialiased={true}
        fontFamily={"Orbitron"}
        fontWeight={900}
        fontSize={140}
        shadowColor={"rgba(205, 214, 244, 0.53)"}
        shadowOffset={8}
      >Programming</Txt>,
    </Rect>
  );

  yield view.add(
    <Img
      ref={ferrisLogo}
      src={ferrisImg}
      width={100}
    ></Img>
  )

  yield* waitFor(0.25);
  yield* chain(
    tween(0.75, value => { ferrisLogo().width(map(100, 1000, easeOutSine(value))) }),
    tween(0.75, value => { ferrisLogo().width(map(1000, 900, easeOutSine(value))) }),
    tween(0.64, value => { ferrisLogo().position.y(map(0, -200, easeOutSine(value))) })
  );
  yield* waitFor(1);
  yield* chain(
    tween(0.75, value => {
      heading().scale(map(0, 1, easeOutSine(value)))
    }),
    waitFor(3)
  );
});
