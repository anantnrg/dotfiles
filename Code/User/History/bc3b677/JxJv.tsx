import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack, easeInOutQuad, loop } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { Copyright } from 'helpers/copyright';
import { TerminalWindow } from 'helpers/terminal';
import { CustomCodeBlock } from 'helpers/codeblock';
import { Keys } from 'helpers/keys';
import { openWindowScale, closeWindowScale, textAppear, textDisappear } from 'helpers/animations';

export default makeScene2D(function* (view) {
    const code_block_rect_ref = createRef<Rect>();
    const keys_ref = createRef<Rect>();
    const cmd_ref = createRef<Txt>();
    const infinite_loop_circle = createRef<Icon>();
    const cargo_run = createRef<Rect>();
    const cargo_run_result = createRef<Txt>();
    const codeblock = createRef<CodeBlock>();

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
        />
    );

    yield view.add(
        <Icon
            icon={"octicon:sync"}
            scale={0}
            color={"cba6f7"}
            ref={infinite_loop_circle}
        />
    )

    yield view.add(
        <TerminalWindow
            fontSize={36}
            scale={0}
            rectRef={cargo_run}
            outputRef={cargo_run_result}
            command="cargo run"
            output='This prints forever!'
            cmdRef={cmd_ref}
        />
    );

    yield view.add(
        <Keys
            fontSize={48}
            keys='Ctrl + C'
            height={100}
            rectRef={keys_ref}
            scale={1}
            width={200}
            x={0}
            y={430}
        />
    )

    yield view.add(
        <CustomCodeBlock
            rectRef={code_block_rect_ref}
            codeBlockRef={codeblock}
            scale={0}
            fontSize={38}
            tabTitle={'main.rs'}
            lang='rust'
            code={''}
        />
    );

    yield* waitUntil("what-is-infinite-loop");
    yield* tween(0.55, v => {
        infinite_loop_circle().scale(map(0, 16, easeInOutQuad(v)))
    });

    yield* waitUntil("how-to-define-loop-in-rust");
    yield* chain(
        tween(0.55, v => {
            infinite_loop_circle().scale(map(16, 0, easeInOutQuad(v)))
        }),
        openWindowScale(code_block_rect_ref),
        waitUntil("to-create-infinite-loop-use-keyword"),
        codeblock().edit(0.75)`${insert("loop")}`,
        waitUntil("put-a-pair-of-curly-braces-1"),
        codeblock().edit(0.75)`loop${insert(" {}")}`,
        waitUntil("need-to-put-our-code-1"),
        codeblock().edit(0.75)`loop {${insert("\n\n")}\}`,
        waitUntil("lets-print-out-string-1"),
        codeblock().edit(0.75)`loop {\n${insert("    println!")}\n\}`,
        codeblock().edit(0.75)`loop {\n    println!${insert("();")}\n\}`,
        codeblock().edit(0.75)`loop {\n    println!(${insert('""')});\n\}`,
        codeblock().edit(0.75)`loop {\n    println!("${insert('This prints forever!')}");\n\}`,
    );

    yield* codeblock().selection(lines(0, Infinity));

    yield* chain(
        waitUntil("lets-try-running-code-1"),
        closeWindowScale(code_block_rect_ref),
        openWindowScale(cargo_run),
        waitUntil("it-will-print-our-string-infinitely"),
        textAppear(cargo_run_result),
        loop(10, i => {
            cargo_run_result().text(cargo_run_result().text().concat("\nThis prints forever!"))
        }),
        waitUntil("to-quit-press-ctrl-c")
    )
});
