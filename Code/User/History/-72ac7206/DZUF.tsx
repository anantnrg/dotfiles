/* eslint-disable react/jsx-filename-extension */
import { makeScene2D, Txt, Img, Rect, Line, Icon } from "@motion-canvas/2d";
import {
  tween,
  createRef,
  map,
  easeInSine,
  chain,
  waitFor,
  easeOutSine,
  Vector2,
  waitUntil,
  easeOutBack,
  easeInOutQuad,
} from "@motion-canvas/core";
import { Copyright } from "helpers/copyright";
import ferrisImg from "../assets/ferris.svg";

export default makeScene2D(function* (view) {
  const inputsBlockRef = createRef<Rect>();
  const functionsBlockRef = createRef<Rect>();
  const outputsBlockRef = createRef<Rect>();
  const inputsLineRef = createRef<Line>();
  const outputsLineRef = createRef<Line>();

  const inputDataRef = createRef<Rect>();
  const fnWorkingRef = createRef<Rect>();
  const outputDataRef = createRef<Rect>();
  yield* waitUntil("start-func-theory");

  yield view.add(<Copyright />);
  yield view.add(
    <Img src={ferrisImg} width={900} scale={0.15} x={850} y={470} />,
  );

  // Add the boxes
  yield view.add(
    <Rect
      layout
      width={350}
      height={120}
      fill="1e1e2e"
      alignItems="center"
      justifyContent="center"
      gap={10}
      lineWidth={3}
      stroke="#45475a"
      radius={20}
      x={-700}
      ref={inputsBlockRef}
      scale={0}
    >
      <Icon icon="mdi:download-box" width={56} color="a6e3a1" />
      <Txt
        fontFamily="JetBrains Mono"
        fontWeight={900}
        fontSize={42}
        fill="a6e3a1"
      >
        Inputs
      </Txt>
    </Rect>,
  );

  yield view.add(
    <Rect
      layout
      width={350}
      height={120}
      fill="1e1e2e"
      alignItems="center"
      justifyContent="center"
      gap={5}
      lineWidth={3}
      stroke="#45475a"
      radius={20}
      ref={functionsBlockRef}
      scale={0}
    >
      <Icon icon="mdi:function" width={64} color="cba6f7" />
      <Txt
        fontFamily="JetBrains Mono"
        fontWeight={900}
        fontSize={42}
        fill="cba6f7"
      >
        Function
      </Txt>
    </Rect>,
  );

  yield view.add(
    <Rect
      layout
      width={350}
      height={120}
      fill="1e1e2e"
      alignItems="center"
      justifyContent="center"
      gap={10}
      lineWidth={3}
      stroke="#45475a"
      radius={20}
      x={700}
      ref={outputsBlockRef}
      scale={0}
    >
      <Icon icon="mdi:upload-box" width={56} color="f38ba8" />
      <Txt
        fontFamily="JetBrains Mono"
        fontWeight={900}
        fontSize={42}
        fill="f38ba8"
      >
        Output
      </Txt>
    </Rect>,
  );

  yield* view.add(
    <Line
      lineWidth={10}
      stroke="#a6e3a1"
      startArrow
      points={[[0, 0], Vector2.zero]}
      arrowSize={20}
      ref={inputsLineRef}
      x={-440}
    />,
  );

  yield* view.add(
    <Line
      lineWidth={10}
      stroke="#f38ba8"
      startArrow
      points={[Vector2.zero, [0, 0]]}
      arrowSize={20}
      ref={outputsLineRef}
      x={250}
    />,
  );

  yield* view.add(
    <Rect ref={inputDataRef} x={-700} y={-200} opacity={0}>
      <Icon icon="mdi:file-document-multiple" width={70} color="cdd6f4" />
    </Rect>,
  );

  yield* view.add(
    <Rect ref={fnWorkingRef} opacity={0} y={-90}>
      <Icon icon="mdi:cog" width={90} color="cdd6f4" />
    </Rect>,
  );

  yield* view.add(
    <Rect ref={outputDataRef} opacity={0} x={700} y={-50}>
      <Icon icon="charm:binary" width={70} color="cdd6f4" />
    </Rect>,
  );

  yield* chain(
    waitUntil("whats-a-function"),
    tween(1, (v) => {
      functionsBlockRef().scale(map(0, 1, easeOutBack(v)));
    }),
    waitUntil("takes-inputs"),
    tween(0.55, (v) => {
      inputsBlockRef().scale(map(0, 1, easeOutBack(v)));
    }),
    waitFor(0.5),
    tween(0.55, (v) => {
      inputDataRef().opacity(map(0, 1, easeOutBack(v)));
    }),
    tween(0.75, (v) => {
      inputDataRef().opacity(map(1, 0, easeInSine(v)));
      inputDataRef().y(map(-200, -80, easeInSine(v)));
    }),
    inputsLineRef().points([[200, 0], Vector2.zero], 0.75, easeInOutQuad),
    waitUntil("performs-task"),
    tween(0.35, (v) => {
      fnWorkingRef().opacity(map(0, 1, easeOutBack(v)));
      fnWorkingRef().y(map(-90, -130, easeInSine(v)));
    }),
    tween(1.5, (v) => {
      fnWorkingRef().rotation(map(0, 360, v));
    }),
    tween(0.35, (v) => {
      fnWorkingRef().opacity(map(1, 0, easeOutBack(v)));
    }),
    outputsLineRef().points([[200, 0], Vector2.zero], 0.75, easeInOutQuad),
    waitUntil("gives-output"),

    tween(0.55, (v) => {
      outputsBlockRef().scale(map(0, 1, easeOutBack(v)));
    }),
    tween(0.55, (v) => {
      outputDataRef().opacity(map(0, 1, easeOutSine(v)));
      outputDataRef().y(map(-90, -130, easeOutSine(v)));
    }),
    waitUntil("gives-output-finish"),
    tween(0.55, (v) => {
      outputDataRef().opacity(map(1, 0, easeOutSine(v)));
      outputDataRef().y(map(-130, -90, easeOutSine(v)));
    }),
    tween(0.55, (v) => {
      inputsBlockRef().opacity(map(1, 0, easeInSine(v)));
      functionsBlockRef().opacity(map(1, 0, easeInSine(v)));
      outputsBlockRef().opacity(map(1, 0, easeInSine(v)));
      inputsLineRef().opacity(map(1, 0, easeInSine(v)));
      outputsLineRef().opacity(map(1, 0, easeInSine(v)));
    }),
  );

  yield* inputsBlockRef().remove();
  yield* functionsBlockRef().remove();
  yield* outputsBlockRef().remove();
  yield* inputsLineRef().remove();
  yield* outputsLineRef().remove();
  yield* inputDataRef().remove();
  yield* outputDataRef().remove();
  yield* fnWorkingRef().remove();
});
