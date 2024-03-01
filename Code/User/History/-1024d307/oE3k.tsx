import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { customCodeBlock } from '../codeblock';

export default makeScene2D(function* (view) {
  const inputs_block_ref = createRef<Rect>();
  const functions_block_ref = createRef<Rect>();
  const outputs_block_ref = createRef<Rect>();
  const inputs_line_ref = createRef<Line>();
  const outputs_line_ref = createRef<Line>();

  const input_data_ref = createRef<Rect>();
  const function_working_ref = createRef<Rect>();
  const output_data_ref = createRef<Rect>();
  yield* waitUntil("start-func-theory");

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
      src={ferrisImg}
      width={900}
      scale={0}
    ></Img>
  );

  // Add the boxes
  yield view.add(
    <Rect
      layout
      width={350}
      height={120}
      fill={"1e1e2e"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={10}
      lineWidth={3}
      stroke={"#45475a"}
      radius={20}
      x={-700}
      ref={inputs_block_ref}
      scale={0}
    >
      <Icon
        icon={"mdi:download-box"}
        width={56}
        color={"a6e3a1"}
      />
      <Txt
        fontFamily={"JetBrains Mono"}
        fontWeight={900}
        fontSize={42}
        fill={"a6e3a1"}
      >Inputs</Txt>
    </Rect>
  );

  yield view.add(
    <Rect
      layout
      width={350}
      height={120}
      fill={"1e1e2e"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
      lineWidth={3}
      stroke={"#45475a"}
      radius={20}
      ref={functions_block_ref}
      scale={0}
    >
      <Icon
        icon={"mdi:function"}
        width={64}
        color={"cba6f7"}
      />
      <Txt
        fontFamily={"JetBrains Mono"}
        fontWeight={900}
        fontSize={42}
        fill={"cba6f7"}
      >Function</Txt>
    </Rect>
  );

  yield view.add(
    <Rect
      layout
      width={350}
      height={120}
      fill={"1e1e2e"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={10}
      lineWidth={3}
      stroke={"#45475a"}
      radius={20}
      x={700}
      ref={outputs_block_ref}
      scale={0}
    >
      <Icon
        icon={"mdi:upload-box"}
        width={56}
        color={"f38ba8"}
      />
      <Txt
        fontFamily={"JetBrains Mono"}
        fontWeight={900}
        fontSize={42}
        fill={"f38ba8"}
      >Output</Txt>
    </Rect>
  );

  yield* view.add(
    <Line
      lineWidth={10}
      stroke="#a6e3a1"
      startArrow
      points={[
        Vector2.zero,
        Vector2.left.scale(200)
      ]}
      arrowSize={20}
      ref={inputs_line_ref}
      x={-350}
      opacity={0}
    />
  );

  yield* view.add(
    <Line
      lineWidth={10}
      stroke="#f38ba8"
      startArrow
      points={[
        Vector2.zero,
        Vector2.left.scale(200)
      ]}
      arrowSize={20}
      ref={outputs_line_ref}
      x={350}
      opacity={0}
    />
  );

  yield* view.add(
    <Rect
      ref={input_data_ref}
      x={-700}
      y={-200}
      opacity={0}
    >
      <Icon
        icon={"mdi:file-document-multiple"}
        width={70}
        color={"cdd6f4"}
      />
    </Rect>
  );

  yield* view.add(
    <Rect
      ref={function_working_ref}
      opacity={0}
      y={-90}
    >
      <Icon
        icon={"mdi:cog"}
        width={90}
        color={"cdd6f4"}
      />
    </Rect>
  );

  yield* view.add(
    <Rect
      ref={output_data_ref}
      opacity={0}
      x={700}
      y={-50}
    >
      <Icon
        icon={"charm:binary"}
        width={70}
        color={"cdd6f4"}
      />
    </Rect>
  );

  yield* chain(
    waitUntil("whats-a-function"),
    tween(1, v => {
      functions_block_ref().scale(map(0, 1, easeOutBack(v)))
    }),
    waitUntil("takes-inputs"),
    tween(0.55, v => {
      inputs_block_ref().scale(map(0, 1, easeOutBack(v)))
    }),
    waitFor(0.5),
    tween(0.55, v => {
      input_data_ref().opacity(map(0, 1, easeOutBack(v)))
    }),
    tween(0.75, v => {
      input_data_ref().opacity(map(1, 0, easeInSine(v)))
      input_data_ref().y(map(-200, -80, easeInSine(v)))
    }),
    tween(0.75, v => {
      inputs_line_ref().opacity(map(0, 1, easeOutSine(v)))
      inputs_line_ref().x(map(-350, -250, easeOutSine(v)))
    }),
    waitUntil("performs-task"),
    tween(0.35, v => {
      function_working_ref().opacity(map(0, 1, easeOutBack(v)))
      function_working_ref().y(map(-90, -130, easeInSine(v)))
    }),
    tween(1.5, v => {
      function_working_ref().rotation(map(0, 360, v))
    }),
    tween(0.35, v => {
      function_working_ref().opacity(map(1, 0, easeOutBack(v)))
    }),
    tween(0.55, v => {
      outputs_line_ref().opacity(map(0, 1, easeOutSine(v)))
      outputs_line_ref().x(map(350, 450, easeOutSine(v)))
    }),
    waitUntil("gives-output"),

    tween(0.55, v => {
      outputs_block_ref().scale(map(0, 1, easeOutBack(v)))
    }),
    tween(0.55, v => {
      output_data_ref().opacity(map(0, 1, easeOutSine(v)))
      output_data_ref().y(map(-90, -130, easeOutSine(v)))
    }),
    waitUntil("gives-output-finish"),
    tween(0.55, v => {
      output_data_ref().opacity(map(1, 0, easeOutSine(v)))
      output_data_ref().y(map(-130, -90, easeOutSine(v)))
    }),
    tween(0.55, v => {
      inputs_block_ref().opacity(map(1, 0, easeInSine(v)))
      functions_block_ref().opacity(map(1, 0, easeInSine(v)))
      outputs_block_ref().opacity(map(1, 0, easeInSine(v)))
      inputs_line_ref().opacity(map(1, 0, easeInSine(v)))
      outputs_line_ref().opacity(map(1, 0, easeInSine(v)))
    }),
  );

  yield* inputs_block_ref().remove();
  yield* functions_block_ref().remove();
  yield* outputs_block_ref().remove();
  yield* inputs_line_ref().remove();
  yield* outputs_line_ref().remove();
  yield* input_data_ref().remove();
  yield* output_data_ref().remove();
  yield* function_working_ref().remove();
});
