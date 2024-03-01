/* eslint-disable react/jsx-filename-extension */
import {
  makeScene2D,
  Circle,
  Txt,
  Img,
  Rect,
  Line,
  Icon,
  Latex,
} from "@motion-canvas/2d";
import {
  all,
  tween,
  createRef,
  map,
  easeInSine,
  chain,
  easeInOutSine,
  waitFor,
  slideTransition,
  Direction,
  easeOutSine,
  easeInBounce,
  createSignal,
  Vector2,
  waitUntil,
  easeOutBack,
} from "@motion-canvas/core";
import {
  CodeBlock,
  insert,
  lines,
  range,
  remove,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { Copyright } from "helpers/copyright";
import ferrisImg from "../assets/ferris.svg";

export default makeScene2D(function* (view) {
  const heading_ref = createRef<Txt>();

  yield view.add(<Copyright />);

  yield view.add(
    <Img src={ferrisImg} width={900} scale={0.15} x={850} y={470} />,
  );

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontWeight={900}
      fontSize={64}
      fill="cdd6f4"
      ref={heading_ref}
    />,
  );

  yield* waitUntil("learn-some-basics");
  yield* heading_ref().text("Memory Allocation", 0.75, easintou)
});
