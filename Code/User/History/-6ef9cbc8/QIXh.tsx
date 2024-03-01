/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Circle, Icon, Line, Rect, Txt, makeScene2D } from "@motion-canvas/2d";
import {
  all,
  createRef,
  easeInOutQuad,
  easeInOutQuart,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loop,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  makeRef,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  range,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useRandom,
  waitFor,
  waitUntil,
} from "@motion-canvas/core";
import { animateClone } from "helpers/animations";

export default makeScene2D(function* (view) {
  /* ---- Background Start ---- */
//   const circles: Circle[] = [];
//   yield view.add(
//     <Rect
//       height="97%"
//       maxHeight="97%"
//       width="100%"
//       maxWidth="97%"
//       clip
//       layout
//       direction="column"
//       gap={45}
//       alignItems="center"
//       justifyContent="center"
//       wrap="wrap"
//     >
//       {range(759).map((i) => (
//         <Circle
//           width={2}
//           height={2}
//           fill="rgba(255, 255, 255, 0.35)"
//           ref={makeRef(circles, i)}
//           opacity={0}
//         />
//       ))}
//     </Rect>,
//   );

//   const random = useRandom();

//   yield* all(
//     ...circles.map((circle) =>
//       circle.opacity(random.nextFloat() > 0.5 ? 0 : 1, 0),
//     ),
//   );
//   yield loop(Infinity, () =>
//     all(
//       ...circles.map((circle) =>
//         circle.opacity(random.nextFloat() > 0.5 ? 0 : 1, 2),
//       ),
//     ),
//   );
  /* ---- Background End ---- */

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
        fontFamily="JetBrains Mono"
        fontSize={56}
        fontWeight={800}
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
        fontFamily="JetBrains Mono"
        fontSize={56}
        fontWeight={800}
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
        fontFamily="JetBrains Mono"
        fontSize={56}
        fontWeight={800}
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
      stroke="74c7ec"
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
        fill="74c7ec"
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
      stroke="74c7ec"
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
        fill="74c7ec"
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
      stroke="74c7ec"
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
        fill="74c7ec"
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
  yield* stackMemSampleFloatValue().stroke("74c7ec", 0.35, easeInOutQuart);
  yield* stackMemSampleIntValue().stroke("f9e2af", 0.35, easeInOutQuart);
  yield* waitFor(0.5);
  yield* stackMemSampleIntValue().stroke("74c7ec", 0.35, easeInOutQuart);

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

  yield* heapMemBoxContRef().opacity(1);
  yield* heapMemBoxContRef().scale(0);
  yield* heapMemBoxContRef().x(0);

  yield* heapMemBoxContRef().scale(1, 0.75, easeInOutQuart);

  const heapMemSampleValueCont = createRef<Rect>();
  const heapMemSampleValue1 = createRef<Rect>();
  const heapMemSampleValue2 = createRef<Rect>();
  const heapMemSampleValueText = createRef<Txt>();

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
  const stackMemPointerArrowBkg = createRef<Line>();
  const stackMemPointerArrow = createRef<Line>();

  stackMemBoxRef().add(
    <Rect
      width={310}
      minHeight={200}
      radius={10}
      lineWidth={5}
      stroke="74c7ec"
      layout
      alignItems="center"
      ref={stackMemPointerValue}
      paddingTop={10}
      paddingBottom={20}
      direction="column"
      opacity={0}
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontSize={32}
        fontWeight={600}
        fill="74c7ec"
        text="string_1"
      />
      <Rect stroke="74c7ec" lineWidth={5} width="100%" marginTop={10} />
      <Rect
        layout
        direction="column"
        alignItems="start"
        justifyContent="center"
        width="100%"
        height="100%"
        paddingLeft={40}
        paddingTop={20}
        gap={20}
      >
        <Txt
          fontFamily="JetBrains Mono"
          fontSize={32}
          fontWeight={600}
          fill="74c7ec"
          text="pointer: "
        />
        <Txt
          fontFamily="JetBrains Mono"
          fontSize={32}
          fontWeight={600}
          fill="74c7ec"
          text="length: 9"
        />
        <Txt
          fontFamily="JetBrains Mono"
          fontSize={32}
          fontWeight={600}
          fill="74c7ec"
          text="capacity: 9"
        />
      </Rect>
    </Rect>,
  );

  yield view.add(
    <Line
      lineWidth={50}
      stroke="000"
      points={[
        [-520, -120],
        [-300, -120],
        [-300, 40],
        [-160, 40],
      ]}
      radius={20}
      arrowSize={20}
      zIndex={1000}
      ref={stackMemPointerArrowBkg}
      end={0}
    />,
  );

  yield view.add(
    <Line
      lineWidth={9}
      stroke="f38ba8"
      points={[
        [-520, -120],
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
      clone.y(-91, 0.75, easeInOutQuart),
    );
  });

  yield* all(
    stackMemPointerArrow().end(1, 1, easeInOutQuad),
    stackMemPointerArrowBkg().end(1, 1, easeInOutQuad),
  );
});
