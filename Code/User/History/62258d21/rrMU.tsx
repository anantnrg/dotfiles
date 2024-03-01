/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
import { Circle, Rect, makeScene2D } from "@motion-canvas/2d";
import {
  Reference,
  ThreadGenerator,
  all,
  chain,
  createRef,
  easeInOutQuad,
  loop,
  makeRef,
  range,
  sequence,
  waitFor,
} from "@motion-canvas/core";

interface MakeCirclesProps {
  circles: Array<Reference<Circle>>;
}

function MakeCircles(props: MakeCirclesProps) {
  const rows = [];
  for (let i = 0; i <= 671; i++) {
    rows.push(
      <Circle
        width={2}
        height={2}
        fill="rgba(255, 255, 255, 0.7)"
        ref={props.circles[i]}
      />,
    );
  }
  // 15 x 21
  return (
    <Rect
      height="97%"
      maxHeight="97%"
      width="100%"
      maxWidth="97%"
      // fill="cdd6f4"
      clip
      layout
      direction="column"
      gap={50}
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
    >
      {rows}
    </Rect>
  );
}

// function toggleCircles(circles: Array<Reference<Circle>>): ThreadGenerator {
//   for (let i = 0; i <= 617 / 2; i++) {
//     yield circles[i]().opacity(Math.random() < 0.5 ? 1 : 0, 1, easeInOutQuad);
//   }
//   return null;
// }

export default makeScene2D(function* (view) {
  // const circles = [];
  // for (let i = 0; i <= 617; i++) {
  //   circles.push(createRef<Circle>());
  // }
  // yield view.add(<MakeCircles circles={circles} />);
  // toggleCircles(circles);
  // toggleCircles(circles);

  const circles: Circle[] = [];
  yield view.add(
    <Rect
      height="97%"
      maxHeight="97%"
      width="100%"
      maxWidth="97%"
      // fill="cdd6f4"
      clip
      layout
      direction="column"
      gap={50}
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
    >
      {range(630).map((i) => (
        <Circle
          width={2}
          height={2}
          fill="rgba(255, 255, 255, 0.7)"
          ref={makeRef(circles, i)}
          opacity={0}
        />
      ))}
    </Rect>,
  );

  yield* loop(15, () => {
    const shuffledCircles = circles.sort(() => Math.random() - 0.5);
    const halfOfCircles = shuffledCircles.slice(
      0,
      Math.ceil(shuffledCircles.length / 2),
    );
    return all(sequence(
      0,
      ...halfOfCircles.map((circle) =>
        chain(circle.opacity(1, 0.5), waitFor(2), circle.opacity(0, 0)),
      ),
    );
  });
});
