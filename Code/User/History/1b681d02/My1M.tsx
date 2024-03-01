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
    fill={"cdd6f4"}>Thanks for watching!</Txt>
  )

  yield view.add(
    <Rect layout direction={"column"} ref={heading} y={250} alignItems={"center"} >
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
      width={900}
      y={-200}
    ></Img>
  )

  yield waitFor(5);
});
