/* eslint-disable react/jsx-filename-extension */
import {
  makeScene2D,
  Circle,
  Txt,
  Img,
  Rect,
  Line,
  Icon,
  Latex,
} from "@motion-canvas/2d";
import {
  all,
  waitFor,
  Vector2,
  waitUntil,
  easeInOutQuad,
} from "@motion-canvas/core";
import {
  CodeBlock,
  edit,
  insert,
  lines,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { Copyright } from "helpers/copyright";
import { Button } from "helpers/button";
import { Colors } from "helpers/styles";
import { closeWindowScale, openWindowScale } from "helpers/animations";
import { TerminalWindow } from "helpers/terminal";
import { CustomCodeBlock } from "helpers/codeblock";
import ferrisImg from "../assets/ferris.svg";

export default makeScene2D(function* (view) {
  const ifStatementRectRef = createRef<Rect>();
  const valueRectRef = createRef<Rect>();
  const itsAMultipleRectRef = createRef<Rect>();
  const itsNotAMultipleRectRef = createRef<Rect>();
  const valueToIf = createRef<Line>();
  const ifToLeft = createRef<Line>();
  const ifToRight = createRef<Line>();
  const trueText = createRef<Txt>();
  const falseText = createRef<Txt>();
  const codeBlockRectRef = createRef<Rect>();
  const codeblock = createRef<CodeBlock>();
  const terminal = createRef<Rect>();
  const terminalResult = createRef<Txt>();
  const returnsQuotientText = createRef<Txt>();
  const returnsRemainderText = createRef<Txt>();
  const returnsRemainderRect = createRef<Rect>();
  const returnsQuotientRect = createRef<Rect>();

  yield view.add(<Copyright />);

  yield view.add(
    <Img src={ferrisImg} width={900} scale={0.15} x={850} y={470} />,
  );

  yield view.add(
    <Button
      text="If Statement"
      fontFamily="JetBrains Mono"
      fontSize={36}
      ref={ifStatementRectRef}
      height={120}
      color={Colors.red}
      x={0}
      y={0}
      scale={0}
      textRef={null}
    />,
  );

  yield view.add(
    <Button
      text="A number"
      fontFamily="JetBrains Mono"
      fontSize={36}
      ref={valueRectRef}
      height={120}
      color={Colors.mauve}
      x={0}
      y={0}
      scale={0}
      textRef={null}
    />,
  );

  yield view.add(
    <Button
      text="Print('Its a multiple!')"
      fontFamily="JetBrains Mono"
      fontSize={36}
      ref={itsAMultipleRectRef}
      height={120}
      color={Colors.green}
      x={-600}
      y={350}
      scale={0}
      textRef={null}
    />,
  );

  yield view.add(
    <Button
      text="Print('Its NOT a multiple!')"
      fontFamily="JetBrains Mono"
      fontSize={36}
      ref={itsNotAMultipleRectRef}
      height={120}
      color={Colors.peach}
      x={600}
      y={350}
      scale={0}
      textRef={null}
    />,
  );

  yield view.add(
    <Line
      startArrow
      lineWidth={8}
      stroke={Colors.mauve}
      points={[[0, 0], Vector2.zero]}
      arrowSize={16}
      y={-330}
      ref={valueToIf}
    />,
  );

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontWeight={800}
      fontSize={38}
      fill={Colors.green}
      text=""
      x={-200}
      y={120}
      ref={trueText}
    />,
  );

  yield view.add(
    <Txt
      fontFamily="JetBrains Mono"
      fontWeight={800}
      fontSize={38}
      fill={Colors.peach}
      text=""
      x={200}
      y={120}
      ref={falseText}
    />,
  );

  yield view.add(
    <Line
      startArrow
      lineWidth={8}
      stroke={Colors.green}
      points={[[-0, 0], Vector2.zero]}
      arrowSize={16}
      y={30}
      ref={ifToLeft}
    />,
  );

  yield view.add(
    <Line
      startArrow
      lineWidth={8}
      stroke={Colors.peach}
      points={[[0, 0], Vector2.zero]}
      arrowSize={16}
      y={30}
      ref={ifToRight}
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

  yield view.add(
    <Rect
      layout
      padding={20}
      height={100}
      y={300}
      ref={returnsQuotientRect}
      width={550}
      scale={0}
      alignItems="center"
      justifyContent="center"
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontWeight={800}
        fontSize={38}
        fill={Colors.peach}
        text="/"
        x={200}
        y={120}
      />
      <Txt
        fontFamily="JetBrains Mono"
        fontWeight={800}
        fontSize={38}
        fill={Colors.text}
        text=""
        x={200}
        y={120}
        ref={returnsQuotientText}
      />
    </Rect>,
  );

  yield view.add(
    <Rect
      layout
      padding={20}
      height={100}
      y={400}
      ref={returnsRemainderRect}
      scale={0}
      width={550}
      alignItems="center"
      justifyContent="center"
    >
      <Txt
        fontFamily="JetBrains Mono"
        fontWeight={800}
        fontSize={38}
        fill={Colors.green}
        text="%"
        x={200}
        y={120}
      />
      <Txt
        fontFamily="JetBrains Mono"
        fontWeight={800}
        fontSize={38}
        fill={Colors.text}
        text=""
        x={200}
        y={120}
        ref={returnsRemainderText}
      />
    </Rect>,
  );

  yield* waitUntil("lets-say-we-have-a-number");
  yield* openWindowScale(valueRectRef);
  yield* waitUntil("we-want-to-check-if-its-a-multiple-of-64");
  yield* valueRectRef().y(-400, 0.55, easeInOutQuad);
  yield* openWindowScale(ifStatementRectRef);
  yield* ifStatementRectRef().y(-50, 0.55, easeInOutQuad);
  yield* all(valueToIf().points([[0, 210], Vector2.zero], 0.75, easeInOutQuad));
  yield* all(
    openWindowScale(itsAMultipleRectRef),
    openWindowScale(itsNotAMultipleRectRef),
  );
  yield* waitUntil("if-its-a-multiple-of-64");
  yield* trueText().text("True", 0.55, easeInOutQuad);
  yield* all(
    ifToLeft().points([[-280, 250], Vector2.zero], 0.75, easeInOutQuad),
  );
  yield* waitUntil("if-its-not-a-multiple-of-64");
  yield* falseText().text("False", 0.55, easeInOutQuad);
  yield* all(
    ifToRight().points([[260, 255], Vector2.zero], 0.75, easeInOutQuad),
  );
  yield* waitUntil("now-lets-see-how-we-can-impl-in-rust");
  yield* all(
    closeWindowScale(valueRectRef),
    closeWindowScale(ifStatementRectRef),
    closeWindowScale(itsAMultipleRectRef),
    closeWindowScale(itsNotAMultipleRectRef),
    ifToLeft().scale(0, 0.55, easeInOutQuad),
    ifToRight().scale(0, 0.55, easeInOutQuad),
    valueToIf().scale(0, 0.55, easeInOutQuad),
    trueText().text("", 0.55, easeInOutQuad),
    falseText().text("", 0.55, easeInOutQuad),
  );
  yield* openWindowScale(codeBlockRectRef);
  yield* waitUntil("lets-create-var-named-x");
  yield* codeblock().edit(0.75)`fn main() {\n${insert("    let x = ")}\n}`;
  yield* waitUntil("init-it-to-value");
  yield* codeblock().edit(0.75)`fn main() {\n    let x = ${insert("2048;")}\n}`;
  yield* waitUntil("use-if-keyword");
  yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;${insert(
    "\n    if",
  )}\n}`;
  yield* waitUntil("type-in-x");
  yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if${insert(
    " x",
  )}\n}`;
  yield* waitUntil("then-the-modulus-sign");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 2048;\n    if x${insert(" %")}\n}`;
  yield* waitUntil("and-finally-64");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 2048;\n    if x %${insert(" 64")}\n}`;
  yield* waitUntil("difference-between-slash-and-modulus");
  yield* codeblock().selection(lines(0, Infinity));
  yield* returnsQuotientRect().scale(1, 0.55, easeInOutQuad);
  yield* returnsQuotientText().text(" - Returns quotient", 0.55, easeInOutQuad);
  yield* returnsRemainderRect().scale(1, 0.55, easeInOutQuad);
  yield* returnsRemainderText().text(
    " - Returns remainder",
    0.55,
    easeInOutQuad,
  );
  yield* waitUntil("we-will-use-the-modulus-sign");
  yield* returnsQuotientRect().scale(0, 0.55, easeInOutQuad);
  yield* returnsRemainderRect().scale(0, 0.55, easeInOutQuad);
  yield* waitUntil("put-two-equal-signs");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 2048;\n    if x % 64${insert(" ==")}\n}`;
  yield* waitUntil("type-in-zero");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 2048;\n    if x % 64 ==${insert(" 0")}\n}`;
  yield* waitUntil("put-code-inside-curly-braces");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 2048;\n    if x % 64 == 0${insert(" {}")}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {${insert(
    "\n\n",
  )}    \}\n}`;
  yield* waitUntil("use-println-macro-to-print-it-is-multiple");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n${insert(
    "        println!();",
  )}\n    \}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!(${insert(
    '"x is a multiple of 64"',
  )});\n    \}\n}`;
  yield* waitFor(0.7);
  yield* codeblock().selection(lines(0, Infinity));
  yield* waitUntil("lets-try-running-our-code");
  yield* closeWindowScale(codeBlockRectRef);
  yield* openWindowScale(terminal);
  yield* terminalResult().opacity(1, 0);
  yield* terminalResult().text("x is a multiple of 64", 0.55, easeInOutQuad);
  yield* waitUntil("lets-go-back-and-change-x-value");
  yield* closeWindowScale(terminal);
  yield* openWindowScale(codeBlockRectRef);
  yield* waitUntil("say-3500");
  yield* codeblock().edit(0.75)`fn main() {\n    let x = ${edit(
    "2048",
    "3500",
  )};\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \}\n}`;
  yield* codeblock().selection(lines(0, Infinity));
  yield* waitFor(1);
  yield* waitUntil("if-we-run-our-code-again");
  yield* terminalResult().text("", 0, easeInOutQuad);
  yield* closeWindowScale(codeBlockRectRef);
  yield* openWindowScale(terminal);
  yield* waitUntil("lets-go-back-and-use-else-statement");
  yield* closeWindowScale(terminal);
  yield* openWindowScale(codeBlockRectRef);
  yield* waitUntil("after-closing-brace-of-if-type-else");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 3500;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \}${insert(
    " else",
  )}\n}`;
  yield* waitUntil("put-braces-again");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 3500;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else${insert(
    " {}",
  )}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 3500;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else {${insert(
    "\n\n",
  )}    \}\n}`;
  yield* waitUntil("print-out-its-not-multiple");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 3500;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else {\n${insert(
    "        println!();",
  )}\n    \}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 3500;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else {\n        println!(${insert(
    '"x is NOT a multiple of 64"',
  )});\n    \}\n}`;
  yield* waitFor(1);
  yield* codeblock().selection(lines(0, Infinity));
  yield* waitUntil("lets-run-code-again-again");
  yield* closeWindowScale(codeBlockRectRef);
  yield* openWindowScale(terminal);
  yield* terminalResult().text(
    "x is NOT a multiple of 64",
    0.55,
    easeInOutQuad,
  );
  yield* waitUntil("lets-do-one-more-thing");
  yield* closeWindowScale(terminal);
  yield* openWindowScale(codeBlockRectRef);
  yield* waitUntil("use-if-else-statement");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 3500;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \}${insert(
    " else if",
  )} else {\n        println!("x is NOT a multiple of 64");\n    \}\n}`;
  yield* waitUntil("then-pass-in-condition");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 3500;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else if${insert(
    " x % 70 == 0",
  )} else {\n        println!("x is NOT a multiple of 64");\n    \}\n}`;
  yield* waitUntil("finally-open-a-new-pair-of-curly-braces");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 3500;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else if x % 70 == 0${insert(
    " {\n\n    }",
  )} else {\n        println!("x is NOT a multiple of 64");\n    \}\n}`;
  yield* waitUntil("again-ill-just-print-out");
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 3500;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else if x % 70 == 0 {\n${insert(
    "        println!();",
  )}\n    } else {\n        println!("x is NOT a multiple of 64");\n    \}\n}`;
  yield* codeblock().edit(
    0.75,
  )`fn main() {\n    let x = 3500;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else if x % 70 == 0 {\n        println!(${insert(
    '"x is a multiple of 70 but not 64"',
  )});\n    } else {\n        println!("x is NOT a multiple of 64");\n    \}\n}`;
  yield* waitUntil("lets-run-code-once-more");
  yield* closeWindowScale(codeBlockRectRef);
  yield* terminal().width(800);
  yield* terminalResult().text("", 0, easeInOutQuad);
  yield* openWindowScale(terminal);
  yield* terminalResult().text(
    "x is a multiple of 70 but not 64",
    0.55,
    easeInOutQuad,
  );
  yield* waitUntil("that-sums-up-if-statements");
  yield* closeWindowScale(terminal);
});
