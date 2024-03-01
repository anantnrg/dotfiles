/* eslint-disable react/jsx-filename-extension */
import { makeScene2D, Txt, Img, Rect, Line, Icon } from "@motion-canvas/2d";
import {
  all,
  createRef,
  waitFor,
  Vector2,
  waitUntil,
  easeInOutQuad,
} from "@motion-canvas/core";
import {
  CodeBlock,
  insert,
  lines,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { Copyright } from "helpers/copyright";
import { Button } from "helpers/button";
import {
  closeWindowScale,
  openWindowScale,
  textAppear,
} from "helpers/animations";
import { Colors } from "helpers/styles";
import { CustomCodeBlock } from "helpers/codeblock";
import { TerminalWindow } from "helpers/terminal";
import ferrisImg from "../assets/ferris.svg";

export default makeScene2D(function* (view) {
  const whileLoopBtnRef = createRef<Rect>();
  const valueBtnRef = createRef<Rect>();
  const valueTextRef = createRef<Txt>();
  const fnBtnRef = createRef<Rect>();
  const valueToLoopArrowRef = createRef<Line>();
  const LoopToFnArrowRef = createRef<Line>();
  const breakLoopIcon = createRef<Icon>();
  const codeBlockRectRef = createRef<Rect>();
  const codeblock = createRef<CodeBlock>();
  const terminal = createRef<Rect>();
  const terminalResult = createRef<Txt>();

  yield view.add(<Copyright />);

  yield view.add(
    <Img src={ferrisImg} width={900} scale={0.15} x={850} y={470} />,
  );

  yield view.add(
    <Button
      color={Colors.red}
      fontFamily="JetBrains Mono"
      fontSize={42}
      height={100}
      ref={valueBtnRef}
      scale={0}
      text="True"
      x={0}
      y={-300}
      textRef={valueTextRef}
    />,
  );

  yield view.add(
    <Button
      color={Colors.mauve}
      fontFamily="JetBrains Mono"
      fontSize={42}
      height={100}
      ref={whileLoopBtnRef}
      scale={0}
      text="While(True)"
      x={0}
      y={0}
      textRef={null}
    />,
  );

  yield view.add(
    <Button
      color={Colors.green}
      fontFamily="JetBrains Mono"
      fontSize={42}
      height={100}
      ref={fnBtnRef}
      scale={0}
      text="Some Function"
      x={0}
      y={300}
      textRef={null}
    />,
  );

  yield view.add(
    <Line
      endArrow
      lineWidth={6}
      stroke={Colors.red}
      points={[Vector2.zero, [0, 0]]}
      arrowSize={16}
      y={-230}
      ref={valueToLoopArrowRef}
    />,
  );

  yield view.add(
    <Line
      endArrow
      lineWidth={6}
      stroke={Colors.green}
      points={[Vector2.zero, [0, 0]]}
      arrowSize={16}
      y={70}
      ref={LoopToFnArrowRef}
    />,
  );

  yield view.add(
    <Icon
      icon="ic:baseline-cancel"
      color={Colors.red}
      scale={0}
      y={150}
      ref={breakLoopIcon}
    />,
  );

  yield view.add(
    <TerminalWindow
      fontSize={36}
      scale={0}
      rectRef={terminal}
      outputRef={terminalResult}
      command="cargo run"
      output={`0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10`}
      cmdRef={null}
    />,
  );

  yield view.add(
    <CustomCodeBlock
      rectRef={codeBlockRectRef}
      codeBlockRef={codeblock}
      scale={0}
      fontSize={38}
      tabTitle="main.rs"
      lang="rust"
      code={"fn main() {\n\n}"}
    />,
  );

  yield* waitUntil("we-will-look-at-while-loops");
  yield* openWindowScale(whileLoopBtnRef);

  yield* waitUntil("lets-say-we-have-a-var");
  yield* openWindowScale(valueBtnRef);

  yield* valueToLoopArrowRef().points(
    [Vector2.zero, [0, 150]],
    0.75,
    easeInOutQuad,
  );

  yield* waitUntil("performs-associated-function");
  yield* openWindowScale(fnBtnRef);

  yield* LoopToFnArrowRef().points(
    [Vector2.zero, [0, 150]],
    0.75,
    easeInOutQuad,
  );

  yield* waitUntil("if-the-value-becomes-false");
  yield* valueTextRef().text("False", 0.5);
  yield* LoopToFnArrowRef().opacity(0, 0.55, easeInOutQuad);
  yield* breakLoopIcon().scale(6, 0.75, easeInOutQuad);
  yield* waitUntil("now-we-know-what-while-loops-are");

  yield* all(
    breakLoopIcon().scale(0, 0.75, easeInOutQuad),
    closeWindowScale(whileLoopBtnRef),
    closeWindowScale(valueBtnRef),
    closeWindowScale(fnBtnRef),
    valueToLoopArrowRef().opacity(0, 0.55),
  );

  yield* waitUntil("lets-see-how-we-can-create-while-loop");
  yield* openWindowScale(codeBlockRectRef);
  yield* waitUntil("first-we-need-to-create-mutable-var-x");
  yield* codeblock().edit(0.75)`fn main() {\n    ${insert("let mut x;")}\n}`;
  yield* waitUntil("set-x-to-0");
  yield* codeblock().edit(0.75)`fn main() {\n    let mut x${insert(
    " = 0",
  )};\n}`;
  yield* waitUntil("define-while-loop");
  yield* codeblock().edit(0.75)`fn main() {\n    let mut x = 0;${insert(
    "\n    while",
  )}\n}`;
  yield* waitUntil("need-condition-type-x");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = 0;\n    while${insert(" x")}\n}`;
  yield* waitUntil("put-left-angle-bracket");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = 0;\n    while x${insert(" <")}\n}`;
  yield* waitUntil("put-equal-sign");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = 0;\n    while x <${insert("=")}\n}`;
  yield* waitUntil("put-ten");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = 0;\n    while x <=${insert(" 10")}\n}`;
  yield* waitUntil("put-code-inside-curly-braces");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = 0;\n    while x <= 10${insert(
    " {\n\n    }",
  )}\n}`;
  yield* waitUntil("we-can-use-println-macro");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = 0;\n    while x <= 10 {\n${insert(
    "        println!();",
  )}\n    \}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = 0;\n    while x <= 10 {\n        println!(${insert(
    '"{}"',
  )});\n    \}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = 0;\n    while x <= 10 {\n        println!("{}"${insert(
    ", x",
  )});\n    \}\n}`;
  yield* waitUntil("mutate-and-increment-x");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let mut x = 0;\n    while x <= 10 {\n        println!("{}", x);${insert(
    "\n        x += 1;",
  )}\n    \}\n}`;
  yield* waitFor(1);
  yield* codeblock().selection(lines(0, Infinity));
  yield* waitUntil("lets-try-running-code-2");
  yield* closeWindowScale(codeBlockRectRef);
  yield* openWindowScale(terminal);
  yield* waitUntil("it-will-print-every-number");
  yield* textAppear(terminalResult);
  yield* waitUntil("finish-while");
  yield* closeWindowScale(terminal);
});
