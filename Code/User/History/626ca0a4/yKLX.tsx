import { makeScene2D, Circle, Txt, Img, Rect, Line } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, waitUntil } from '@motion-canvas/core';
import packagesIcon from '../assets/package.svg';
import buildIcon from '../assets/wrench.svg';
import cargoIcon from '../assets/cargo.png';
import { CodeBlock, edit, insert, lines, remove } from '@motion-canvas/2d/lib/components/CodeBlock';

export default makeScene2D(function* (view) {
    const heading = createRef<Txt>();
    const output_ref = createRef<Txt>();
    const output_rect_ref = createRef<Rect>();
    const codeblock = createRef<CodeBlock>();


    yield view.add(
        <Txt
            y={-500}
            x={-800}
            fill="#cdd6f4"
            antialiased={true}
            fontFamily={"JetBrains Mono"}
            fontWeight={900}
            fontSize={22}
        > © Technolog.in 2023</Txt >,
    );

    yield view.add(
        <CodeBlock
            ref={codeblock}
            language='rust'
            fontFamily={"JetBrains Mono"}
            fontSize={48}
            code={`let mut x;\nx = 1;\nprintln!("{}", x);`}
            scale={0}
            lineHeight={90}
            y={30}
        />,
    );

    yield view.add(
        <Rect
            layout
            direction={"column"}
            alignItems={"start"}
            justifyContent={"center"}
            x={400}
            ref={output_rect_ref}
            scale={0}
        >
            <Txt
                ref={heading}
                fill="#cdd6f4"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={900}
                fontSize={76}
                opacity={1}
            >Output:</Txt >,
            <Txt
                ref={output_ref}
                y={-400}
                fill="#cdd6f4"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={600}
                fontSize={72}
                marginTop={30}
                opacity={0}
            >1</Txt >,
        </Rect>

    );

    yield* waitUntil("use-types");

    yield* chain(
        tween(0.55, value => {
            codeblock().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("to-set-type"),
        codeblock().edit(0.55)`let mut x${insert(": i32")};\nx = 1;\nprintln!("{}", x); `,
    );

    yield codeblock().selection(lines(0, Infinity));

    yield* waitUntil("output-1");

    yield* chain(
        tween(0.75, value => {
            codeblock().x(map(0, -400, easeInSine(value)))
        }),
        tween(0.55, value => {
            output_rect_ref().scale(map(0, 1, easeOutSine(value)))
        }),
        tween(0.55, value => {
            output_ref().opacity(map(0, 1, easeOutSine(value)))
        }),
    );

    yield* waitUntil("perform-arithmetic");

    yield* chain(
        waitUntil("set-x-16"),
        codeblock().edit(0.55)`let mut x${edit("\nx = 1;", " = 16")};\nprintln!("{}", x);`,
    );

    yield codeblock().selection(lines(0, Infinity));

    yield* waitUntil("set-x-x+4");

    yield* chain(
        codeblock().edit(0.55)`let mut x = 16;${insert("\nx = x + 4;")}\nprintln!("{}", x);`,
        waitUntil("what-this-will-do-1"),
        codeblock().edit(0.55)`let mut x = 16;\nx = ${edit("x", "16")} + 4;\nprintln!("{}", x);`,
        waitFor(1),
        codeblock().edit(0.55)`let mut x = 16;\nx = ${edit("16", "x")} + 4;\nprintln!("{}", x);`,
        waitFor(0.5),
        tween(0, v => {
            codeblock().selection(lines(0, Infinity))
        }),
        tween(0.45, value => {
            output_ref().opacity(map(1, 0, easeInSine(value)))
        })
    );
    yield output_ref().text("20");
    yield* waitUntil("output-20");
    yield* chain(
        tween(0.45, value => {
            output_ref().opacity(map(0, 1, easeOutSine(value)))
        }),
    );
    yield* waitUntil("try-subtraction");
    yield* chain(
        codeblock().edit(0.55)`let mut x = 16;\nx = x ${edit("+", "-")} 4;\nprintln!("{}", x);`,
        waitUntil("what-this-will-do-2"),
        codeblock().edit(0.55)`let mut x = 16;\nx = ${edit("x", "16")} - 4;\nprintln!("{}", x);`,
        waitFor(1),
        codeblock().edit(0.55)`let mut x = 16;\nx = ${edit("16", "x")} - 4;\nprintln!("{}", x);`,
        waitFor(0.5),
        tween(0, v => {
            codeblock().selection(lines(0, Infinity))
        }),
        tween(0.45, value => {
            output_ref().opacity(map(1, 0, easeInSine(value)))
        })
    );
    yield output_ref().text("12");
    yield* waitUntil("output-12");
    yield* chain(
        tween(0.45, value => {
            output_ref().opacity(map(0, 1, easeOutSine(value)))
        }),
    );
    yield* chain(
        waitUntil("remove-mut"),
        codeblock().edit(0.55)`let ${remove("mut ")}x = 16;\nx = x - 4;\nprintln!("{}", x);`,
        waitUntil("remove-mutate-x"),
        codeblock().edit(0.55)`let x = 16;${remove("\nx = x - 4;")}\nprintln!("{}", x);`,
        waitUntil("define-y"),
        codeblock().edit(0.55)`let x = 16;${insert("\nlet y = 1024;")}\nprintln!("{}", x);`,
        waitUntil("define-z"),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;${insert("\nlet z;")}\nprintln!("{}", x);`,
        waitUntil("set-z"),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z${insert(" = ")};\nprintln!("{}", x);`,
        waitUntil("type-y"),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = ${insert("y")};\nprintln!("{}", x);`,
        waitUntil("type-modulus"),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = y${insert(" * ")};\nprintln!("{}", x);`,
        waitUntil("type-x"),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = y * ${insert("x")};\nprintln!("{}", x);`,
        waitUntil("change-print-var"),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = y * x;\nprintln!("{}", ${edit("x", "z")});`,
        waitUntil("what-this-will-do"),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = ${edit("y", "1024")} * x;\nprintln!("{}", z);`,
        waitUntil("with-value-of-x"),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = 1024 * ${edit("x", "16")};\nprintln!("{}", z);`,
        waitFor(0.5),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = ${edit("1024", "y")} * 16;\nprintln!("{}", z);`,
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = y * ${edit("16", "x")};\nprintln!("{}", z);`,
        tween(0, v => {
            codeblock().selection(lines(0, Infinity))
        }),
        tween(0.45, value => {
            output_ref().opacity(map(1, 0, easeInSine(value)))
        })
    );
    yield output_ref().text("16384");
    yield* chain(
        tween(0.45, value => {
            output_ref().opacity(map(0, 1, easeOutSine(value)))
        }),
        waitFor(1),
    );
    yield* chain(
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = y ${edit("*", "/")} x;\nprintln!("{}", z);`,
        waitFor(1),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = ${edit("y", "1024")} / x;\nprintln!("{}", z);`,
        waitFor(0.5),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = 1024 / ${edit("x", "16")};\nprintln!("{}", z);`,
        waitFor(0.5),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = ${edit("1024", "y")} / 16;\nprintln!("{}", z);`,
        waitFor(0.5),
        codeblock().edit(0.55)`let x = 16;\nlet y = 1024;\nlet z = y / ${edit("16", "x")};\nprintln!("{}", z);`,
        waitFor(0.5),
        tween(0, v => {
            codeblock().selection(lines(0, Infinity))
        }),
        waitFor(1),
        tween(0.45, value => {
            output_ref().opacity(map(1, 0, easeInSine(value)))
        })
    );
    yield output_ref().text("64");
    yield* chain(
        tween(0.45, value => {
            output_ref().opacity(map(0, 1, easeOutSine(value)))
        }),
        waitFor(1),
    );
});
