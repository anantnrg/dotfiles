import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { customCodeBlock } from '../helpers/codeblock';

export default makeScene2D(function* (view) {
  const ferrisLogo = createRef<Img>();

  yield view.add(
    <Txt
      y={-500}
      x={-800}
      fill="#cdd6f4"
      antialiased={true}
      fontFamily={"JetBrains Mono"}
      fontWeight={900}
      fontSize={22}
    > © Technologs 2023</Txt >,
  );

  yield view.add(
    <Img
      ref={ferrisLogo}
      src={ferrisImg}
      width={900}
      scale={0}
    ></Img>
  );

  yield* waitUntil("start-intro");

  yield* chain(
    tween(0.75, value => { ferrisLogo().scale(map(0, 1.1, easeOutSine(value))) }),
    tween(0.75, value => { ferrisLogo().scale(map(1.1, 1, easeOutSine(value))) }),
  );

  yield* waitUntil("finish-intro")

  yield* all(
    tween(0.75, value => { ferrisLogo().scale(map(1, 0.15, easeOutSine(value))) }),
    tween(0.75, value => { ferrisLogo().x(map(0, 850, easeInSine(value))) }),
    tween(0.75, value => { ferrisLogo().y(map(0, 450, easeInSine(value))) }),
  );
});
