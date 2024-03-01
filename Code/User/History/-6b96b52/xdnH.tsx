/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Circle,
  Icon,
  Line,
  Rect,
  Txt,
  makeScene2D,
  blur,
  QuadBezier,
  CubicBezier,
} from "@motion-canvas/2d";
import {
  CodeBlock,
  edit,
  insert,
  lines,
  range,
  remove,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import {
  Vector2,
  all,
  createRef,
  easeInOutQuad,
  easeInOutQuart,
  easeInOutSine,
  easeInSine,
  loop,
  makeRef,
  useRandom,
  waitFor,
  waitUntil,
} from "@motion-canvas/core";
import { animateClone } from "helpers/animations";
import { Background } from "helpers/background";
import { CustomCodeBlock } from "helpers/codeblock";

export default makeScene2D(function* (view) {
  /* ---- Background Start ---- */
  // const circles: Circle[] = [];
  // yield view.add(<Background circles={circles} />);
  // const random = useRandom();

  // yield* all(
  //   ...circles.map((circle) =>
  //     circle.opacity(random.nextFloat() > 0.5 ? 0 : 1, 1),
  //   ),
  // );
  // yield loop(Infinity, () =>
  //   all(
  //     ...circles.map((circle) =>
  //       circle.opacity(random.nextFloat() > 0.5 ? 0 : 1, 2),
  //     ),
  //   ),
  // );
  /* ---- Background End ---- */

  const introTextRef = createRef<Txt>();
  const introSubTextRef = createRef<Txt>();

  yield view.add(
    <Txt
      fontFamily="Poppins"
      fontWeight={600}
      fontSize={102}
      ref={introTextRef}
      fill="cdd6f4"
    />,
  );

  yield view.add(
    <Txt
      fontFamily="Poppins"
      fontWeight={600}
      fontSize={42}
      ref={introSubTextRef}
      fill="fab387"
      y={120}
    />,
  );

  yield* introTextRef().text("The Ownership System", 1, easeInOutQuart);
  yield* introSubTextRef().text(
    "Rust Programming Series - #5",
    1,
    easeInOutQuad,
  );

  yield* waitUntil("learn basics");
  yield* all(
    introTextRef().opacity(0, 0.5, easeInSine),
    introTextRef().x(-700, 0.5, easeInSine),
    introSubTextRef().opacity(0, 0.5, easeInSine),
    introSubTextRef().x(-700, 0.5, easeInSine),
  );
  yield* introTextRef().x(0);
  yield* introTextRef().text("", 1, easeInOutQuart);
  yield* introTextRef().opacity(1);
  yield* introTextRef().fontSize(128);
  yield* introTextRef().fill("cba6f7");
  yield* introTextRef().text("Memory Allocation", 1, easeInOutQuart);
  yield* waitFor(2);
  yield* all(
    introTextRef().opacity(0, 0.5, easeInSine),
    introTextRef().y(-700, 0.5, easeInSine),
  );

  introSubTextRef().remove();
  /* ---- Memory Allocation Start ---- */

  const memBoxRef = createRef<Rect>();

  yield view.add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      justifyContent="center"
      ref={memBoxRef}
      scale={0}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={56}
        fontWeight={600}
        fill="b4befe"
        text="Memory"
        marginBottom={10}
      />
      <Rect
        width={350}
        height={550}
        lineWidth={8}
        radius={15}
        stroke="b4befe"
      />
    </Rect>,
  );

  yield* waitUntil("we utilize memory");
  yield* memBoxRef().scale(1, 0.75, easeInOutQuart);

  const stackMemBoxContRef = createRef<Rect>();
  const stackMemBoxRef = createRef<Rect>();

  yield view.add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      justifyContent="center"
      ref={stackMemBoxContRef}
      opacity={0}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={56}
        fontWeight={600}
        fill="a6e3a1"
        text="Stack"
        marginBottom={10}
      />
      <Rect
        width={350}
        height={550}
        lineWidth={8}
        radius={15}
        stroke="a6e3a1"
        direction="column"
        ref={stackMemBoxRef}
        alignItems="center"
        gap={30}
        padding={20}
        clip
      />
    </Rect>,
  );

  const heapMemBoxContRef = createRef<Rect>();
  const heapMemBoxRef = createRef<Rect>();

  yield view.add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      justifyContent="center"
      ref={heapMemBoxContRef}
      opacity={0}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={56}
        fontWeight={600}
        fill="fab387"
        text="Heap"
        marginBottom={10}
      />
      <Rect
        width={350}
        height={550}
        lineWidth={8}
        radius={15}
        stroke="fab387"
        direction="column"
        alignItems="center"
        gap={40}
        padding={20}
        clip
        ref={heapMemBoxRef}
      />
    </Rect>,
  );

  yield* waitUntil("memory is divided into two parts");
  yield* all(
    memBoxRef().opacity(0, 0.75, easeInOutQuart),
    stackMemBoxContRef().opacity(1, 0.75, easeInOutQuart),
    stackMemBoxContRef().x(-400, 0.75, easeInOutQuart),
    heapMemBoxContRef().opacity(1, 0.75, easeInOutQuart),
    heapMemBoxContRef().x(400, 0.75, easeInOutQuart),
  );

  yield* waitUntil("lets see how they're different");
  yield* all(
    stackMemBoxContRef().x(0, 1, easeInOutQuart),
    stackMemBoxContRef().scale(1.1, 1, easeInOutQuart),
    heapMemBoxContRef().opacity(0, 0.75, easeInOutQuart),
  );

  memBoxRef().remove();

  yield* stackMemBoxContRef().scale(1, 1, easeInOutQuart);

  const stackMemSampleIntValue = createRef<Rect>();
  const stackMemSampleFloatValue = createRef<Rect>();
  const stackMemSampleBoolValue = createRef<Rect>();

  stackMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="89b4fa"
      layout
      alignItems="center"
      justifyContent="center"
      ref={stackMemSampleIntValue}
      clip
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cdd6f4"
        text="some_int: 420"
      />
    </Rect>,
  );
  stackMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="89b4fa"
      layout
      alignItems="center"
      justifyContent="center"
      ref={stackMemSampleFloatValue}
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cdd6f4"
        text="a_float: 3.004"
      />
    </Rect>,
  );
  stackMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="89b4fa"
      layout
      alignItems="center"
      justifyContent="center"
      ref={stackMemSampleBoolValue}
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cdd6f4"
        text="bool: true"
      />
    </Rect>,
  );

  yield* waitUntil("integers");
  yield* animateClone(view, stackMemSampleIntValue(), function* (clone) {
    yield* clone.y(100);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-181, 0.75, easeInOutQuart),
    );
  });

  yield* waitUntil("floats");
  yield* animateClone(view, stackMemSampleFloatValue(), function* (clone) {
    yield* clone.y(140);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-80, 0.75, easeInOutQuart),
    );
  });

  yield* waitUntil("booleans");
  yield* animateClone(view, stackMemSampleBoolValue(), function* (clone) {
    yield* clone.y(240);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(18, 0.75, easeInOutQuart),
    );
  });

  yield* waitUntil("last value pushed");
  yield* stackMemSampleBoolValue().stroke("f38ba8", 0.25, easeInOutQuart);

  yield* waitUntil("first one to be popped off");
  yield* animateClone(view, stackMemSampleBoolValue(), function* (clone) {
    yield* all(
      clone.opacity(0, 0.75, easeInOutQuart),
      clone.y(180, 0.75, easeInOutQuart),
    );
  });
  yield* stackMemSampleBoolValue().opacity(0, 0);

  yield* waitUntil("efficient access to data");
  yield* stackMemSampleFloatValue().stroke("f9e2af", 0.35, easeInOutQuart);
  yield* waitFor(0.5);
  yield* stackMemSampleFloatValue().stroke("89b4fa", 0.35, easeInOutQuart);
  yield* stackMemSampleIntValue().stroke("f9e2af", 0.35, easeInOutQuart);
  yield* waitFor(0.5);
  yield* stackMemSampleIntValue().stroke("89b4fa", 0.35, easeInOutQuart);

  const stringTextRef = createRef<Txt>();
  const vectorsTextRef = createRef<Txt>();
  const xmark = createRef<Icon>();

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontSize={48}
      fontWeight={600}
      fill="f9e2af"
      text=""
      ref={stringTextRef}
      x={300}
    />,
  );

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontSize={48}
      fontWeight={600}
      fill="89b4fa"
      text=""
      ref={vectorsTextRef}
      x={300}
      y={100}
    />,
  );

  yield view.add(
    <Icon
      icon="f7:xmark-circle-fill"
      color="f38ba8"
      width={100}
      ref={xmark}
      x={-300}
      y={60}
      scale={0}
    />,
  );

  yield* waitUntil("but most of the time");
  yield* stackMemBoxContRef().x(-300, 0.75, easeInOutQuart);
  yield* waitUntil("strings");
  yield* stringTextRef().text('"Hello World"', 0.75, easeInOutQuart);
  yield* waitUntil("vectors");
  yield* vectorsTextRef().text("Vec<42, 23, 53>", 0.75, easeInOutQuart);
  yield* waitUntil("sizes can change");
  yield* stringTextRef().text('"Hello World!!!"', 0.75, easeInOutQuart);
  yield* vectorsTextRef().text("Vec<42, 23, 53, 69, 72>", 0.75, easeInOutQuart);
  yield* stringTextRef().text('"Hello"', 0.75, easeInOutQuart);
  yield* vectorsTextRef().text("Vec<42, 23>", 0.75, easeInOutQuart);

  yield* waitUntil("cannot be stored in the stack");
  yield* xmark().scale(1, 0.75, easeInOutQuart);

  yield* waitUntil("this is were the heap memory comes into play");
  yield* all(
    stringTextRef().scale(0, 0.75, easeInOutQuart),
    vectorsTextRef().scale(0, 0.75, easeInOutQuart),
    stackMemBoxContRef().scale(0, 0.75, easeInOutQuart),
    xmark().scale(0, 0.75, easeInOutQuart),
  );
  stackMemSampleBoolValue().remove();
  stackMemSampleFloatValue().remove();

  yield* heapMemBoxContRef().opacity(1);
  yield* heapMemBoxContRef().scale(0);
  yield* heapMemBoxContRef().x(0);

  yield* heapMemBoxContRef().scale(1, 0.75, easeInOutQuart);

  const heapMemSampleValueCont = createRef<Rect>();
  const heapMemSampleValue1 = createRef<Rect>();
  const heapMemSampleValue2 = createRef<Rect>();
  const heapMemSampleValueText = createRef<Txt>();
  const heapMemSampleValue2Text = createRef<Txt>();

  heapMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="b4befe"
      layout
      alignItems="center"
      justifyContent="center"
      ref={heapMemSampleValueCont}
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="b4befe"
        ref={heapMemSampleValueText}
        text='"Hello"'
      />
    </Rect>,
  );

  yield* waitUntil("store values of any size");
  yield* animateClone(view, heapMemSampleValueCont(), function* (clone) {
    yield* clone.y(100);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-181, 0.75, easeInOutQuart),
    );
  });

  yield* waitUntil("can grow or shrink");
  yield* heapMemSampleValueText().text('"Hello World"', 0.75, easeInOutQuart);
  yield* heapMemSampleValueText().text('"Hi"', 0.75, easeInOutQuart);

  heapMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="b4befe"
      layout
      alignItems="center"
      justifyContent="center"
      ref={heapMemSampleValue1}
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="b4befe"
        text="[42.2, 69.9]"
      />
    </Rect>,
  );

  heapMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="b4befe"
      layout
      alignItems="center"
      justifyContent="center"
      ref={heapMemSampleValue2}
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="b4befe"
        ref={heapMemSampleValue2Text}
        text='"Some Text"'
      />
    </Rect>,
  );

  yield* waitUntil("unlike the stack");
  yield* animateClone(view, heapMemSampleValue2(), function* (clone) {
    yield* clone.y(180);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(41, 0.75, easeInOutQuart),
    );
  });

  yield* animateClone(view, heapMemSampleValue1(), function* (clone) {
    yield* clone.y(240);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-72, 0.75, easeInOutQuart),
    );
  });

  yield* animateClone(view, heapMemSampleValue1(), function* (clone) {
    yield* all(
      clone.opacity(0, 0.75, easeInOutQuart),
      clone.y(140, 0.75, easeInOutQuart),
    );
  });
  yield* heapMemSampleValue1().opacity(0);

  yield* animateClone(view, heapMemSampleValueCont(), function* (clone) {
    yield* all(
      clone.opacity(0, 0.75, easeInOutQuart),
      clone.y(140, 0.75, easeInOutQuart),
    );
  });
  yield* heapMemSampleValueCont().opacity(0);

  yield* waitUntil("cannot directly access value");
  yield* heapMemSampleValue2().stroke("f38ba8", 0.25, easeInOutQuad);
  yield* heapMemSampleValue2().stroke("b4befe", 0.15, easeInOutQuad);
  yield* heapMemSampleValue2().stroke("f38ba8", 0.55, easeInOutQuad);
  yield* heapMemSampleValue2().stroke("b4befe", 0.15, easeInOutQuad);

  yield* waitUntil("instead, you need to");
  yield* stackMemBoxContRef().x(-600);
  stackMemBoxRef().removeChildren();
  yield* stackMemBoxContRef().scale(1, 0.75, easeInOutQuart);

  const stackMemPointerValue = createRef<Rect>();
  const stackMemPointerValueText = createRef<Txt>();
  const stackMemPointerValueLengthText = createRef<Txt>();
  const stackMemPointerArrowBkg = createRef<Line>();
  const stackMemPointerArrow = createRef<Line>();

  stackMemBoxRef().add(
    <Rect
      width={310}
      minHeight={200}
      radius={10}
      lineWidth={5}
      stroke="89b4fa"
      layout
      alignItems="center"
      ref={stackMemPointerValue}
      paddingTop={10}
      direction="column"
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cdd6f4"
        text="string_1"
        ref={stackMemPointerValueText}
      />
      <Rect stroke="89b4fa" lineWidth={5} width="100%" marginTop={10} />
      <Rect layout direction="row" width="100%" height="100%">
        <Rect
          layout
          direction="column"
          alignItems="end"
          justifyContent="center"
          width="65%"
          height="100%"
          paddingTop={20}
          paddingBottom={20}
          gap={20}
          clip
        >
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            text="pointer:"
          />
          <Rect stroke="89b4fa" lineWidth={5} width="100%" />
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            text="length:"
          />
        </Rect>
        <Rect
          layout
          direction="column"
          alignItems="center"
          justifyContent="center"
          width="35%"
          height="100%"
          paddingTop={20}
          paddingBottom={20}
          gap={20}
        >
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="89b4fa"
            text="⠀"
          />
          <Rect stroke="89b4fa" lineWidth={5} width="100%" />
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            ref={stackMemPointerValueLengthText}
            text="9"
          />
        </Rect>
      </Rect>
    </Rect>,
  );

  yield view.add(
    <Line
      lineWidth={44}
      stroke="000"
      points={[
        [-460, -120],
        [-300, -120],
        [-300, 40],
        [-160, 40],
      ]}
      radius={20}
      arrowSize={16}
      zIndex={1000}
      ref={stackMemPointerArrowBkg}
      end={0}
    />,
  );

  yield view.add(
    <Line
      lineWidth={7}
      stroke="f38ba8"
      points={[
        [-500, -120],
        [-300, -120],
        [-300, 40],
        [-160, 40],
      ]}
      endArrow
      radius={20}
      arrowSize={18}
      zIndex={1000}
      ref={stackMemPointerArrow}
      end={0}
    />,
  );

  yield* waitUntil("create a pointer");
  yield* animateClone(view, stackMemPointerValue(), function* (clone) {
    yield* clone.y(240);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-111, 0.75, easeInOutQuart),
    );
  });

  yield* all(
    stackMemPointerArrow().end(1, 1, easeInOutQuad),
    stackMemPointerArrowBkg().end(1, 1, easeInOutQuad),
  );

  yield* waitUntil("this brings us to our next topic");

  yield* all(
    stackMemBoxContRef().opacity(0, 0.75, easeInOutQuart),
    heapMemBoxContRef().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerArrow().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerArrowBkg().opacity(0, 0.75, easeInOutQuart),
  );
  /* ---- Memory Allocation End ---- */

  /* ---- Memory Manangement Start ---- */
  yield* introTextRef().text("");
  yield* introTextRef().opacity(1);
  yield* introTextRef().y(0);
  yield* introTextRef().fill("f38ba8");

  yield* introTextRef().text("Memory Management", 1, easeInOutQuart);
  yield* waitFor(2);
  yield* all(
    introTextRef().x(700, 0.75, easeInOutQuart),
    introTextRef().opacity(0, 0.55, easeInOutQuart),
  );
  yield* stackMemBoxContRef().x(-400);
  yield* heapMemBoxContRef().x(0);
  yield* stackMemPointerArrow().opacity(1);
  yield* stackMemPointerArrowBkg().opacity(1);
  yield* stackMemPointerArrow().end(0);
  yield* stackMemPointerArrowBkg().end(0);

  yield* stackMemPointerArrow().points([
    [-200, -121],
    [0, -121],
    [0, 40],
    [140, 40],
  ]);
  yield* stackMemPointerArrowBkg().points([
    [-200, -118],
    [0, -118],
    [0, 40],
    [140, 40],
  ]);

  yield* all(
    stackMemBoxContRef().x(-300, 0.75, easeInOutQuart),
    heapMemBoxContRef().x(300, 0.75, easeInOutQuart),
    stackMemBoxContRef().opacity(1, 0.75, easeInOutQuart),
    heapMemBoxContRef().opacity(1, 0.75, easeInOutQuart),
    stackMemPointerArrow().end(1, 0.75, easeInOutQuart),
    stackMemPointerArrowBkg().end(1, 0.75, easeInOutQuart),
  );

  yield* waitUntil("allocation and deallocation");

  const stackMemPointerValue1 = createRef<Rect>();
  const stackMemPointerValueArrow1 = createRef<Line>();
  const stackMemPointerValueArrowBkg1 = createRef<Line>();

  stackMemBoxRef().add(
    <Rect
      width={310}
      minHeight={200}
      radius={10}
      lineWidth={5}
      stroke="89b4fa"
      layout
      alignItems="center"
      ref={stackMemPointerValue1}
      paddingTop={10}
      direction="column"
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cdd6f4"
        text="string_2"
      />
      <Rect stroke="89b4fa" lineWidth={5} width="100%" marginTop={10} />
      <Rect layout direction="row" width="100%" height="100%">
        <Rect
          layout
          direction="column"
          alignItems="end"
          justifyContent="center"
          width="65%"
          height="100%"
          paddingTop={20}
          paddingBottom={20}
          gap={20}
          clip
        >
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            text="pointer:"
          />
          <Rect stroke="89b4fa" lineWidth={5} width="100%" />
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            text="length:"
          />
        </Rect>
        <Rect
          layout
          direction="column"
          alignItems="center"
          justifyContent="center"
          width="35%"
          height="100%"
          paddingTop={20}
          paddingBottom={20}
          gap={20}
        >
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="89b4fa"
            text="⠀"
          />
          <Rect stroke="89b4fa" lineWidth={5} width="100%" />
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            text="11"
          />
        </Rect>
      </Rect>
    </Rect>,
  );
  yield* animateClone(view, stackMemPointerValue1(), function* (clone) {
    yield* clone.y(340);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(140, 0.75, easeInOutQuart),
    );
  });
  yield view.add(
    <Line
      lineWidth={44}
      stroke="000"
      points={[
        [-200, 126],
        [0, 126],
        [0, 260],
        [140, 260],
      ]}
      radius={20}
      arrowSize={20}
      zIndex={1000}
      ref={stackMemPointerValueArrowBkg1}
      end={0}
    />,
  );

  yield view.add(
    <Line
      lineWidth={7}
      lineDash={[15, 0]}
      stroke="cba6f7"
      points={[
        [-200, 125],
        [0, 125],
        [0, 260],
        [140, 260],
      ]}
      endArrow
      radius={20}
      arrowSize={18}
      zIndex={1000}
      ref={stackMemPointerValueArrow1}
      end={0}
    />,
  );

  const heapMemSampleValue4 = createRef<Rect>();

  heapMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="b4befe"
      layout
      alignItems="center"
      justifyContent="center"
      opacity={0}
      ref={heapMemSampleValue4}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="b4befe"
        text="[3.14, 6.9]"
      />
    </Rect>,
  );

  const heapMemSampleValue3 = createRef<Rect>();
  const heapMemSampleValue3Text = createRef<Txt>();

  heapMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="b4befe"
      layout
      alignItems="center"
      justifyContent="center"
      ref={heapMemSampleValue3}
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="b4befe"
        text='"I use Arch!"'
        ref={heapMemSampleValue3Text}
      />
    </Rect>,
  );

  yield* animateClone(view, heapMemSampleValue3(), function* (clone) {
    yield* clone.y(100);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(261, 0.75, easeInOutQuart),
    );
  });

  yield* all(
    stackMemPointerValueArrow1().end(1, 0.75, easeInOutQuart),
    stackMemPointerValueArrowBkg1().end(1, 0.75, easeInOutQuart),
  );
  yield* animateClone(view, heapMemSampleValue1(), function* (clone) {
    yield* clone.y(240);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-72, 0.75, easeInOutQuart),
    );
  });
  yield* animateClone(view, heapMemSampleValueCont(), function* (clone) {
    yield* clone.y(240);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-181, 0.75, easeInOutQuart),
    );
  });

  yield* waitUntil("memory leaks");
  yield* all(
    heapMemSampleValue1().stroke("f38ba8", 0.55, easeInOutQuart),
    heapMemSampleValueCont().stroke("f38ba8", 0.55, easeInOutQuart),
  );

  yield* waitUntil("dangling pointers");
  yield* animateClone(view, heapMemSampleValue3(), function* (clone) {
    yield* all(
      clone.opacity(0, 0.75, easeInOutQuart),
      clone.y(340, 0.75, easeInOutQuart),
    );
  });
  yield* heapMemSampleValue3().opacity(0);
  yield* all(
    stackMemPointerValueArrow1().lineDash([15, 20], 0.75),
    stackMemPointerValueArrow1().stroke("6c7086", 0.75),
  );

  yield* waitUntil("there are two primary approaches");
  yield* all(
    stackMemBoxContRef().opacity(0, 0.75, easeInOutQuart),
    heapMemBoxContRef().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerArrow().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerValueArrow1().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerArrowBkg().opacity(0, 0.55, easeInOutQuart),
    stackMemPointerValueArrowBkg1().opacity(0, 0.55, easeInOutQuart),
  );
  yield* heapMemSampleValue1().opacity(0);
  yield* heapMemSampleValue3().opacity(0);
  yield* stackMemPointerValue1().opacity(0);

  const manualManagementTitleRef = createRef<Rect>();
  const garbageCollectorTitleRef = createRef<Rect>();

  yield view.add(
    <Rect
      width={700}
      height={140}
      radius={15}
      lineWidth={10}
      stroke="#f38ba8"
      zIndex={1005}
      scale={0}
      ref={manualManagementTitleRef}
      y={-50}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={56}
        fontWeight={600}
        fill="#f38ba8"
        text="Manual Management"
      />
    </Rect>,
  );

  yield view.add(
    <Rect
      width={700}
      height={140}
      radius={15}
      lineWidth={10}
      stroke="89dceb"
      zIndex={1005}
      scale={0}
      y={50}
      ref={garbageCollectorTitleRef}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={56}
        fontWeight={600}
        fill="89dceb"
        text="Garbage Collection"
      />
    </Rect>,
  );

  yield* waitUntil("manual management");
  yield* manualManagementTitleRef().scale(1, 0.75, easeInOutQuart);
  yield* manualManagementTitleRef().y(-160, 0.75, easeInOutQuart);
  yield* waitUntil("garbage collection");
  yield* garbageCollectorTitleRef().scale(1, 0.75, easeInOutQuart);
  yield* garbageCollectorTitleRef().y(160, 0.75, easeInOutQuart);

  yield* waitUntil("first lets talk about manual");
  yield* all(
    garbageCollectorTitleRef().opacity(0, 0.75, easeInOutQuart),
    manualManagementTitleRef().y(0, 0.75, easeInOutQuart),
    manualManagementTitleRef().scale(1.1, 0.75, easeInOutQuart),
  );

  yield* waitUntil("for example c provides");
  yield* manualManagementTitleRef().opacity(0, 0.75, easeInOutQuart);

  const mallocRef = createRef<Txt>();
  const freeRef = createRef<Txt>();
  const cIconRef = createRef<Icon>();

  yield view.add(
    <Icon icon="skill-icons:c" width={256} y={-300} scale={0} ref={cIconRef} />,
  );
  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontSize={64}
      fontWeight={600}
      fill="89b4fa"
      text="malloc()"
      y={-70}
      scale={0}
      ref={mallocRef}
    />,
  );

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontSize={64}
      fontWeight={600}
      fill="a6e3a1"
      text="free()"
      y={70}
      scale={0}
      ref={freeRef}
    />,
  );

  yield* cIconRef().scale(1, 0.75, easeInOutQuart);
  yield* waitUntil("like malloc");
  yield* mallocRef().scale(1, 0.75, easeInOutQuart);
  yield* waitUntil("and free");
  yield* freeRef().scale(1, 0.75, easeInOutQuart);

  yield* waitUntil("next lets talk about garbage collection");
  yield* all(
    cIconRef().scale(0, 0.75, easeInOutQuart),
    mallocRef().scale(0, 0.75, easeInOutQuart),
    freeRef().scale(0, 0.75, easeInOutQuart),
  );
  yield* garbageCollectorTitleRef().y(0);
  yield* garbageCollectorTitleRef().scale(0);
  yield* garbageCollectorTitleRef().opacity(1);

  yield* garbageCollectorTitleRef().scale(1, 0.75, easeInOutQuart);

  const goIconRef = createRef<Icon>();
  const jsIconRef = createRef<Icon>();

  yield view.add(
    <Icon
      icon="skill-icons:golang"
      width={200}
      y={-300}
      scale={0}
      x={-200}
      ref={goIconRef}
    />,
  );

  yield view.add(
    <Icon
      icon="skill-icons:javascript"
      width={200}
      y={-300}
      x={200}
      scale={0}
      ref={jsIconRef}
    />,
  );

  yield* waitUntil("langs such as go");
  yield* goIconRef().scale(1, 0.75, easeInOutQuart);
  yield* waitUntil("or javascript");
  yield* jsIconRef().scale(1, 0.75, easeInOutQuart);

  yield* heapMemSampleValueCont().stroke("b4befe");

  yield* waitUntil("it identifies and recalims");
  yield* all(
    goIconRef().scale(0, 0.75, easeInOutQuart),
    jsIconRef().scale(0, 0.75, easeInOutQuart),
    garbageCollectorTitleRef().opacity(0, 0.75, easeInOutQuart),
  );
  yield* all(
    stackMemBoxContRef().opacity(1, 0.75, easeInOutQuart),
    heapMemBoxContRef().opacity(1, 0.75, easeInOutQuart),
    stackMemPointerArrow().opacity(1, 0.75, easeInOutQuart),
    stackMemPointerArrowBkg().opacity(1, 0.55, easeInOutQuart),
  );

  const scanningArrow = createRef<Line>();

  yield view.add(
    <Line
      stroke="f38ba8"
      lineWidth={9}
      startArrow
      points={[Vector2.zero, [150, 0]]}
      y={-50}
      x={500}
      arrowSize={20}
      ref={scanningArrow}
      opacity={0}
    />,
  );
  yield* scanningArrow().opacity(1, 0.5, easeInOutQuart);

  yield* scanningArrow().y(250, 1, easeInOutSine);
  yield* scanningArrow().y(-180, 1, easeInOutSine);
  yield* heapMemSampleValueCont().stroke("f38ba8", 0.45);
  yield* animateClone(view, heapMemSampleValueCont(), function* (clone) {
    yield* all(
      clone.opacity(0, 0.75, easeInOutQuart),
      clone.y(140, 0.75, easeInOutQuart),
    );
  });
  heapMemSampleValueCont().opacity(0);
  yield* scanningArrow().opacity(0, 0.5, easeInOutQuart);

  yield* waitFor(1);

  yield* all(
    stackMemBoxContRef().opacity(0, 0.75, easeInOutQuart),
    heapMemBoxContRef().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerArrow().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerArrowBkg().opacity(0, 0.55, easeInOutQuart),
  );

  /* ---- Memory Manangement End ---- */

  /* ---- Rust Memory Management Start ---- */
  const rustmemTextRef = createRef<Txt>();

  yield view.add(
    <Txt
      fontFamily="Poppins"
      fontWeight={600}
      fontSize={118}
      ref={rustmemTextRef}
      fill="fab387"
    />,
  );

  yield* waitUntil("lets see how rust achieves memory safety");

  yield* rustmemTextRef().text("Memory Management in Rust", 1, easeInOutQuart);
  yield* waitFor(2);
  yield* all(
    rustmemTextRef().opacity(0, 0.55, easeInOutQuart),
    rustmemTextRef().x(-300, 0.75, easeInOutQuart),
  );

  const ownershipSystemTitle = createRef<Rect>();
  const ownershipSystemBorrowingTitle = createRef<Rect>();
  const ownershipSystemOwnershipTitle = createRef<Rect>();
  const ownershipSystemLifetimesTitle = createRef<Rect>();

  yield view.add(
    <Rect
      width={700}
      height={140}
      radius={15}
      lineWidth={10}
      stroke="fab387"
      zIndex={1005}
      scale={0}
      ref={ownershipSystemTitle}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={56}
        fontWeight={600}
        fill="fab387"
        text="Ownership System"
      />
    </Rect>,
  );

  yield view.add(
    <Rect
      width={400}
      height={100}
      radius={15}
      lineWidth={6}
      stroke="cba6f7"
      zIndex={1005}
      scale={0}
      ref={ownershipSystemOwnershipTitle}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="cba6f7"
        text="Ownership"
      />
    </Rect>,
  );

  yield view.add(
    <Rect
      width={400}
      height={100}
      radius={15}
      lineWidth={6}
      stroke="cba6f7"
      zIndex={1005}
      y={200}
      scale={0}
      ref={ownershipSystemBorrowingTitle}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="cba6f7"
        text="Borrowing"
      />
    </Rect>,
  );

  yield view.add(
    <Rect
      width={400}
      height={100}
      radius={15}
      lineWidth={6}
      stroke="cba6f7"
      zIndex={1005}
      y={400}
      scale={0}
      ref={ownershipSystemLifetimesTitle}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="cba6f7"
        text="Lifetimes"
      />
    </Rect>,
  );

  yield* waitUntil("instead rust uses ownership system");

  yield* ownershipSystemTitle().scale(1, 0.75, easeInOutQuart);

  yield* waitUntil("consists of three concepts");
  yield* ownershipSystemTitle().y(-200, 0.75, easeInOutQuart);

  yield* waitUntil("ownership");
  yield* ownershipSystemOwnershipTitle().scale(1, 0.75, easeInOutQuart);
  yield* waitUntil("borrowing");
  yield* ownershipSystemBorrowingTitle().scale(1, 0.75, easeInOutQuart);
  yield* waitUntil("lifetimes");
  yield* ownershipSystemLifetimesTitle().scale(1, 0.75, easeInOutQuart);

  yield* waitUntil("we will take a look at first two");
  yield* all(
    ownershipSystemTitle().opacity(0, 0.75, easeInOutQuart),
    ownershipSystemOwnershipTitle().scale(1.5, 0.75, easeInOutQuart),
    ownershipSystemBorrowingTitle().opacity(0, 0.75, easeInOutQuart),
    ownershipSystemLifetimesTitle().opacity(0, 0.75, easeInOutQuart),
  );
  yield* waitFor(2);
  yield* ownershipSystemOwnershipTitle().opacity(0, 0.75, easeInOutQuart);

  yield* waitUntil("first we will learn about the three rules");

  const ownershipRule1 = createRef<Txt>();
  const ownershipRule2 = createRef<Txt>();
  const ownershipRule3 = createRef<Txt>();

  yield view.add(
    <Rect
      layout
      alignItems="center"
      justifyContent="start"
      width={1100}
      clip
      y={-100}
      ref={ownershipRule1}
      opacity={0}
      gap={30}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="#f9e2af"
        text="1."
      />
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="#f9e2af"
        text="Each value has one owner."
      />
    </Rect>,
  );
  yield view.add(
    <Rect
      layout
      alignItems="center"
      justifyContent="start"
      width={1100}
      clip
      ref={ownershipRule2}
      opacity={0}
      gap={20}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="#f9e2af"
        text="2."
      />
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="#f9e2af"
        text="There can only be one owner at any time."
      />
    </Rect>,
  );
  yield view.add(
    <Rect
      layout
      alignItems="start"
      justifyContent="start"
      width={1100}
      clip
      y={130}
      ref={ownershipRule3}
      opacity={0}
      gap={20}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="#f9e2af"
        text="3."
      />
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="#f9e2af"
        text={`When the owner goes out of scope, \nthe value is dropped.`}
        lineHeight={60}
      />
    </Rect>,
  );

  yield* waitUntil("each value has one owner");
  yield* ownershipRule1().opacity(1, 0.75, easeInOutQuart);

  yield* waitUntil("there can only be one owner");
  yield* ownershipRule2().opacity(1, 0.75, easeInOutQuart);

  yield* waitUntil("when owner gone, value gone");
  yield* ownershipRule3().opacity(1, 0.75, easeInOutQuart);

  yield* waitUntil("lets look at the first one");
  yield* all(
    ownershipRule2().opacity(0, 0.75, easeInOutQuart),
    ownershipRule3().opacity(0, 0.75, easeInOutQuart),
    ownershipRule1().x(-300, 0.75, easeInOutQuart),
    ownershipRule1().y(-400, 0.75, easeInOutQuart),
  );

  const codeblockRect = createRef<Rect>();
  const codeblock = createRef<CodeBlock>();

  yield view.add(
    <CustomCodeBlock
      codeBlockRef={codeblock}
      rectRef={codeblockRect}
      code={`fn main() {\n\n}`}
      fontSize={36}
      lang="rust"
      scale={0}
      tabTitle="main.rs"
    />,
  );

  yield* codeblockRect().zIndex(100000000);

  yield* waitUntil("lets assume we have a string");
  yield* codeblockRect().scale(1, 0.75, easeInOutQuart);

  yield* codeblock().edit(0.75)`fn main() {\n${insert(
    '    String::from("Hi")',
  )}\n}`;

  yield* waitUntil("this string has an owner");

  yield* codeblock().edit(0.75)`fn main() {\n    ${insert(
    "let x = ",
  )}String::from("Hi")${insert(";")}\n}`;

  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);

  yield* stackMemPointerValue().opacity(0, 0);

  yield* heapMemSampleValue2().opacity(0);

  yield* waitUntil("what this will do is");

  yield* all(
    heapMemBoxContRef().x(750, 0, easeInOutQuart),
    stackMemBoxContRef().x(150, 0, easeInOutQuart),
    stackMemPointerArrow().x(450, 0, easeInOutQuart),
    stackMemPointerArrowBkg().x(450, 0, easeInOutQuart),
  );

  yield* codeblockRect().x(-500, 0.75, easeInOutQuart);

  yield* all(
    stackMemBoxContRef().opacity(1, 0.75, easeInOutQuart),
    heapMemBoxContRef().opacity(1, 0.75, easeInOutQuart),
  );

  yield* waitUntil("create a value in the heap");

  yield* heapMemSampleValue2Text().text('"Hi"');

  yield* animateClone(view, heapMemSampleValue2(), function* (clone) {
    yield* clone.y(240);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(41, 0.75, easeInOutQuart),
    );
  });

  yield* stackMemPointerValueText().text("x");
  yield* stackMemPointerValueLengthText().text("2");
  yield* stackMemPointerArrow().end(0);
  yield* stackMemPointerArrowBkg().end(0);
  yield* stackMemPointerArrow().opacity(1);
  yield* stackMemPointerArrowBkg().opacity(1);

  yield* animateClone(view, stackMemPointerValue(), function* (clone) {
    yield* clone.y(240);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-111, 0.75, easeInOutQuart),
    );
  });

  yield* waitUntil("that points to this value");
  yield* all(
    stackMemPointerArrow().end(1, 0.75, easeInOutQuart),
    stackMemPointerArrowBkg().end(1, 0.75, easeInOutQuart),
  );

  const checkmarkRef = createRef<Icon>();

  yield view.add(
    <Icon
      icon="material-symbols:check-circle-rounded"
      width={82}
      color="a6e3a1"
      ref={checkmarkRef}
      x={-150}
      y={-410}
      scale={0}
    />,
  );

  yield* waitUntil("we've satisfied the first rule");

  yield* checkmarkRef().scale(1, 0.75, easeInOutQuart);

  yield* waitUntil("next lets look at another scenario");
  yield* all(
    ownershipRule1().opacity(0, 0.75, easeInOutQuart),
    ownershipRule1().x(-800, 0.75, easeInOutQuart),
    checkmarkRef().opacity(0, 0.75, easeInOutQuart),
  );
  yield* ownershipRule2().y(-400);
  yield* ownershipRule2().x(-700);

  yield* all(
    ownershipRule2().opacity(1, 0.75, easeInOutQuart),
    ownershipRule2().x(-300, 0.75, easeInOutQuart),
  );

  yield* waitUntil("putting let x = y");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = String::from("Hi");${insert(
    "\n    let y = x;",
  )}\n}`;
  yield* waitUntil("it will transfer ownership of x to y");
  yield* stackMemPointerValueText().text("y", 0.75, easeInOutQuart);

  yield* waitUntil("if we try to print x");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = String::from("Hi");\n    let y = x;${insert(
    '\n    println!("{}", x);',
  )}\n}`;
  yield* xmark().zIndex(1000000000);
  yield* xmark().y(80);
  yield* xmark().x(-260);
  yield* xmark().scale(1, 0.75, easeInOutQuart);
  yield* waitFor(1);
  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);

  yield* waitUntil("in rust terms, we say");

  yield* waitUntil("lets look at the third and final rule");
  yield* xmark().scale(0, 0.75, easeInOutQuart);
  yield* all(
    ownershipRule2().opacity(0, 0.75, easeInOutQuart),
    ownershipRule2().x(-700, 0.75, easeInOutQuart),
  );
  yield* ownershipRule3().y(-350);
  yield* all(
    ownershipRule3().opacity(1, 0.75, easeInOutQuart),
    ownershipRule3().x(-300, 0.75, easeInOutQuart),
  );

  yield* waitUntil("what do we mean by scope");
  yield* waitFor(0.75);
  yield* codeblock().selection(range(0, 10, 4, 1));
  yield* waitUntil("when the main function ends");

  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);

  const endOfScopeArrow = createRef<Line>();
  yield view.add(
    <Line
      lineWidth={8}
      stroke="f38ba8"
      points={[
        [-100, 0],
        [0, 0],
      ]}
      startArrow
      arrowSize={16}
      x={-660}
      y={155}
      ref={endOfScopeArrow}
      zIndex={200000000}
      opacity={0}
    />,
  );

  yield* endOfScopeArrow().opacity(1, 0.75, easeInOutQuart);
  yield* waitUntil("the y variable is dropped");

  yield* all(
    stackMemPointerArrow().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerArrowBkg().opacity(0, 0.75, easeInOutQuart),
    animateClone(view, stackMemPointerValue(), function* (clone) {
      yield* all(
        clone.opacity(0, 0.75, easeInOutQuart),
        clone.y(240, 0.75, easeInOutQuart),
      );
    }),
  );
  yield* stackMemPointerValue().opacity(0);

  yield* waitUntil("string doesnt have an owner");

  yield* heapMemSampleValue2().stroke("f38ba8", 0.55, easeInOutQuart);

  yield* waitUntil("so rust drops this value");
  yield* animateClone(view, heapMemSampleValue2(), function* (clone) {
    yield* all(
      clone.opacity(0, 0.75, easeInOutQuart),
      clone.y(240, 0.75, easeInOutQuart),
    );
  });
  yield* heapMemSampleValue2().opacity(0);
  yield* endOfScopeArrow().opacity(0, 0.75, easeInOutQuart);
  yield* ownershipRule3().opacity(0, 0.75, easeInOutQuart);

  yield* waitUntil("lets change the value of x");
  yield* codeblock().edit(0.75)`fn main() {\n    let x = ${edit(
    'String::from("Hi")',
    "10",
  )};\n    let y = x;\n    println!("{}", x);\n}`;
  yield* waitUntil("since integers are fixed, allocate on stack");

  const stackValueX = createRef<Rect>();
  const stackValueY = createRef<Rect>();

  stackMemBoxRef().removeChildren();

  stackMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="89b4fa"
      layout
      alignItems="center"
      justifyContent="center"
      ref={stackValueX}
      clip
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cdd6f4"
        text="x: 10"
      />
    </Rect>,
  );

  stackMemBoxRef().add(
    <Rect
      width={310}
      height={70}
      radius={10}
      lineWidth={5}
      stroke="89b4fa"
      layout
      alignItems="center"
      justifyContent="center"
      ref={stackValueY}
      clip
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cdd6f4"
        text="y: 10"
      />
    </Rect>,
  );
  yield* animateClone(view, stackValueX(), function* (clone) {
    yield* clone.y(240);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-181, 0.75, easeInOutQuart),
    );
  });
  yield* waitUntil("it is instead copied");

  yield* animateClone(view, stackValueY(), function* (clone) {
    yield* clone.y(240);
    yield* all(
      clone.opacity(1, 0.75, easeInOutQuart),
      clone.y(-81, 0.75, easeInOutQuart),
    );
  });

  yield* waitUntil("there are two integers");

  yield* all(
    stackValueX().stroke("f9e2af", 0.75, easeInOutQuart),
    stackValueY().stroke("f9e2af", 0.75, easeInOutQuart),
  );

  yield* waitUntil("we can do one of two things");
  const overlayRef = createRef<Rect>();
  yield* view.add(
    <Rect
      width={1920}
      height={1080}
      fill="181825"
      opacity={0}
      zIndex={500000000}
      ref={overlayRef}
    />,
  );
  yield* overlayRef().opacity(0.98, 0.75, easeInOutQuart);

  const deepClonePointRef = createRef<Txt>();
  const shallowClonePointRef = createRef<Txt>();

  yield view.add(
    <Txt
      text="1. Create a deep clone"
      fontFamily="JetBrains Mono"
      fontSize={48}
      fontWeight={600}
      fill="f9e2af"
      zIndex={600000000}
      y={-50}
      x={-245}
      ref={deepClonePointRef}
      opacity={0}
    />,
  );

  yield view.add(
    <Txt
      text="2. Create a shallow clone (a reference)"
      fontFamily="JetBrains Mono"
      fontSize={48}
      fontWeight={600}
      fill="a6e3a1"
      zIndex={600000000}
      y={50}
      ref={shallowClonePointRef}
      opacity={0}
    />,
  );

  yield* waitUntil("create a deep clone of this variable");
  yield* deepClonePointRef().opacity(1, 0.75, easeInOutQuart);
  yield* waitUntil("create a shallow clone of this variable");
  yield* shallowClonePointRef().opacity(1, 0.75, easeInOutQuart);

  yield* waitUntil("lets look at the first option");
  yield* all(
    shallowClonePointRef().opacity(0, 0.75, easeInOutQuart),
    deepClonePointRef().scale(1.1, 0.75, easeInOutQuart),
    deepClonePointRef().x(0, 0.75, easeInOutQuart),
    deepClonePointRef().y(0, 0.75, easeInOutQuart),
  );
  yield* codeblock().edit(0)`fn main() {\n    let x = ${edit(
    "10",
    'String::from("Hi")',
  )};\n    let y = x;\n    println!("{}", x);\n}`;
  stackMemBoxRef().removeChildren();
  yield* heapMemSampleValue2().opacity(1);
  yield* heapMemSampleValue2().stroke("b4befe");
  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);
  stackMemBoxRef().add(
    <Rect
      width={310}
      minHeight={200}
      radius={10}
      lineWidth={5}
      stroke="89b4fa"
      layout
      alignItems="center"
      ref={stackMemPointerValue}
      paddingTop={10}
      direction="column"
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cdd6f4"
        text="x"
        ref={stackMemPointerValueText}
      />
      <Rect stroke="89b4fa" lineWidth={5} width="100%" marginTop={10} />
      <Rect layout direction="row" width="100%" height="100%">
        <Rect
          layout
          direction="column"
          alignItems="end"
          justifyContent="center"
          width="65%"
          height="100%"
          paddingTop={20}
          paddingBottom={20}
          gap={20}
          clip
        >
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            text="pointer:"
          />
          <Rect stroke="89b4fa" lineWidth={5} width="100%" />
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            text="length:"
          />
        </Rect>
        <Rect
          layout
          direction="column"
          alignItems="center"
          justifyContent="center"
          width="35%"
          height="100%"
          paddingTop={20}
          paddingBottom={20}
          gap={20}
        >
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="89b4fa"
            text="⠀"
          />
          <Rect stroke="89b4fa" lineWidth={5} width="100%" />
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            ref={stackMemPointerValueLengthText}
            text="2"
          />
        </Rect>
      </Rect>
    </Rect>,
  );
  stackMemBoxRef().add(
    <Rect
      width={310}
      minHeight={200}
      radius={10}
      lineWidth={5}
      stroke="89b4fa"
      layout
      alignItems="center"
      ref={stackMemPointerValue1}
      paddingTop={10}
      opacity={0}
      direction="column"
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="cdd6f4"
        text="y"
      />
      <Rect stroke="89b4fa" lineWidth={5} width="100%" marginTop={10} />
      <Rect layout direction="row" width="100%" height="100%">
        <Rect
          layout
          direction="column"
          alignItems="end"
          justifyContent="center"
          width="65%"
          height="100%"
          paddingTop={20}
          paddingBottom={20}
          gap={20}
          clip
        >
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            text="pointer:"
          />
          <Rect stroke="89b4fa" lineWidth={5} width="100%" />
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            text="length:"
          />
        </Rect>
        <Rect
          layout
          direction="column"
          alignItems="center"
          justifyContent="center"
          width="35%"
          height="100%"
          paddingTop={20}
          paddingBottom={20}
          gap={20}
        >
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="89b4fa"
            text="⠀"
          />
          <Rect stroke="89b4fa" lineWidth={5} width="100%" />
          <Txt
            fontFamily="JetBrains Mono"
            fontSize={32}
            fontWeight={600}
            fill="cdd6f4"
            ref={stackMemPointerValueLengthText}
            text="2"
          />
        </Rect>
      </Rect>
    </Rect>,
  );
  yield* stackMemPointerArrow().opacity(1);
  yield* stackMemPointerArrowBkg().opacity(1);
  yield* all(
    overlayRef().opacity(0, 0.75, easeInOutQuart),
    deepClonePointRef().opacity(0, 0.75, easeInOutQuart),
  );
  yield* waitUntil("we can call the .clone method");

  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = String::from("Hi");\n    let y = x${insert(
    ".clone()",
  )};\n    println!("{}", x);\n}`;

  yield* waitUntil("it will create a copy in heap and stack");
  yield* heapMemSampleValue3Text().text('"Hi"');
  yield* stackMemPointerValueArrow1().opacity(1);
  yield* stackMemPointerValueArrowBkg1().opacity(1);
  yield* stackMemPointerValueArrow1().x(450);
  yield* stackMemPointerValueArrow1().y(0);
  yield* stackMemPointerValueArrowBkg1().x(450);
  yield* stackMemPointerValueArrowBkg1().y(0);
  yield* stackMemPointerValueArrowBkg1().end(0);
  yield* stackMemPointerValueArrow1().end(0);
  yield* stackMemPointerValueArrow1().stroke("f9e2af");
  yield* stackMemPointerValueArrow1().lineDash([0, 0]);

  yield* all(
    animateClone(view, heapMemSampleValue3(), function* (clone) {
      yield* clone.y(340);
      yield* all(
        clone.opacity(1, 0.75, easeInOutQuart),
        clone.y(261, 0.75, easeInOutQuart),
      );
    }),
    animateClone(view, stackMemPointerValue1(), function* (clone) {
      yield* clone.y(340);
      yield* all(
        clone.opacity(1, 0.75, easeInOutQuart),
        clone.y(131, 0.75, easeInOutQuart),
      );
    }),
  );
  yield* all(
    stackMemPointerValueArrow1().end(1, 0.75, easeInOutQuart),
    stackMemPointerValueArrowBkg1().end(1, 0.75, easeInOutQuart),
  );

  yield* waitUntil("the process of borrowing");
  yield* all(
    codeblockRect().opacity(0, 0.75, easeInOutQuart),
    stackMemBoxContRef().opacity(0, 0.75, easeInOutQuart),
    heapMemBoxContRef().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerArrow().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerArrowBkg().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerValueArrowBkg1().opacity(0, 0.75, easeInOutQuart),
    stackMemPointerValueArrow1().opacity(0, 0.75, easeInOutQuart),
  );

  yield ownershipSystemBorrowingTitle().opacity(1);
  yield ownershipSystemBorrowingTitle().y(0);
  yield ownershipSystemBorrowingTitle().scale(0);

  yield* ownershipSystemBorrowingTitle().scale(1.5, 0.75, easeInOutQuart);

  yield* waitFor(2);
  yield* ownershipSystemBorrowingTitle().opacity(0, 0.75, easeInOutQuart);

  yield* waitUntil("now lets see how we can create refs");
  yield* codeblock().code("");
  yield* codeblockRect().opacity(1);
  yield* codeblockRect().x(0);
  yield* codeblockRect().scale(0);
  yield* codeblockRect().scale(1, 0.75, easeInOutQuart);

  yield* waitUntil("first we will create a function");
  yield* codeblock().edit(0.75)`${insert("fn get_str_len()")}`;
  yield* waitUntil("that takes in a string");
  yield* codeblock().edit(0.75)`fn get_str_len(${insert("s: String")})`;
  yield* waitUntil("returns length of string");
  yield* codeblock().edit(0.75)`fn get_str_len(s: String)${insert(" -> u32")}`;
  yield* codeblock().edit(0.75)`fn get_str_len(s: String) -> u32${insert(
    ` {\n    s.len()\n}`,
  )}`;

  yield* waitUntil("if we call this function passing in x");

  yield* codeblock().edit(
    0.75,
  )`fn get_str_len(s: String) -> u32 {\n    s.len()\n}${insert(
    `\n\nfn main() {\n    let x = String::from("Hi");\n    get_str_len(x);\n    println!("{}", x);\n}`,
  )}`;
  yield* waitFor(1);
  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);

  yield* waitUntil("by putting an ampersand before the String type");
  yield* codeblock().edit(0.75)`fn get_str_len(s: ${insert(
    "&",
  )}String) -> u32 {\n    s.len()\n}\n\nfn main() {\n    let x = String::from("Hi");\n    get_str_len(x);\n    println!("{}", x);\n}`;

  yield* waitFor(1);
  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);

  yield* waitUntil("borrow x when we pass it");

  yield* codeblock().edit(
    0.75,
  )`fn get_str_len(s: &String) -> u32 {\n    s.len()\n}\n\nfn main() {\n    let x = String::from("Hi");\n    get_str_len(${insert(
    "&",
  )}x);\n    println!("{}", x);\n}`;

  yield* waitUntil("okay lets look another example");

  yield* codeblock().edit(0.75)`fn ${edit(
    "get_str_len",
    "mutate_str",
  )}(s: &String) ${remove(
    "-> u32 ",
  )}{\n    s.len()\n}\n\nfn main() {\n    let x = String::from("Hi");\n    get_str_len(&x);\n    println!("{}", x);\n}`;

  yield* waitUntil("lets push an exclamation mark");
  yield* codeblock().edit(0.75)`fn mutate_str(s: &String) {\n    s.${edit(
    "len()",
    "push('!');",
  )}\n}\n\nfn main() {\n    let x = String::from("Hi");\n    get_str_len(&x);\n    println!("{}", x);\n}`;
  yield* waitUntil("this wont work");
  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);
  yield* xmark().x(100);
  yield* xmark().y(-205);
  yield* xmark().scale(1, 0.75, easeInOutQuart);

  const isImmutableRefArrow = createRef<Line>();
  const isImmutableRefText = createRef<Txt>();

  yield view.add(
    <Line
      lineWidth={6}
      stroke="cdd6f4"
      points={[
        [0, 0],
        [0, 120],
      ]}
      endArrow
      arrowSize={16}
      y={-430}
      x={120}
      zIndex={200000000000}
      ref={isImmutableRefArrow}
      end={0}
    />,
  );

  yield view.add(
    <Txt
      text=""
      zIndex={200000000000}
      fontFamily="Poppins"
      fontSize={48}
      fill="f38ba8"
      fontWeight={600}
      x={120}
      y={-460}
      ref={isImmutableRefText}
    />,
  );

  yield* waitUntil("thats because this is an immutable reference");
  yield* all(
    isImmutableRefArrow().end(1, 0.75, easeInOutQuart),
    isImmutableRefText().text("Immutable Reference", 0.75, easeInOutQuart),
  );

  yield* waitUntil("we need to acquire mutable reference");
  yield* all(
    isImmutableRefArrow().start(1, 0.75, easeInOutQuart),
    isImmutableRefText().text("", 0.75, easeInOutQuart),
    xmark().scale(0, 0.75, easeInOutQuart),
  );

  yield* waitUntil("by putting mut after the ampersand");

  yield* codeblock().edit(0.75)`fn mutate_str(s: &${insert(
    "mut ",
  )}String) {\n    s.push('!');\n}\n\nfn main() {\n    let x = String::from("Hi");\n    get_str_len(&x);\n    println!("{}", x);\n}`;

  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);

  yield* waitUntil("we need to make x mut");
  yield* codeblock().edit(
    0.75,
  )`fn mutate_str(s: &mut String) {\n    s.push('!');\n}\n\nfn main() {\n    let ${insert(
    "mut ",
  )}x = String::from("Hi");\n    get_str_len(&x);\n    println!("{}", x);\n}`;

  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);

  yield* waitUntil("pass x as mutable");

  yield* codeblock().edit(
    0.75,
  )`fn mutate_str(s: &mut String) {\n    s.push('!');\n}\n\nfn main() {\n    let mut x = String::from("Hi");\n    get_str_len(&${insert(
    "mut ",
  )}x);\n    println!("{}", x);\n}`;
  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);

  yield* waitUntil("but we cant just create refs");
  yield* codeblockRect().scale(0, 0.75, easeInOutQuart);

  const refRule1 = createRef<Rect>();
  const refRule11 = createRef<Rect>();
  const refRule12 = createRef<Rect>();
  const refRule2 = createRef<Rect>();

  yield view.add(
    <Rect
      layout
      alignItems="center"
      justifyContent="start"
      width={1100}
      clip
      y={-200}
      ref={refRule1}
      opacity={0}
      gap={30}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={46}
        fontWeight={600}
        fill="#cba6f7"
        text="1."
      />
      <Txt
        fontFamily="Poppins"
        fontSize={46}
        fontWeight={600}
        fill="#cba6f7"
        text="At any given time, you can have either:"
      />
    </Rect>,
  );
  yield view.add(
    <Rect
      layout
      alignItems="center"
      justifyContent="start"
      width={1100}
      clip
      y={-100}
      x={100}
      ref={refRule11}
      opacity={0}
      gap={30}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="#a6e3a1"
        text="-"
      />
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="#a6e3a1"
        text="one mutable reference"
      />
    </Rect>,
  );
  yield view.add(
    <Rect
      layout
      alignItems="center"
      justifyContent="start"
      width={1100}
      clip
      y={0}
      x={100}
      ref={refRule12}
      opacity={0}
      gap={30}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="#a6e3a1"
        text="-"
      />
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="#a6e3a1"
        text="any number of immutable references"
      />
    </Rect>,
  );
  yield view.add(
    <Rect
      layout
      alignItems="center"
      justifyContent="start"
      width={1100}
      clip
      y={150}
      ref={refRule2}
      opacity={0}
      gap={30}
    >
      <Txt
        fontFamily="Poppins"
        fontSize={46}
        fontWeight={600}
        fill="#cba6f7"
        text="2."
      />
      <Txt
        fontFamily="Poppins"
        fontSize={46}
        fontWeight={600}
        fill="#cba6f7"
        text="References must always be valid"
      />
    </Rect>,
  );

  yield* waitUntil("at any time you can have");
  yield* refRule1().opacity(1, 0.75, easeInOutQuart);
  yield* waitUntil("one mutable reference");
  yield* refRule11().opacity(1, 0.75, easeInOutQuart);
  yield* waitUntil("any number of immutable references");
  yield* refRule12().opacity(1, 0.75, easeInOutQuart);
  yield* waitUntil("references must always be valid");
  yield* refRule2().opacity(1, 0.75, easeInOutQuart);

  yield* waitUntil("lets see them in action");
  yield* all(
    refRule1().opacity(0, 0.75, easeInOutQuart),
    refRule11().opacity(0, 0.75, easeInOutQuart),
    refRule12().opacity(0, 0.75, easeInOutQuart),
    refRule2().opacity(0, 0.75, easeInOutQuart),
  );

  yield* codeblock().code(
    'fn main() {\n    let mut x = String::from("hello world!");\n}',
  );
  yield* codeblockRect().scale(1, 0.75, easeInOutQuart);

  yield* waitUntil("lets create a variable named y");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = String::from("hello world!");${insert(
    "\n    let y = &mut x;",
  )}\n}`;
  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);

  yield* waitUntil("we can print it out as usual");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = String::from("hello world!");\n    let y = &mut x;${insert(
    '\n    println!("{}", y);',
  )}\n}`;
  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);

  yield* waitUntil("if we create another variable z");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = String::from("hello world!");\n    let y = &mut x;${insert(
    "\n    let z = &x;",
  )}\n    println!("{}", y);\n}`;

  yield* xmark().x(-50);
  yield* xmark().y(45);

  yield* xmark().scale(0.75, 0.75, easeInOutQuart);

  const eitherRef = createRef<Line>();
  yield view.add(
    <Line
      lineWidth={6}
      stroke="f38ba8"
      points={[
        [0, 0],
        [100, 0],
      ]}
      endArrow
      arrowSize={14}
      y={-25}
      x={-510}
      zIndex={200000000000}
      ref={eitherRef}
      end={0}
    />,
  );

  yield* waitUntil("we can have one mutable ref");
  yield* xmark().scale(0, 0.75, easeInOutQuart);
  yield* all(
    eitherRef().end(1, 0.75, easeInOutQuart),
    codeblock().selection(lines(2, 2), 0.75, easeInOutQuart),
  );

  yield* waitUntil("or any number of immutable refs");
  yield* all(
    eitherRef().y(45, 0.75, easeInOutQuart),
    codeblock().selection(lines(3, 3), 0.75, easeInOutQuart),
  );

  yield* waitUntil("but not both at the same time");
  yield* all(
    eitherRef().opacity(0, 0.75, easeInOutQuart),
    codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart),
  );

  yield* waitUntil("now lets look at the second rule");
  yield* codeblockRect().scale(0, 0.75, easeInOutQuart);
  yield* codeblock().code("");

  yield* waitUntil("understand this better with an example");
  yield* codeblockRect().scale(1, 0.75, easeInOutQuart);

  yield* waitUntil("consider this function");

  yield* codeblock().edit(0.75)`${insert(
    'fn return_ptr() -> &String {\n    let string = String::from("Hello");\n    return &string;\n}',
  )}`;

  yield* waitUntil("we are returning a immutable ref to string");
  yield* codeblock().selection(range(0, 19, 0, 26), 0.55, easeInOutQuart);

  yield* waitUntil("we create a string");
  yield* codeblock().selection(lines(1, 1), 0.55, easeInOutQuart);

  yield* waitUntil("return reference to it");
  yield* codeblock().selection(lines(2, 2), 0.55, easeInOutQuart);

  yield* waitUntil("this wont work now");
  yield* codeblock().selection(lines(0, Infinity), 0.75, easeInOutQuart);
  yield* xmark().x(30);
  yield* xmark().y(35);
  yield* xmark().scale(0.75, 0.75, easeInOutQuart);

  const isDroppedRef = createRef<Rect>();

  yield view.add(
    <Rect
      layout
      zIndex={200000000}
      alignItems="center"
      justifyContent="center"
      x={-750}
      y={110}
      opacity={0}
      ref={isDroppedRef}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={42}
        fontWeight={400}
        fill="89b4fa"
      >
        string
      </Txt>
      <Txt
        fontFamily="Poppins"
        fontSize={42}
        fontWeight={600}
        fill="cdd6f4"
        marginLeft={20}
      >
        is dropped
      </Txt>
    </Rect>,
  );

  yield* waitUntil("this string is dropped");
  yield* eitherRef().y(105);
  yield* eitherRef().lineWidth(8);
  yield* eitherRef().arrowSize(16);
  yield* eitherRef().x(-535);
  yield* all(
    eitherRef().opacity(1, 0.75, easeInOutQuart),
    isDroppedRef().opacity(1, 0.75, easeInOutQuart),
  );

  yield* waitUntil('thats all');
    codeblockRect().scale(0, 0.75, easeInOutQuart), eitherRef().opacity(0, 0.75, easeInOutQuart), isDroppedRef().opacity(0,0.75, easeInOutQuart)
  /* ---- Rust Memory Management End ---- */
});
