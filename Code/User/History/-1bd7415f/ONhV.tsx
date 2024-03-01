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
  tween,
  createRef,
  map,
  easeInSine,
  chain,
  easeInOutSine,
  waitFor,
  slideTransition,
  Direction,
  easeOutSine,
  easeInBounce,
  createSignal,
  Vector2,
  waitUntil,
  easeOutBack,
} from "@motion-canvas/core";
import {
  CodeBlock,
  insert,
  lines,
  range,
  remove,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { CustomCodeBlock } from "helpers/codeblock";
import {
  closeWindowScale,
  openWindowScale,
  textAppear,
} from "helpers/animations";
import { TerminalWindow } from "helpers/terminal";
import { Copyright } from "helpers/copyright";
import ferrisImg from "../assets/ferris.svg";

export default makeScene2D(function* (view) {
  const codeBlockRectRef = createRef<Rect>();
  const terminal = createRef<Rect>();
  const terminalResult = createRef<Txt>();
  const main_codeBlockRectRef = createRef<Rect>();
  const codeblock = createRef<CodeBlock>();
  const main_codeblock = createRef<CodeBlock>();
  const cuboid_formula_ref = createRef<Latex>();
  const cuboid_formula_1_ref = createRef<Latex>();
  const cuboid_formula_2_ref = createRef<Latex>();
  const cuboid_formula_3_ref = createRef<Latex>();

  yield view.add(<Copyright text=" Technologs " />);

  yield view.add(
    <Img src={ferrisImg} width={900} scale={0.15} x={850} y={470} />,
  );

  yield view.add(
    <CustomCodeBlock
      rectRef={codeBlockRectRef}
      codeBlockRef={codeblock}
      scale={0}
      fontSize={38}
      tabTitle="main.rs"
      lang="rust"
      code=""
    />,
  );

  yield view.add(
    <CustomCodeBlock
      rectRef={main_codeBlockRectRef}
      codeBlockRef={main_codeblock}
      scale={0}
      fontSize={38}
      tabTitle="main.rs"
      lang="rust"
      code={"fn main() {\n    // Program code\n}"}
    />,
  );

  yield view.add(
    <Latex
      tex="{\color{#cdd6f4} \text{Volume} = l \cdot b \cdot h }"
      ref={cuboid_formula_ref}
      y={150}
      width={500}
      opacity={0}
    />,
  );

  yield view.add(
    <Latex
      tex="{\color{#cdd6f4} l = \text{Length} }"
      ref={cuboid_formula_1_ref}
      y={250}
      width={350}
      opacity={0}
    />,
  );

  yield view.add(
    <Latex
      tex="{\color{#cdd6f4} b = \text{Breadth} }"
      ref={cuboid_formula_2_ref}
      y={350}
      width={350}
      opacity={0}
    />,
  );

  yield view.add(
    <Latex
      tex="{\color{#cdd6f4} h = \text{Height} }"
      ref={cuboid_formula_3_ref}
      y={450}
      width={350}
      opacity={0}
    />,
  );

  yield view.add(
    <TerminalWindow
      fontSize={36}
      scale={0}
      rectRef={terminal}
      outputRef={terminalResult}
      command="cargo run"
      output="200"
    />,
  );

  yield* waitUntil("start-fn-code");

  yield* openWindowScale(codeBlockRectRef);

  yield* chain(
    waitUntil("define-fn"),
    codeblock().edit(0.75)`${insert("fn")}`,
    waitUntil("give-fn-name"),
    codeblock().edit(0.75)`fn${insert(" get_cuboid_volume")}`,
    waitUntil("put-brackets"),
    codeblock().edit(0.75)`fn get_cuboid_volume${insert("()")}`,
    waitUntil("put-braces"),
    codeblock().edit(0.75)`fn get_cuboid_volume()${insert(" {}")}`,
    waitFor(0.75),
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("write-logic-in-brackets"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {${insert("\n\n")}\}`,
    waitFor(0.75),
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("find-area-comment"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n${insert(
      "    // Find the volume of a cuboid",
    )}\n\}`,
    waitFor(0.75),
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("it-might-look-familiar"),
    closeWindowScale(codeBlockRectRef),
    waitUntil("create-main-function"),
    openWindowScale(main_codeBlockRectRef),
  );

  yield* chain(
    waitUntil("lets-get-back-to-writing"),
    closeWindowScale(main_codeBlockRectRef),
    openWindowScale(codeBlockRectRef),
  );

  yield* chain(
    waitUntil("area-formula"),
    tween(0.75, (v) => {
      codeBlockRectRef().y(map(0, -200, easeOutSine(v)));
    }),
    tween(0.75, (v) => {
      cuboid_formula_ref().opacity(map(0, 1, easeOutSine(v)));
    }),
    tween(0.75, (v) => {
      cuboid_formula_1_ref().opacity(map(0, 1, easeOutSine(v)));
      cuboid_formula_2_ref().opacity(map(0, 1, easeOutSine(v)));
      cuboid_formula_3_ref().opacity(map(0, 1, easeOutSine(v)));
    }),
    waitFor(0.75),
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("find-area-comment-end"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n${remove(
      "    // Find the volume of a cuboid",
    )}\n\}`,
    waitFor(0.75),
    waitUntil("create-three-variables"),
    all(
      tween(0.75, (v) => {
        cuboid_formula_ref().opacity(map(1, 0, easeOutSine(v)));
      }),
      tween(0.75, (v) => {
        cuboid_formula_1_ref().opacity(map(1, 0, easeOutSine(v)));
        cuboid_formula_2_ref().opacity(map(1, 0, easeOutSine(v)));
        cuboid_formula_3_ref().opacity(map(1, 0, easeOutSine(v)));
      }),
    ),
    tween(0.75, (v) => {
      codeBlockRectRef().y(map(-200, 0, easeOutSine(v)));
    }),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n${insert(
      "    let l;",
    )}\n\}`,
    waitFor(0.75),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l;\n${insert(
      "    let b;",
    )}\n\}`,
    waitFor(0.75),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume() {\n    let l;\n    let b;\n${insert(
      "    let h;",
    )}\n\}`,
    waitUntil("set-l"),
    codeblock().edit(0.75)`fn get_cuboid_volume() {\n    let l${insert(
      " = 128",
    )};\n    let b;\n    let h;\n\}`,
    waitUntil("set-b"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume() {\n    let l = 128;\n    let b${insert(
      " = 46",
    )};\n    let h;\n\}`,
    waitUntil("set-h"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume() {\n    let l = 128;\n    let b = 46;\n    let h${insert(
      " = 11",
    )};\n\}`,
    waitUntil("create-volume-var"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume() {\n    let l = 128;\n    let b = 46;\n    let h = 11;\n${insert(
      "    let volume = ;",
    )}\n\}`,
    waitUntil("product-of"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume() {\n    let l = 128;\n    let b = 46;\n    let h = 11;\n    let volume = ${insert(
      "l * b * h",
    )};\n\}`,
    waitUntil("lets-print-it-out"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume() {\n    let l = 128;\n    let b = 46;\n    let h = 11;\n    let volume = l * b * h;\n\n${insert(
      '    println!("");',
    )}\n\}`,
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume() {\n    let l = 128;\n    let b = 46;\n    let h = 11;\n    let volume = l * b * h;\n\n    println!("${insert(
      "{}",
    )}");\n\}`,
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume() {\n    let l = 128;\n    let b = 46;\n    let h = 11;\n    let volume = l * b * h;\n\n    println!("{}"${insert(
      ", volume",
    )});\n\}`,
    waitFor(0.75),
  );

  yield* codeblock().selection(lines(0, Infinity));

  yield* main_codeblock().code("fn main() {\n\n}");

  yield* chain(
    waitUntil("if-we-run"),
    tween(0.55, (value) => {
      codeBlockRectRef().scale(map(1, 0, easeInSine(value)));
    }),
    waitUntil("lets-go-back-to-main"),
    tween(0.55, (value) => {
      main_codeBlockRectRef().scale(map(0, 1, easeOutSine(value)));
    }),
    waitUntil("to-call-this-fn"),
    main_codeblock().edit(0.75)`fn main() {\n    ${insert(
      "get_cuboid_area",
    )}\n\}`,
    waitUntil("put-braces-to-call"),
    main_codeblock().edit(0.75)`fn main() {\n    get_cuboid_area${insert(
      "();",
    )}\n\}`,
  );

  yield* chain(
    waitUntil("end-fn-code"),
    closeWindowScale(main_codeBlockRectRef),
    waitUntil("lets-try-running"),
    openWindowScale(terminal),
    waitUntil("it-will-output"),
    textAppear(terminalResult),
    waitUntil("now-we-have-printed"),
    closeWindowScale(terminal),
    openWindowScale(codeBlockRectRef),
    waitUntil("so-to-define-type-l"),
    codeblock().edit(0.75)`fn get_cuboid_volume(${insert(
      "l",
    )}) {\n    let l = 128;\n    let b = 46;\n    let h = 11;\n    let volume = l * b * h;\n\n    println!("{}", volume);\n\}`,
    waitUntil("then-we-need-to-set-type"),
    codeblock().edit(0.75)`fn get_cuboid_volume(l${insert(
      ": i32",
    )}) {\n    let l = 128;\n    let b = 46;\n    let h = 11;\n    let volume = l * b * h;\n\n    println!("{}", volume);\n\}`,
    waitUntil("now-we-can-repeat"),
    codeblock().edit(0.75)`fn get_cuboid_volume(l: i32${insert(
      ", b: i32, h: i32",
    )}) {\n    let l = 128;\n    let b = 46;\n    let h = 11;\n    let volume = l * b * h;\n\n    println!("{}", volume);\n\}`,
    waitFor(0.75),
  );

  yield codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("then-delete-let-statements"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume(l: i32, b: i32, h: i32) {\n${remove(
      "    let l = 128; \n    let b = 46; \n    let h = 11; \n",
    )}    let volume = l * b * h; \n${remove(
      "\n",
    )}    println!("{}", volume); \n\}`,
  );

  yield codeblock().selection(lines(0, Infinity));
  yield main_codeblock().selection(lines(0, Infinity));

  yield terminalResult().text("49536");
  yield* chain(
    waitUntil("lets-return-to-the-main-fn"),
    closeWindowScale(codeBlockRectRef),
    openWindowScale(main_codeBlockRectRef),
    waitUntil("pass-in-length"),
    main_codeblock().edit(0.75)`fn main() {\n    get_cuboid_area(${insert(
      "172",
    )});\n\}`,
    waitUntil("pass-in-breadth"),
    main_codeblock().edit(0.75)`fn main() {\n    get_cuboid_area(172${insert(
      ", 36",
    )});\n\}`,
    waitUntil("pass-in-height"),
    main_codeblock().edit(
      0.75,
    )`fn main() {\n    get_cuboid_area(172, 36${insert(", 8")});\n\}`,
  );

  yield main_codeblock().selection(lines(0, Infinity));
  yield terminalResult().opacity(0);

  yield* chain(
    waitUntil("lets-go-back-to-term"),
    closeWindowScale(main_codeBlockRectRef),
    openWindowScale(terminal),
    waitUntil("it-will-output-49536"),
    textAppear(terminalResult),
    waitUntil("now-we-can-call-with-diff-dim"),
    closeWindowScale(terminal),
    openWindowScale(codeBlockRectRef),
    waitUntil("to-specify-put->"),
    codeblock().edit(0.75)`fn get_cuboid_volume(l: i32, b: i32, h: i32)${insert(
      " ->",
    )} {\n    let volume = l * b * h;\n    println!("{}", volume);\n\}`,
    waitUntil("specify-the-output-type"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume(l: i32, b: i32, h: i32) ->${insert(
      " i32",
    )} {\n    let volume = l * b * h;\n    println!("{}", volume);\n\}`,
  );

  yield codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("use-the-return-keyword"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume(l: i32, b: i32, h: i32) -> i32 {\n    let volume = l * b * h;\n    println!("{}", volume);\n${insert(
      "    return\n",
    )}\}`,
    waitUntil("put-var-name"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume(l: i32, b: i32, h: i32) -> i32 {\n    let volume = l * b * h;\n    println!("{}", volume);\n    return${insert(
      " volume;",
    )}\n\}`,
    waitUntil("remove-print-statement"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume(l: i32, b: i32, h: i32) -> i32 {\n    let volume = l * b * h;\n${remove(
      '    println!("{}", volume);\n',
    )}    return volume;\n\}`,
  );

  yield codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("remove-return-keyword"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume(l: i32, b: i32, h: i32) -> i32 {\n    let volume = l * b * h;\n${remove(
      "    return volume;\n",
    )}\}`,
  );

  yield codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("remove-var-declaration"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume(l: i32, b: i32, h: i32) -> i32 {\n    ${remove(
      "let volume = ",
    )}l * b * h;\n\}`,
  );

  yield codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("remove-semicolon"),
    codeblock().edit(
      0.75,
    )`fn get_cuboid_volume(l: i32, b: i32, h: i32) -> i32 {\n    l * b * h${remove(
      ";",
    )}\n\}`,
  );

  yield codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("lets-return-to-the-main-fn-once-more"),
    closeWindowScale(codeBlockRectRef),
    openWindowScale(main_codeBlockRectRef),
    waitUntil("create-variable-to-hold-return-value"),
    main_codeblock().edit(0.75)`fn main() {\n    ${insert(
      "let volume ",
    )}get_cuboid_area(172, 36, 8);\n\}`,
    waitUntil("put-equals"),
    main_codeblock().edit(0.75)`fn main() {\n    let volume ${insert(
      "= ",
    )}get_cuboid_area(172, 36, 8);\n\}`,
  );

  yield main_codeblock().selection(lines(0, Infinity));

  yield* chain(
    waitUntil("print-it-out-using-println"),
    main_codeblock().edit(
      0.75,
    )`fn main() {\n    let volume = get_cuboid_area(172, 36, 8);\n${insert(
      '    println!("{}", volume);\n',
    )}\}`,
    waitFor(0.75),
  );

  yield main_codeblock().selection(lines(0, Infinity));

  yield terminalResult().opacity(0);

  yield* chain(
    waitUntil("lets-go-back-to-term-once-more"),
    closeWindowScale(main_codeBlockRectRef),
    openWindowScale(terminal),
    waitUntil("output-will-be-same"),
    textAppear(terminalResult),
    waitUntil("thats-all-about-functions"),
    closeWindowScale(terminal),
  );
});
