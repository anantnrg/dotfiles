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
  easeInOutQuad,
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
  const headingRef = createRef<Txt>();

  yield view.add(<Copyright />);

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontWeight={900}
      fontSize={164}
      fill="cdd6f4"
      ref={headingRef}
    />,
  );

  yield* waitUntil("learn-some-basics");
  yield* headingRef().text("Memory Allocation", 1.5, easeInOutQuad);
});
