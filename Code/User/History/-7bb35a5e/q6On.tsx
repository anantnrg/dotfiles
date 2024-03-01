import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';

export default makeScene2D(function* (view) {
  /* ----------- intro start ----------- */
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

  /* ----------- intro end ----------- */

  /* ----------- function theory start ----------- */
  const inputs_block_ref = createRef<Rect>();
  const functions_block_ref = createRef<Rect>();
  const outputs_block_ref = createRef<Rect>();
  const inputs_line_ref = createRef<Line>();
  const outputs_line_ref = createRef<Line>();

  const input_data_ref = createRef<Rect>();
  const function_working_ref = createRef<Rect>();
  const output_data_ref = createRef<Rect>();
  yield* waitUntil("start-func-theory");

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
  /* ----------- function theory end ----------- */

  /* ----------- function code start ----------- */
  const code_block_rect_ref = createRef<Rect>();
  const main_code_block_rect_ref = createRef<Rect>();
  const codeblock = createRef<CodeBlock>();
  const main_codeblock = createRef<CodeBlock>();
  const cuboid_formula_ref = createRef<Latex>();
  const cuboid_formula_1_ref = createRef<Latex>();

  yield view.add(
    <Rect layout ref={code_block_rect_ref} direction={"column"} scale={0}>
      <Rect
        layout
        direction={"row"}
        fill="#1e1e2e"
        width={180}
        marginBottom={12}
        padding={10}
        radius={8}
        alignItems={"center"}
        justifyContent={"center"}
        lineWidth={2}
        stroke={"#45475a"}
      >
        <Icon
          icon={"devicon-plain:rust"}
          color={"#cdd6f4"}
          width={32}
          height={32}
          marginRight={15}
        />
        <Txt
          fontFamily={"JetBrains Mono"}
          fontSize={22}
          fill="#cdd6f4"

        >main.rs</Txt>
      </Rect>
      <Rect
        layout
        alignItems={"center"}
        justifyContent={"center"}
        fill={"1e1e2e"}
        padding={30}
        paddingBottom={0}
        radius={10}
        y={15}
        lineWidth={2}
        stroke={"#45475a"}
      >
        <CodeBlock
          ref={codeblock}
          language='rust'
          fontFamily={"JetBrains Mono"}
          fontSize={36}
          code={``}
          lineHeight={70}
        />
      </Rect>
    </Rect>
  );

  yield view.add(
    <Rect layout ref={main_code_block_rect_ref} direction={"column"} scale={0}>
      <Rect
        layout
        direction={"row"}
        fill="#1e1e2e"
        width={180}
        marginBottom={12}
        padding={10}
        radius={8}
        alignItems={"center"}
        justifyContent={"center"}
        lineWidth={2}
        stroke={"#45475a"}
      >
        <Icon
          icon={"devicon-plain:rust"}
          color={"#cdd6f4"}
          width={32}
          height={32}
          marginRight={15}
        />
        <Txt
          fontFamily={"JetBrains Mono"}
          fontSize={22}
          fill="#cdd6f4"

        >main.rs</Txt>
      </Rect>
      <Rect
        layout
        alignItems={"center"}
        justifyContent={"center"}
        fill={"1e1e2e"}
        padding={30}
        paddingBottom={0}
        radius={10}
        y={15}
        lineWidth={2}
        stroke={"#45475a"}
      >
        <CodeBlock
          ref={main_codeblock}
          language='rust'
          fontFamily={"JetBrains Mono"}
          fontSize={36}
          code={`fn main() {\n    // Program code\n}`}
          lineHeight={70}
        />
      </Rect>
    </Rect>
  );

  yield view.add(
    <Latex
      tex="{\color{#cdd6f4} \text{Volume} = l \cdot b \cdot h }"
      ref={cuboid_formula_ref}
      y={150}
      width={500}
      opacity={0}
    />
  );

  yield view.add(
    <Latex
      tex="{\color{#cdd6f4} l, b, h = \text{Length, breadth and height} }"
      ref={cuboid_formula_1_ref}
      y={250}
      width={700}
      opacity={0}
    />
  );

  yield view.add(
    <Rect
      layout
      direction={"column"}
      width={700}
      height={450}
      fill={"1e1e2e"}
      radius={20}
      clip
    >
      <Rect
        layout
        alignContent={"center"}
        justifyContent={"start"}
        padding={20}
        height={60}
        width={700}
        fill={"181825"}
      ></Rect>
    </Rect>
  );

  yield* waitUntil("start-fn-code");

  yield* chain(
    tween(0.55, value => {
      code_block_rect_ref().scale(map(0, 1, easeOutSine(value)))
    }),
    waitUntil("define-fn"),
    codeblock().edit(0.75)`${insert('fn')}`,
    waitUntil("give-fn-name"),
    codeblock().edit(0.75)`fn${insert(' get_cuboid_volume')}`,
    waitUntil("put-brackets"),
    codeblock().edit(0.75)`fn get_cuboid_volume${insert('()')}`,
    waitUntil("put-braces"),
    codeblock().edit(0.75)`fn get_cuboid_volume()${insert(' {}')}`,
    waitFor(0.75)
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("write-logic-in-brackets"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {${insert('\n\n')}\}`,
    waitFor(0.75)
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("find-area-comment"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n${insert('    // Find the volume of a cuboid')}\n\}`,
    waitFor(0.75)
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("it-might-look-familiar"),
    tween(0.55, value => {
      code_block_rect_ref().scale(map(1, 0, easeInSine(value)))
    }),
    waitUntil("create-main-function"),
    tween(0.55, value => {
      main_code_block_rect_ref().scale(map(0, 1, easeOutSine(value)))
    }),
  );

  yield* chain(
    waitUntil("lets-get-back-to-writing"),
    tween(0.55, value => {
      main_code_block_rect_ref().scale(map(1, 0, easeInSine(value)))
    }),
    tween(0.55, value => {
      code_block_rect_ref().scale(map(0, 1, easeOutSine(value)))
    }),
  );

  yield* chain(
    waitUntil("area-formula"),
    tween(0.75, v => {
      code_block_rect_ref().y(map(0, -100, easeOutSine(v)))
    }),
    tween(0.75, v => {
      cuboid_formula_ref().opacity(map(0, 1, easeOutSine(v)))
    }),
    tween(0.75, v => {
      cuboid_formula_1_ref().opacity(map(0, 1, easeOutSine(v)))
    }),
    waitFor(0.75)
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("find-area-comment-end"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n${remove('    // Find the volume of a cuboid')}\n\}`,
    waitFor(0.75),
    waitUntil("create-three-variables"),
    all(
      tween(0.75, v => {
        cuboid_formula_ref().opacity(map(1, 0, easeOutSine(v)))
      }),
      tween(0.75, v => {
        cuboid_formula_1_ref().opacity(map(1, 0, easeOutSine(v)))
      })
    ),
    tween(0.75, v => {
      code_block_rect_ref().y(map(-100, 0, easeOutSine(v)))
    }),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n${insert('    let l;')}\n\}`,
    waitFor(0.75),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l;\n${insert('    let b;')}\n\}`,
    waitFor(0.75),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l;\n    let b;\n${insert('    let h;')}\n\}`,
    waitUntil("set-l"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l${insert(' = 256')};\n    let b;\n    let h;\n\}`,
    waitUntil("set-b"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l = 256;\n    let b${insert(' = 132')};\n    let h;\n\}`,
    waitUntil("set-h"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l = 256;\n    let b = 132;\n    let h${insert(' = 64')};\n\}`,
    waitUntil("create-volume-var"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l = 256;\n    let b = 132;\n    let h = 64;\n${insert('    let volume = ;')}\n\}`,
    waitUntil("product-of"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l = 256;\n    let b = 132;\n    let h = 64;\n    let volume = ${insert('l * b * h')};\n\}`,
    waitUntil("lets-print-it-out"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l = 256;\n    let b = 132;\n    let h = 64;\n    let volume = l * b * h;\n\n${insert('    println!("");')}\n\}`,
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l = 256;\n    let b = 132;\n    let h = 64;\n    let volume = l * b * h;\n\n    println!("${insert('{}')}");\n\}`,
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l = 256;\n    let b = 132;\n    let h = 64;\n    let volume = l * b * h;\n\n    println!("{}"${insert(', volume')});\n\}`,
    waitFor(0.75)
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* main_codeblock().code("fn main() {\n\n}");

  yield* chain(
    waitUntil("if-we-run"),
    tween(0.55, value => {
      code_block_rect_ref().scale(map(1, 0, easeInSine(value)))
    }),
    waitUntil("lets-go-back-to-main"),
    tween(0.55, value => {
      main_code_block_rect_ref().scale(map(0, 1, easeOutSine(value)))
    }),
    waitUntil("to-call-this-fn"),
    main_codeblock().edit(0.75)`fn main() {\n    ${insert("get_cuboid_area")}\n\}`,
    waitUntil("put-braces-to-call"),
    main_codeblock().edit(0.75)`fn main() {\n    get_cuboid_area${insert("()")}\n\}`
  );

  yield* chain(
    waitUntil("end-fn-code"),
    tween(0.55, value => {
      code_block_rect_ref().scale(map(1, 0, easeInSine(value)))
    }),
  );
  /* ----------- function code end ----------- */
});
