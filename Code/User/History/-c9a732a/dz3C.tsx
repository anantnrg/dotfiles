/* eslint-disable react/jsx-filename-extension */
import { makeScene2D, Txt, Img, Rect, Icon } from "@motion-canvas/2d";
import {
  all,
  tween,
  createRef,
  map,
  chain,
  waitUntil,
  easeInOutQuad,
  loop,
} from "@motion-canvas/core";
import {
  CodeBlock,
  insert,
  lines,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { Copyright } from "helpers/copyright";
import { TerminalWindow } from "helpers/terminal";
import { CustomCodeBlock } from "helpers/codeblock";
import { Keys } from "helpers/keys";
import {
  openWindowScale,
  closeWindowScale,
  textAppear,
} from "helpers/animations";
import { Colors } from "helpers/styles";
import ferrisImg from "../assets/ferris.svg";

export default makeScene2D(function* (view) {
  const codeBlockRectRef = createRef<Rect>();
  const keysRef = createRef<Rect>();
  const cmdRef = createRef<Txt>();
  const infiniteLoopCircle = createRef<Icon>();
  const terminal = createRef<Rect>();
  const terminalResult = createRef<Txt>();
  const codeblock = createRef<CodeBlock>();

  yield view.add(<Copyright />);

  yield view.add(
    <Img src={ferrisImg} width={900} scale={0.15} x={850} y={470} />,
  );

  yield view.add(
    <Icon
      icon="octicon:sync"
      scale={0}
      color={Colors.mauve}
      ref={infiniteLoopCircle}
    />,
  );

  yield view.add(
    <TerminalWindow
      fontSize={36}
      scale={0}
      rectRef={terminal}
      outputRef={terminalResult}
      command="cargo run"
      output="This prints forever!"
      cmdRef={cmdRef}
    />,
  );

  yield view.add(
    <Keys
      fontSize={48}
      keys="Ctrl + C"
      height={100}
      rectRef={keysRef}
      scale={0}
      width={200}
      x={0}
      y={430}
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

  yield* waitUntil("what-is-infinite-loop");
  yield* tween(0.55, (v) => {
    infiniteLoopCircle().scale(map(0, 16, easeInOutQuad(v)));
  });

  yield* loop(360, () =>
    infiniteLoopCircle().rotation(infiniteLoopCircle().rotation() + 1, 0.005),
  );
  yield* infiniteLoopCircle().rotation(0);

  yield* waitUntil("how-to-define-loop-in-rust");
  yield* chain(
    tween(0.55, (v) => {
      infiniteLoopCircle().scale(map(16, 0, easeInOutQuad(v)));
    }),
    openWindowScale(codeBlockRectRef),
    waitUntil("to-create-infinite-loop-use-keyword"),
    codeblock().edit(0.75)`fn main() {\n${insert("    loop")}\n}`,
    waitUntil("put-a-pair-of-curly-braces-1"),
    codeblock().edit(0.75)`fn main() {\n    loop${insert(" {}")}\n}`,
    waitUntil("need-to-put-our-code-1"),
    codeblock().edit(0.75)`fn main() {\n    loop {${insert("\n\n    ")}\}\n}`,
    waitUntil("lets-print-out-string-1"),
    codeblock().edit(0.75)`fn main() {\n    loop {\n${insert(
      "        println!",
    )}\n    \}\n}`,
    codeblock().edit(0.75)`fn main() {\n    loop {\n        println!${insert(
      "();",
    )}\n    \}\n}`,
    codeblock().edit(0.75)`fn main() {\n    loop {\n        println!(${insert(
      '""',
    )});\n    \}\n}`,
    codeblock().edit(0.75)`fn main() {\n    loop {\n        println!("${insert(
      "This prints forever!",
    )}");\n    \}\n}`,
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("lets-try-running-code-1"),
    closeWindowScale(codeBlockRectRef),
    openWindowScale(terminal),
    waitUntil("it-will-print-our-string-infinitely"),
    textAppear(terminalResult),
    loop(15, () =>
      terminalResult().text(
        terminalResult().text().concat("\nThis prints forever!"),
        0.25,
      ),
    ),
    waitUntil("to-quit-press-ctrl-c"),
    openWindowScale(keysRef),
    waitUntil("lets-go-back-to-our-loop-1"),
    all(closeWindowScale(terminal), closeWindowScale(keysRef)),
    openWindowScale(codeBlockRectRef),
    waitUntil("now-after-the-println-statement-1"),
    codeblock().edit(
      0.75,
    )`fn main() {\n    loop {\n        println!("This prints forever!");\n${insert(
      "        break;\n",
    )}    \}\n}`,
    waitUntil("lets-try-running-code-2"),
    terminalResult().text("This prints forever!", 0),
    terminalResult().opacity(0, 0),
    closeWindowScale(codeBlockRectRef),
    openWindowScale(terminal),
    waitUntil("it-will-print-our-string-once"),
    textAppear(terminalResult),
    waitUntil("thats-all-bout-infinite-loops"),
    closeWindowScale(terminal),
  );
});
