import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack, easeInQuad, easeInOutQuad } from '@motion-canvas/core';
import { CodeBlock, edit, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { Copyright } from 'helpers/copyright';
import { Button } from 'helpers/button';
import { Colors } from 'helpers/styles';
import { closeWindowScale, openWindowScale } from 'helpers/animations';
import { TerminalWindow } from 'helpers/terminal';
import { CustomCodeBlock } from 'helpers/codeblock';

export default makeScene2D(function* (view) {
    const if_statement_rect_ref = createRef<Rect>();
    const value_rect_ref = createRef<Rect>();
    const its_a_multiple_rect_ref = createRef<Rect>();
    const its_not_a_multiple_rect_ref = createRef<Rect>();
    const value_to_if = createRef<Line>();
    const if_to_left = createRef<Line>();
    const if_to_right = createRef<Line>();
    const true_text = createRef<Txt>();
    const false_text = createRef<Txt>();
    const code_block_rect_ref = createRef<Rect>();
    const codeblock = createRef<CodeBlock>();
    const cargo_run = createRef<Rect>();
    const cargo_run_result = createRef<Txt>();
    const returns_quotient_text = createRef<Txt>();
    const returns_remainder_text = createRef<Txt>();
    const returns_remainder_rect = createRef<Rect>();
    const returns_quotient_rect = createRef<Rect>();


    yield view.add(
        <Copyright text=' Technologs ' />
    );

    yield view.add(
        <Img
            src={ferrisImg}
            width={900}
            scale={0.15}
            x={850}
            y={470}
        ></Img>
    );

    yield view.add(
        <Button
            text="If Statement"
            fontFamily='JetBrains Mono'
            fontSize={36}
            ref={if_statement_rect_ref}
            height={120}
            color={Colors.red}
            x={0}
            y={0}
            scale={0}
            textRef={null}
        />
    );

    yield view.add(
        <Button
            text="A number"
            fontFamily='JetBrains Mono'
            fontSize={36}
            ref={value_rect_ref}
            height={120}
            color={Colors.mauve}
            x={0}
            y={0}
            scale={0}
            textRef={null}
        />
    );

    yield view.add(
        <Button
            text="Print('Its a multiple!')"
            fontFamily='JetBrains Mono'
            fontSize={36}
            ref={its_a_multiple_rect_ref}
            height={120}
            color={Colors.green}
            x={-600}
            y={350}
            scale={0}
            textRef={null}
        />
    );

    yield view.add(
        <Button
            text="Print('Its NOT a multiple!')"
            fontFamily='JetBrains Mono'
            fontSize={36}
            ref={its_not_a_multiple_rect_ref}
            height={120}
            color={Colors.peach}
            x={600}
            y={350}
            scale={0}
            textRef={null}
        />
    );

    yield view.add(
        <Line
            startArrow
            lineWidth={8}
            stroke={Colors.mauve}
            points={[
                [0, 0],
                Vector2.zero,
            ]}
            arrowSize={16}
            y={-330}
            ref={value_to_if}
        />
    );

    yield view.add(
        <Txt
            fontFamily={"JetBrains Mono"}
            fontWeight={800}
            fontSize={38}
            fill={Colors.green}
            text={""}
            x={-200}
            y={120}
            ref={true_text}
        />
    );

    yield view.add(
        <Txt
            fontFamily={"JetBrains Mono"}
            fontWeight={800}
            fontSize={38}
            fill={Colors.peach}
            text={""}
            x={200}
            y={120}
            ref={false_text}
        />
    );

    yield view.add(
        <Line
            startArrow
            lineWidth={8}
            stroke={Colors.green}
            points={[
                [-0, 0],
                Vector2.zero,
            ]}
            arrowSize={16}
            y={30}
            ref={if_to_left}
        />
    );

    yield view.add(
        <Line
            startArrow
            lineWidth={8}
            stroke={Colors.peach}
            points={[
                [0, 0],
                Vector2.zero,
            ]}
            arrowSize={16}
            y={30}
            ref={if_to_right}
        />
    );

    yield view.add(
        <TerminalWindow
            fontSize={36}
            scale={0}
            rectRef={cargo_run}
            outputRef={cargo_run_result}
            command="cargo run"
            output={``}
            cmdRef={null}
        />
    );

    yield view.add(
        <CustomCodeBlock
            rectRef={code_block_rect_ref}
            codeBlockRef={codeblock}
            scale={0}
            fontSize={38}
            tabTitle={'main.rs'}
            lang='rust'
            code={'fn main() {\n\n}'}
        />
    );

    yield view.add(
        <Rect
            layout
            padding={20}
            height={100}
            y={300}
            ref={returns_quotient_rect}
            width={550}
            scale={0}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Txt
                fontFamily={"JetBrains Mono"}
                fontWeight={800}
                fontSize={38}
                fill={Colors.peach}
                text={"/"}
                x={200}
                y={120}
            />
            <Txt
                fontFamily={"JetBrains Mono"}
                fontWeight={800}
                fontSize={38}
                fill={Colors.text}
                text={""}
                x={200}
                y={120}
                ref={returns_quotient_text}
            />
        </Rect>
    );

    yield view.add(
        <Rect
            layout
            padding={20}
            height={100}
            y={400}
            ref={returns_remainder_rect}
            scale={0}
            width={550}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Txt
                fontFamily={"JetBrains Mono"}
                fontWeight={800}
                fontSize={38}
                fill={Colors.green}
                text={"%"}
                x={200}
                y={120}
            />
            <Txt
                fontFamily={"JetBrains Mono"}
                fontWeight={800}
                fontSize={38}
                fill={Colors.text}
                text={""}
                x={200}
                y={120}
                ref={returns_remainder_text}
            />
        </Rect>
    );

    yield* waitUntil("lets-say-we-have-a-number");
    yield* openWindowScale(value_rect_ref);
    yield* waitUntil("we-want-to-check-if-its-a-multiple-of-64");
    yield* value_rect_ref().y(-400, 0.55, easeInOutQuad);
    yield* openWindowScale(if_statement_rect_ref);
    yield* if_statement_rect_ref().y(-50, 0.55, easeInOutQuad);
    yield* all(
        value_to_if().points([
            [0, 210],
            Vector2.zero,
        ], 0.75, easeInOutQuad),
    );
    yield* all(
        openWindowScale(its_a_multiple_rect_ref),
        openWindowScale(its_not_a_multiple_rect_ref)
    );
    yield* waitUntil("if-its-a-multiple-of-64");
    yield* true_text().text("True", 0.55, easeInOutQuad);
    yield* all(
        if_to_left().points([
            [-280, 250],
            Vector2.zero,
        ], 0.75, easeInOutQuad),
    );
    yield* waitUntil("if-its-not-a-multiple-of-64");
    yield* false_text().text("False", 0.55, easeInOutQuad);
    yield* all(
        if_to_right().points([
            [260, 255],
            Vector2.zero,
        ], 0.75, easeInOutQuad),
    );
    yield* waitUntil("now-lets-see-how-we-can-impl-in-rust");
    yield* all(
        closeWindowScale(value_rect_ref),
        closeWindowScale(if_statement_rect_ref),
        closeWindowScale(its_a_multiple_rect_ref),
        closeWindowScale(its_not_a_multiple_rect_ref),
        if_to_left().scale(0, 0.55, easeInOutQuad),
        if_to_right().scale(0, 0.55, easeInOutQuad),
        value_to_if().scale(0, 0.55, easeInOutQuad),
        true_text().text("", 0.55, easeInOutQuad),
        false_text().text("", 0.55, easeInOutQuad)
    );
    yield* openWindowScale(code_block_rect_ref);
    yield* waitUntil("lets-create-var-named-x");
    yield* codeblock().edit(0.75)`fn main() {\n${insert("    let x = ")}\n}`;
    yield* waitUntil("init-it-to-value");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = ${insert("2048;")}\n}`;
    yield* waitUntil("use-if-keyword");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;${insert("\n    if")}\n}`;
    yield* waitUntil("type-in-x");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if${insert(" x")}\n}`;
    yield* waitUntil("then-the-modulus-sign");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x${insert(" %")}\n}`;
    yield* waitUntil("and-finally-64");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x %${insert(" 64")}\n}`;
    yield* waitUntil("difference-between-slash-and-modulus");
    yield* codeblock().selection(lines(0, Infinity));
    yield* returns_quotient_rect().scale(1, 0.55, easeInOutQuad);
    yield* returns_quotient_text().text(" - Returns quotient", 0.55, easeInOutQuad);
    yield* returns_remainder_rect().scale(1, 0.55, easeInOutQuad);
    yield* returns_remainder_text().text(" - Returns remainder", 0.55, easeInOutQuad);
    yield* waitUntil("we-will-use-the-modulus-sign");
    yield* returns_quotient_rect().scale(0, 0.55, easeInOutQuad);
    yield* returns_remainder_rect().scale(0, 0.55, easeInOutQuad);
    yield* waitUntil("put-two-equal-signs");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64${insert(" ==")}\n}`;
    yield* waitUntil("type-in-zero");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 ==${insert(" 0")}\n}`;
    yield* waitUntil("put-code-inside-curly-braces");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0${insert(" {}")}\n}`;
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {${insert("\n\n")}    \}\n}`;
    yield* waitUntil("use-println-macro-to-print-it-is-multiple");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n${insert("        println!();")}\n    \}\n}`;
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!(${insert('"x is a multiple of 64"')});\n    \}\n}`;
    yield* waitFor(0.7);
    yield* codeblock().selection(lines(0, Infinity));
    yield* waitUntil("lets-try-running-our-code");
    yield* closeWindowScale(code_block_rect_ref);
    yield* openWindowScale(cargo_run);
    yield* cargo_run_result().opacity(1, 0);
    yield* cargo_run_result().text("x is a multiple of 64", 0.55, easeInOutQuad);
    yield* waitUntil("lets-go-back-and-change-x-value");
    yield* closeWindowScale(cargo_run);
    yield* openWindowScale(code_block_rect_ref);
    yield* waitUntil("say-3500");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = ${edit("2048", "3500")};\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \}\n}`;
    yield* codeblock().selection(lines(0, Infinity));
    yield* waitFor(1);
    yield* waitUntil("if-we-run-our-code-again");
    yield* cargo_run_result().text("", 0, easeInOutQuad);
    yield* closeWindowScale(code_block_rect_ref);
    yield* openWindowScale(cargo_run);
    yield* waitUntil("lets-go-back-and-use-else-statement");
    yield* closeWindowScale(cargo_run);
    yield* openWindowScale(code_block_rect_ref);
    yield* waitUntil("after-closing-brace-of-if-type-else");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \}${insert(" else")}\n}`;
    yield* waitUntil("put-braces-again");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else${insert(" {}")}\n}`;
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else {${insert("\n\n")}    \}\n}`;
    yield* waitUntil("print-out-its-not-multiple");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else {\n${insert("        println!();")}\n    \}\n}`;
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else {\n        println!(${insert('"x is NOT a multiple of 64"')});\n    \}\n}`;
    yield* waitFor(1);
    yield* codeblock().selection(lines(0, Infinity));
    yield* waitUntil("lets-run-code-again-again");
    yield* closeWindowScale(code_block_rect_ref);
    yield* openWindowScale(cargo_run);
    yield* cargo_run_result().text("x is NOT a multiple of 64", 0.55, easeInOutQuad);
    yield* waitUntil("lets-do-one-more-thing");
    yield* closeWindowScale(cargo_run);
    yield* openWindowScale(code_block_rect_ref);
    yield* waitUntil("use-if-else-statement");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \}${insert(" else if")} else {\n        println!("x is NOT a multiple of 64");\n    \}\n}`;
    yield* waitUntil("then-pass-in-condition");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else if${insert(" x % 70 == 0")} else {\n        println!("x is NOT a multiple of 64");\n    \}\n}`;
    yield* waitUntil("finally-open-a-new-pair-of-curly-braces");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else if x % 70 == 0${insert(" {\n\n    }")} else {\n        println!("x is NOT a multiple of 64");\n    \}\n}`;
    yield* waitUntil("again-ill-just-print-out");
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else if x % 70 == 0 {\n${insert("        println!();")}\n    } else {\n        println!("x is NOT a multiple of 64");\n    \}\n}`;
    yield* codeblock().edit(0.75)`fn main() {\n    let x = 2048;\n    if x % 64 == 0 {\n        println!("x is a multiple of 64");\n    \} else if x % 70 == 0 {\n        println!(${insert('"x is a multiple of 70 but not 64"')});\n    } else {\n        println!("x is NOT a multiple of 64");\n    \}\n}`;

});
