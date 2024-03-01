/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
import { Circle, Rect, makeScene2D } from "@motion-canvas/2d";
import {
  Reference,
  all,
  chain,
  createRef,
  easeInOutQuad,
  loop,
  makeRef,
  range,
  sequence,
  useRandom,
  waitFor,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const circles: Circle[] = [];
  yield view.add(
    <Rect
      height="97%"
      maxHeight="97%"
      width="100%"
      maxWidth="97%"
      clip
      layout
      direction="column"
      gap={45}
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
    >
      {range(759).map((i) => (
        <Circle
          width={2}
          height={2}
          fill="rgba(255, 255, 255, 0.75)"
          ref={makeRef(circles, i)}
          opacity={0}
        />
      ))}
    </Rect>,
  );

  yield* loop(Infinity, () => {
    const shuffledCircles = circles.sort(() => Math.random() - 0.5);
    const halfOfCircles = shuffledCircles.slice(
      0,
      Math.ceil(shuffledCircles.length / 1.75),
    );
    const remainingCircles = circles.filter(
      (circle) => !halfOfCircles.includes(circle),
    );

    return all(
      ...halfOfCircles.map((circle) => circle.opacity(1, 3, easeInOutQuad)),
      ...remainingCircles.map((circle) => circle.opacity(0, 3, easeInOutQuad)),
    );
  });
});
