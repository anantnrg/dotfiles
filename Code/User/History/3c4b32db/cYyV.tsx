import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import lockIcon from '../assets/lock.svg'
import unlockIcon from '../assets/unlock.svg'
import xmarkIcon from '../assets/xmark.svg'
import ferrisImg from '../assets/ferris.svg';

export default makeScene2D(function* (view) {
    const heading = createRef<Txt>();
    const codeblock = createRef<CodeBlock>();
    const err_codeblock = createRef<CodeBlock>();
    const cargo_run_rect = createRef<Rect>();
    const codeblock_rect = createRef<Rect>();
    const output_rect = createRef<Rect>();
    const output_rect_txt = createRef<Txt>();
    const mutate_text_ref = createRef<Txt>();
    const tooltipRef = createRef<Rect>();
    const tooltip_text_ref = createRef<Txt>();
    const highlightboxRef = createRef<Rect>();
    const mutate_circle = createRef<Rect>();
    const mutate_icon = createRef<Icon>();
    const xmark_ref = createRef<Img>();
    const ferrisLogo = createRef<Img>();

    const error = createSignal(`
    error[E0384]: cannot assign twice to immutable variable \`x\`
    --> src/main.rs:3:2
     |
   2 |     let x = 0;
     |         -
     |         |
     |         first assignment to \`x\`
     |         help: consider making this binding mutable: \`mut x\`
   3 |     x = 1;
     |     ^^^^^ cannot assign twice to immutable variable
     `);
    const mutate_icon_color = createSignal("#f38ba8");

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
        <Img
            ref={ferrisLogo}
            src={ferrisImg}
            width={900}
            scale={0.15}
            x={850}
            y={450}
        ></Img>
    )

    yield view.add(
        <Rect layout ref={codeblock_rect} direction={"column"} scale={0}>
            <Rect
                layout
                direction={"row"}
                fill="#1e1e2e"
                width={180}
                marginBottom={12}
                padding={10}
                radius={8}
                marginLeft={5}
                alignItems={"center"}
                justifyContent={"center"}
                lineWidth={2}
                stroke={"#45475a"}
            >
                <Icon
                    icon={"devicon-plain:rust"}
                    color={"#cdd6f4"}
                    width={32}
                    height={32}
                    marginRight={15}
                />
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fontSize={22}
                    fill="#cdd6f4"

                >main.rs</Txt>
            </Rect>
            <Rect
                layout
                alignItems={"center"}
                justifyContent={"center"}
                fill={"1e1e2e"}
                padding={30}
                paddingBottom={0}
                radius={20}
                y={15}
            >
                <CodeBlock
                    ref={codeblock}
                    language='rust'
                    fontFamily={"JetBrains Mono"}
                    fontSize={48}
                    code={``}
                    lineHeight={90}
                />
            </Rect>
        </Rect>
    );

    yield view.add(
        <Rect
            layout
            alignItems={"center"}
            justifyContent={"center"}
            fill={"1e1e2e"}
            padding={30}
            paddingBottom={0}
            radius={20}
            ref={err_codeblock}
            opacity={0}
        >
            <CodeBlock
                fontFamily={"JetBrains Mono"}
                fontSize={36}
                code={error}
            />,
        </Rect>
    );

    yield view.add(
        <Rect
            layout
            direction={"column"}
            ref={cargo_run_rect}
            scale={0}
            fill={"1e1e2e"}
            padding={30}
            paddingLeft={50}
            alignItems={"start"}
            justifyContent={"center"}
            radius={30}
            width={600}
        >
            <Rect layout>
                <Txt
                    fill="#f9e2af"
                    antialiased={true}
                    fontFamily={"JetBrains Mono"}
                    fontWeight={600}
                    fontSize={48}
                    marginRight={30}
                >$</Txt >
                <Txt
                    fill="#89b4fa"
                    antialiased={true}
                    fontFamily={"JetBrains Mono"}
                    fontWeight={600}
                    fontSize={48}
                    opacity={1}
                    shadowOffset={12}
                    marginRight={30}
                >cargo</Txt >
                <Txt
                    fill="#a6e3a1"
                    antialiased={true}
                    fontFamily={"JetBrains Mono"}
                    fontWeight={600}
                    fontSize={48}
                    opacity={1}
                    shadowOffset={12}
                >run</Txt >
            </Rect>
            <Rect
                layout
                ref={output_rect}
                opacity={0}
                marginTop={30}
                marginRight={0}
            >
                <Txt
                    ref={output_rect_txt}
                    fill="#cdd6f4"
                    antialiased={true}
                    fontFamily={"JetBrains Mono"}
                    fontWeight={600}
                    fontSize={42}
                >0</Txt >
            </Rect>
        </Rect>
    );

    yield view.add(
        <Rect
            ref={mutate_circle}
            alignItems={"center"}
            justifyContent={"center"}
            scale={0}
        >
            <Circle
                width={400}
                height={400}
                fill="#1e1e2e"
                lineWidth={2}
                stroke={"#45475a"}
            />
            <Rect
                alignItems={"center"}
                layout
                direction={"column"}
            >
                <Icon
                    icon={"material-symbols:lock"}
                    color={mutate_icon_color()}
                    width={200}
                    height={200}
                    ref={mutate_icon}
                />
                <Txt
                    ref={mutate_text_ref}
                    fill="#f38ba8"
                    fontFamily={"JetBrains Mono"}
                    fontSize={48}
                    fontWeight={900}
                    marginTop={30}
                    text="Immutable"
                />
            </Rect>
        </Rect>
    );

    yield* view.add(
        <Img
            src={xmarkIcon}
            width={42}
            y={-65}
            x={80}
            opacity={0}
            ref={xmark_ref}
        />
    );

    yield view.add(
        <Rect
            radius={10}
            layout
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            height={450}
            x={530}
            y={-65}
            ref={tooltipRef}
            scale={0}
        >
            <Line
                lineWidth={10}
                stroke="#cdd6f4"
                startArrow
                points={[
                    Vector2.zero,
                    Vector2.right.scale(150)
                ]}
                arrowSize={22}
                marginRight={40}
                marginLeft={40}
            />
            <Txt
                text="Tells the compiler that this variable is an integer"
                fontFamily={"JetBrains Mono"}
                fontSize={48}
                fontWeight={900}
                fill={"cdd6f4"}
                maxWidth={600}
                textWrap={true}
                textAlign={"left"}
                ref={tooltip_text_ref}
            />
        </Rect>
    );

    yield* view.add(
        <Rect
            stroke="#cdd6f4"
            lineWidth={8}
            width={120}
            height={64}
            radius={12}
            x={70}
            y={-65}
            ref={highlightboxRef}
            scale={0}
        />
    )

    yield* waitUntil("start-variables");

    yield* chain(
        tween(0.55, value => {
            codeblock_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("declare-var"),
        codeblock().edit(0.55)`${insert('let')}`,
        waitUntil("give-var-name"),
        codeblock().edit(0.55)`let${insert(' x;')}`,
        waitUntil("init-to-value"),
        codeblock().edit(0.55)`let x${insert(' = 0')};`,
        waitUntil("print-var"),
        codeblock().edit(0.55)`let x = 0;\n${insert('println!')}`,
        waitUntil("add-braces"),
        codeblock().edit(0.55)`let x = 0;\nprintln!${insert('()')};`,
        waitUntil("add-quotes"),
        codeblock().edit(0.55)`let x = 0;\nprintln!(${insert('""')});`,
        waitUntil("add-curly-braces"),
        codeblock().edit(0.55)`let x = 0;\nprintln!(\"${insert('{}')}\");`,
        waitUntil("insert-x"),
        codeblock().edit(0.55)`let x = 0;\nprintln!(\"{}\"${insert(', x')});`,
    );
    yield* codeblock().selection(lines(0, Infinity));
    yield* waitUntil("finish-print");
    yield* tween(0.55, value => {
        codeblock_rect().scale(map(1, 0, easeInSine(value)))
    });
    yield* waitUntil("run");
    yield* chain(
        tween(0.55, value => {
            cargo_run_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("show-output"),
        tween(0.75, value => {
            output_rect().opacity(map(0, 1, easeInSine(value)))
        }),
        waitUntil("finish-output"),
        all(
            tween(0.55, value => {
                cargo_run_rect().scale(map(1, 0, easeOutSine(value)))
            }),
            tween(0.55, value => {
                output_rect().scale(map(1, 0, easeOutSine(value)))
            })
        ),
    );

    yield* waitUntil("start-mut-variable");

    yield* chain(
        tween(0.55, value => {
            codeblock_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("put-incorrect-mut"),
        codeblock().edit(0.55)`let x = 0;\n${insert('x = 1;')}\nprintln!(\"{}\", x);`,
        waitFor(0.5),
    );
    yield* codeblock().selection(lines(0, Infinity));
    yield* waitUntil("run-again");
    yield* tween(0.55, value => {
        codeblock_rect().scale(map(1, 0, easeInSine(value)))
    });
    yield* cargo_run_rect().fill("rgba(0, 0, 0, 0)");
    yield* chain(
        tween(0.55, value => {
            cargo_run_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("wont-compile"),
        tween(0.55, value => {
            cargo_run_rect().opacity(map(1, 0, easeOutSine(value)))
        }),
        waitUntil("will-error"),
        tween(0.75, value => {
            err_codeblock().opacity(map(0, 1, easeOutSine(value)))
        }),
        waitFor(1.2),
        tween(0.55, value => {
            err_codeblock().opacity(map(1, 0, easeOutSine(value)))
        }),
    );
    yield* waitUntil("vars-are-imut");
    yield* chain(
        tween(0.55, value => {
            mutate_circle().scale(map(0, 1.1, easeOutSine(value)))
        }),
        waitUntil("need-to-use-mut"),
        tween(0.55, value => {
            mutate_circle().scale(map(1.1, 1, easeInSine(value)))
            mutate_circle().position.x(map(0, -400, easeInSine(value)))
        }),
    );
    yield* chain(
        tween(0.75, value => {
            codeblock_rect().scale(map(0, 1, easeOutSine(value)))
            codeblock_rect().position.x(map(0, 300, easeInSine(value)))
        }),
        waitUntil("make-x-mut"),
        codeblock().edit(0.55)`let ${insert('mut ')}x = 0;\nx = 1;\nprintln!(\"{}\", x);`,
    );
    yield* codeblock().selection(lines(0, Infinity));
    yield* cargo_run_rect().fill("#1e1e2e");
    yield mutate_icon().icon("material-symbols:lock-open");
    yield mutate_icon().color("a6e3a1");
    yield* mutate_text_ref().text("Mutable");
    yield* mutate_text_ref().fill("#a6e3a1");
    yield* waitUntil("try-running-again");
    yield* all(
        tween(0.55, value => {
            codeblock_rect().scale(map(1, 0, easeInSine(value)))
        }),
        tween(0.55, value => {
            mutate_circle().scale(map(1, 0, easeInSine(value)))
        })
    );
    yield* output_rect_txt().text("1");
    yield* cargo_run_rect().opacity(1);
    yield* output_rect().scale(1);
    yield* output_rect().opacity(0);
    yield* chain(
        tween(0.55, value => {
            cargo_run_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("should-print-1"),
        tween(0.75, value => {
            output_rect().opacity(map(0, 1, easeInSine(value)))
        }),
        waitUntil("look-another-scenario"),
        all(
            tween(0.55, value => {
                cargo_run_rect().scale(map(1, 0, easeOutSine(value)))
            }),
            tween(0.55, value => {
                output_rect().scale(map(1, 0, easeOutSine(value)))
            })
        ),
    );
    yield codeblock_rect().position.x(0);
    yield* chain(
        tween(0.75, value => {
            codeblock_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("simple-enough"),
        codeblock().edit(0.55)`let mut x${remove(' = 0')};\nx = 1;\nprintln!(\"{}\", x);`,
    );
    yield* codeblock().selection(lines(0, Infinity));
    yield* waitUntil("not-quite");
    yield* chain(
        tween(0.75, value => {
            xmark_ref().opacity(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("but-then-no-init-type"),
        tween(0.75, value => {
            xmark_ref().opacity(map(1, 0, easeOutSine(value)))
        }),
        waitFor(0.25),
        codeblock().edit(0.55)`let mut x${insert(' = 0')};\nx = 1;\nprintln!(\"{}\", x);`,
        waitUntil("since-we-init"),
        tween(0.55, value => {
            highlightboxRef().scale(map(0, 1, easeOutSine(value)))
            tooltipRef().scale(map(0, 1, easeOutSine(value)))
        }),
        waitFor(1.5),
        tween(0.55, value => {
            tooltipRef().scale(map(1, 0, easeOutSine(value)))
            highlightboxRef().scale(map(1, 0, easeOutSine(value)))
        }),
    );
    yield tooltip_text_ref().text("This variable could be anything!");
    yield* codeblock().selection(lines(0, Infinity));
    yield* chain(
        waitUntil("we-removed-init"),
        codeblock().edit(0.55)`let mut x${remove(' = 0')};\nx = 1; \nprintln!(\"{}\", x);`,
    );
    yield* codeblock().selection(lines(0, 0));
    yield tooltipRef().x(450);
    yield* chain(
        tween(0.75, value => {
            tooltipRef().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("we-need-to-specify"),
        tween(0.75, value => {
            tooltipRef().scale(map(1, 0, easeInSine(value)))
        }),
    );
    yield* codeblock().selection(lines(0, Infinity));
});
