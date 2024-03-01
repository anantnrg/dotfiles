import { makeScene2D, Img, Rect } from "@motion-canvas/2d";
import { all, createRef, waitUntil } from "@motion-canvas/core";
import { Copyright } from "helpers/copyright";
import { Button } from "helpers/button";
import { openWindowScale, closeWindowScale } from "helpers/animations";
import { Colors } from "helpers/styles";
import ferrisImg from "../assets/ferris.svg";

export default makeScene2D(function* (view) {
  const infinite_loop_rect_ref = createRef<Rect>();
  const while_loop_rect_ref = createRef<Rect>();
  const for_loop_rect_ref = createRef<Rect>();
  const if_statement_rect_ref = createRef<Rect>();

  yield view.add(<Copyright text=" Technologs " />);

  yield view.add(
    <Img src={ferrisImg} width={900} scale={0.15} x={850} y={470} />,
  );

  yield view.add(
    <Rect
      layout
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={100}
    >
      <Button
        text="If/Else Statements"
        fontFamily="JetBrains Mono"
        fontSize={36}
        ref={infinite_loop_rect_ref}
        height={120}
        color={Colors.red}
        x={0}
        y={-250}
        scale={0}
        textRef={null}
      />
      <Button
        text="Infinite Loops"
        fontFamily="JetBrains Mono"
        fontSize={36}
        ref={while_loop_rect_ref}
        height={120}
        color={Colors.blue}
        x={0}
        y={-50}
        scale={0}
        textRef={null}
      />
      <Button
        text="While Loops"
        fontFamily="JetBrains Mono"
        fontSize={36}
        ref={for_loop_rect_ref}
        height={120}
        color={Colors.yellow}
        x={0}
        y={150}
        scale={0}
        textRef={null}
      />
      <Button
        text="For Loops "
        fontFamily="JetBrains Mono"
        fontSize={36}
        ref={if_statement_rect_ref}
        height={120}
        color={Colors.green}
        x={0}
        y={350}
        scale={0}
        textRef={null}
      />
    </Rect>,
  );
  yield* waitUntil("first-we-talk-about-infinite-loop");
  yield* openWindowScale(infinite_loop_rect_ref);
  yield* waitUntil("then-we-look-at-while");
  yield* openWindowScale(while_loop_rect_ref);
  yield* waitUntil("next-we-learn-for-loop");
  yield* openWindowScale(for_loop_rect_ref);
  yield* waitUntil("finally-if-statement");
  yield* openWindowScale(if_statement_rect_ref);
  yield* waitUntil("finish-diff-statements");
  yield* all(
    closeWindowScale(infinite_loop_rect_ref),
    closeWindowScale(while_loop_rect_ref),
    closeWindowScale(for_loop_rect_ref),
    closeWindowScale(if_statement_rect_ref),
  );
});
