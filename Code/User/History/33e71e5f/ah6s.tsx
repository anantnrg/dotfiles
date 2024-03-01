import { makeScene2D, Txt, Img, Rect, Line } from "@motion-canvas/2d";
import {
  all,
  createRef,
  Vector2,
  waitUntil,
  easeInOutQuad,
} from "@motion-canvas/core";
import {
  CodeBlock,
  insert,
  lines,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { closeWindowScale, openWindowScale } from "helpers/animations";
import { Copyright } from "helpers/copyright";
import { Colors } from "helpers/styles";
import { Button } from "helpers/button";
import { TerminalWindow } from "helpers/terminal";
import { CustomCodeBlock } from "helpers/codeblock";
import ferrisImg from "../assets/ferris.svg";

export default makeScene2D(function* (view) {
  const arraylistTextRef = createRef<Txt>();
  const resultTextRef = createRef<Txt>();
  const forLoopBtn = createRef<Rect>();
  const printBtn = createRef<Rect>();
  const printResultBtn = createRef<Rect>();
  const arrayToLoop = createRef<Line>();
  const loopToPrint = createRef<Line>();
  const codeBlockRectRef = createRef<Rect>();
  const codeblock = createRef<CodeBlock>();
  const terminal = createRef<Rect>();
  const terminalResult = createRef<Txt>();

  yield view.add(<Copyright />);

  yield view.add(
    <Img src={ferrisImg} width={900} scale={0.15} x={850} y={470} />,
  );

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontSize={42}
      fontWeight={900}
      fill={Colors.green}
      y={0}
      ref={arraylistTextRef}
    />,
  );

  yield view.add(
    <Button
      color={Colors.red}
      fontFamily="JetBrains Mono"
      fontSize={48}
      height={100}
      ref={forLoopBtn}
      scale={0}
      text="For Loop"
      textRef={null}
      x={0}
      y={0}
    />,
  );

  yield view.add(
    <Button
      color={Colors.blue}
      fontFamily="JetBrains Mono"
      fontSize={48}
      height={100}
      ref={printBtn}
      scale={0}
      text="Print(fruit)"
      textRef={null}
      x={0}
      y={400}
    />,
  );

  yield view.add(
    <Button
      color={Colors.text}
      fontFamily="JetBrains Mono"
      fontSize={48}
      height={100}
      ref={printResultBtn}
      scale={0}
      text=""
      textRef={resultTextRef}
      x={500}
      y={400}
    />,
  );

  yield view.add(
    <Line
      endArrow
      lineWidth={8}
      stroke={Colors.mauve}
      points={[Vector2.zero, [0, 0]]}
      arrowSize={16}
      y={-330}
      ref={arrayToLoop}
    />,
  );

  yield view.add(
    <Line
      startArrow
      lineWidth={8}
      stroke={Colors.blue}
      points={[[0, 0], Vector2.zero]}
      arrowSize={16}
      y={80}
      ref={loopToPrint}
    />,
  );

  yield view.add(
    <TerminalWindow
      fontSize={36}
      scale={0}
      rectRef={terminal}
      outputRef={terminalResult}
      command="cargo run"
      output=""
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

  yield* waitUntil("what-are-for-loops");
  yield* openWindowScale(forLoopBtn);
  yield* waitUntil("suppose-we-have-an-array");
  yield* forLoopBtn().y(-400, 0.55, easeInOutQuad);
  yield* arraylistTextRef().text(
    '["mango", "banana", "strawberry", "kiwi", "peach"]',
    0.75,
    easeInOutQuad,
  );
  yield* waitUntil("then-lets-create-a-for-loop");
  yield* arrayToLoop().points([Vector2.zero, [0, 280]], 0.55, easeInOutQuad);
  yield* waitUntil("what-this-will-do-is");
  yield* openWindowScale(printBtn);
  yield* loopToPrint().points([[0, 250], Vector2.zero], 0.55, easeInOutQuad);
  yield* openWindowScale(printResultBtn);
  yield* waitUntil("first-print-mango");
  yield* all(
    arrayToLoop().points([Vector2.zero, [-500, 280]], 0.55, easeInOutQuad),
    loopToPrint().points(
      [
        [0, 250],
        [-500, -30],
      ],
      0.55,
      easeInOutQuad,
    ),
  );
  yield* resultTextRef().text("mango", 0.5, easeInOutQuad);
  yield* waitUntil("next-print-banana");
  yield* all(
    arrayToLoop().points([Vector2.zero, [-280, 280]], 0.55, easeInOutQuad),
    loopToPrint().points(
      [
        [0, 250],
        [-270, -30],
      ],
      0.55,
      easeInOutQuad,
    ),
  );
  yield* resultTextRef().text("banana", 0.5, easeInOutQuad);
  yield* waitUntil("next-print-strawberry");
  yield* all(
    arrayToLoop().points([Vector2.zero, [-0, 280]], 0.55, easeInOutQuad),
    loopToPrint().points(
      [
        [0, 250],
        [-0, -30],
      ],
      0.55,
      easeInOutQuad,
    ),
  );
  yield* resultTextRef().text("strawberry", 0.5, easeInOutQuad);
  yield* waitUntil("next-print-kiwi");
  yield* all(
    arrayToLoop().points([Vector2.zero, [300, 280]], 0.55, easeInOutQuad),
    loopToPrint().points(
      [
        [0, 250],
        [300, -30],
      ],
      0.55,
      easeInOutQuad,
    ),
  );
  yield* resultTextRef().text("kiwi", 0.5, easeInOutQuad);
  yield* waitUntil("next-print-peach");
  yield* all(
    arrayToLoop().points([Vector2.zero, [500, 280]], 0.55, easeInOutQuad),
    loopToPrint().points(
      [
        [0, 250],
        [500, -30],
      ],
      0.55,
      easeInOutQuad,
    ),
  );
  yield* resultTextRef().text("peach", 0.5, easeInOutQuad);
  yield* waitUntil("lets-see-how-we-can-implement-in-rust");
  yield* all(
    closeWindowScale(forLoopBtn),
    arraylistTextRef().opacity(0, 0.55, easeInOutQuad),
    closeWindowScale(printBtn),
    closeWindowScale(printResultBtn),
    arrayToLoop().opacity(0, 0.55, easeInOutQuad),
    loopToPrint().opacity(0, 0.55, easeInOutQuad),
  );

  yield* openWindowScale(codeBlockRectRef);
  yield* waitUntil("first-we-will-declare-var-named-fruits");
  yield* codeblock().edit(0.75)`fn main() {\n    ${insert("let fruits = ")}\n}`;
  yield* waitUntil("then-use-vec-macro");
  yield* codeblock().edit(0.75)`fn main() {\n    let fruits = ${insert(
    "vec!",
  )}\n}`;
  yield* waitUntil("then-put-square-brackets");
  yield* codeblock().edit(0.75)`fn main() {\n    let fruits = vec!${insert(
    "[];",
  )}\n}`;
  yield* waitUntil("type-in-names-of-fruits");
  yield* codeblock().edit(0.75)`fn main() {\n    let fruits = vec![${insert(
    '"mango", "banana", "strawberry", "kiwi", "peach"',
  )}];\n}`;
  yield* codeblock().selection(lines(0, Infinity));
  yield* waitUntil("we-can-create-for-loop-using-for");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let fruits = vec!["mango", "banana", "strawberry", "kiwi", "peach"];${insert(
    "\n    for",
  )}\n}`;
  yield* waitUntil("create-loop-variable");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let fruits = vec!["mango", "banana", "strawberry", "kiwi", "peach"];\n    for${insert(
    " fruit",
  )}\n}`;
  yield* waitUntil("use-in-keyword");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let fruits = vec!["mango", "banana", "strawberry", "kiwi", "peach"];\n    for fruit${insert(
    " in",
  )}\n}`;
  yield* waitUntil("provide-array-to-loop");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let fruits = vec!["mango", "banana", "strawberry", "kiwi", "peach"];\n    for fruit in${insert(
    " fruits",
  )}\n}`;
  yield* waitUntil("need-to-put-code-inside-braces");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let fruits = vec!["mango", "banana", "strawberry", "kiwi", "peach"];\n    for fruit in fruits${insert(
    " {}",
  )}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let fruits = vec!["mango", "banana", "strawberry", "kiwi", "peach"];\n    for fruit in fruits {${insert(
    "\n\n    ",
  )}\}\n}`;
  yield* waitUntil("just-print-the-current-fruit");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let fruits = vec!["mango", "banana", "strawberry", "kiwi", "peach"];\n    for fruit in fruits {\n${insert(
    "        println!();",
  )}\n    \}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let fruits = vec!["mango", "banana", "strawberry", "kiwi", "peach"];\n    for fruit in fruits {\n        println!(${insert(
    '""',
  )});\n    \}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let fruits = vec!["mango", "banana", "strawberry", "kiwi", "peach"];\n    for fruit in fruits {\n        println!("${insert(
    "{}",
  )}");\n    \}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let fruits = vec!["mango", "banana", "strawberry", "kiwi", "peach"];\n    for fruit in fruits {\n        println!("{}"${insert(
    ", fruit",
  )});\n    \}\n}`;
  yield* codeblock().selection(lines(0, Infinity));

  yield* waitUntil("now-lets-try-running-this-code");
  yield* closeWindowScale(codeBlockRectRef);
  yield* openWindowScale(terminal);
  yield* terminalResult().opacity(1);
  yield* terminalResult().text(`mango\nbanana\nstrawberry\nkiwi\npeach`, 1),
    easeInOutQuad;
  yield* waitUntil("thats-all-about-for-loops");
  yield* closeWindowScale(terminal);
});
