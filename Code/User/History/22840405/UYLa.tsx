import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack, easeInOutQuad } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { Copyright } from 'helpers/copyright';
import { Button } from 'helpers/button';
import { closeWindowScale, openWindowScale } from 'helpers/animations';
import { Colors } from 'helpers/styles';
import { CustomCodeBlock } from 'helpers/codeblock';
import { TerminalWindow } from 'helpers/terminal';


export default makeScene2D(function* (view) {
    const while_loop_button_ref = createRef<Rect>();
    const value_button_ref = createRef<Rect>();
    const value_text_ref = createRef<Txt>();
    const function_button_ref = createRef<Rect>();
    const value_to_loop_arrow_ref = createRef<Line>();
    const loop_to_function_arrow_ref = createRef<Line>();
    const break_loop_icon = createRef<Icon>();
    const code_block_rect_ref = createRef<Rect>();
    const codeblock = createRef<CodeBlock>();
    const cargo_run = createRef<Rect>();
    const cargo_run_result = createRef<Txt>();

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
            color={Colors.red}
            fontFamily='JetBrains Mono'
            fontSize={42}
            height={100}
            ref={value_button_ref}
            scale={0}
            text='True'
            x={0}
            y={-300}
            textRef={value_text_ref}
        />
    );

    yield view.add(
        <Button
            color={Colors.mauve}
            fontFamily='JetBrains Mono'
            fontSize={42}
            height={100}
            ref={while_loop_button_ref}
            scale={0}
            text='While Loop'
            x={0}
            y={0}
            textRef={null}
        />
    );

    yield view.add(
        <Button
            color={Colors.green}
            fontFamily='JetBrains Mono'
            fontSize={42}
            height={100}
            ref={function_button_ref}
            scale={0}
            text='Some Function'
            x={0}
            y={300}
            textRef={null}
        />
    );

    yield view.add(
        <Line
            endArrow
            lineWidth={8}
            stroke={Colors.red}
            points={[
                Vector2.zero,
                Vector2.up.scale(150)
            ]}
            arrowSize={16}
            y={-270}
            opacity={0}
            ref={value_to_loop_arrow_ref}
        />
    );

    yield view.add(
        <Line
            endArrow
            lineWidth={8}
            stroke={Colors.green}
            points={[
                Vector2.zero,
                Vector2.up.scale(150)
            ]}
            arrowSize={16}
            y={50}
            opacity={0}
            ref={loop_to_function_arrow_ref}
        />
    );

    yield view.add(
        <Icon
            icon={"ic:baseline-cancel"}
            color={Colors.red}
            scale={0}
            y={150}
            ref={break_loop_icon}
        />
    );

    yield view.add(
        <TerminalWindow
            fontSize={36}
            scale={0}
            rectRef={cargo_run}
            outputRef={cargo_run_result}
            command="cargo run"
            output={`0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10`}
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
            code={''}
        />
    );

    yield* waitUntil("we-will-look-at-while-loops");
    yield* openWindowScale(while_loop_button_ref);

    yield* waitUntil("lets-say-we-have-a-var");
    yield* openWindowScale(value_button_ref);

    yield* all(
        value_to_loop_arrow_ref().opacity(1, 0.55),
        value_to_loop_arrow_ref().y(-230, 0.55)
    );

    yield* waitUntil("performs-associated-function");
    yield* openWindowScale(function_button_ref);

    yield* all(
        loop_to_function_arrow_ref().opacity(1, 0.55),
        loop_to_function_arrow_ref().y(80, 0.55)
    );

    yield* waitUntil("if-the-value-becomes-false");
    yield* value_text_ref().text("False", 0.5)
    yield* loop_to_function_arrow_ref().opacity(0, 0.55, easeInOutQuad);
    yield* break_loop_icon().scale(6, 0.75, easeInOutQuad);
    yield* waitUntil("now-we-know-what-while-loops-are");

    yield* all(
        break_loop_icon().scale(0, 0.75, easeInOutQuad),
        closeWindowScale(while_loop_button_ref),
        closeWindowScale(value_button_ref),
        closeWindowScale(function_button_ref),
        value_to_loop_arrow_ref().opacity(0, 0.55),
    );

    yield* waitUntil("lets-see-how-we-can-create-while-loop");
    yield* openWindowScale(code_block_rect_ref);
    yield* waitUntil("first-we-need-to-create-mutable-var-x");
    yield* codeblock().edit(0.75)`${insert("let mut x;")}`;
    yield* waitUntil("set-x-to-0");
    yield* codeblock().edit(0.75)`let mut x${insert(" = 0")};`;
    yield* waitUntil("define-while-loop");
    yield* codeblock().edit(0.75)`let mut x = 0;${insert("\n\nwhile")}`;
    yield* waitUntil("need-condition-type-x");
    yield* codeblock().edit(0.75)`let mut x = 0;\n\nwhile${insert(" x")}`;
    yield* waitUntil("put-left-angle-bracket");
    yield* codeblock().edit(0.75)`let mut x = 0;\n\nwhile x${insert(" <")}`;
    yield* waitUntil("put-equal-sign");
    yield* codeblock().edit(0.75)`let mut x = 0;\n\nwhile x <${insert("=")}`;
    yield* waitUntil("put-ten");
    yield* codeblock().edit(0.75)`let mut x = 0;\n\nwhile x <=${insert(" 10")}`;
    yield* waitUntil("put-code-inside-curly-braces");
    yield* codeblock().edit(0.75)`let mut x = 0;\n\nwhile x <= 10${insert(" {\n\n}")}`;
    yield* waitUntil("we-can-use-println-macro");
    yield* codeblock().edit(0.75)`let mut x = 0;\n\nwhile x <= 10 {\n${insert("    println!();")}\n\}`;
    yield* codeblock().edit(0.75)`let mut x = 0;\n\nwhile x <= 10 {\n    println!(${insert('"{}"')});\n\}`;
    yield* codeblock().edit(0.75)`let mut x = 0;\n\nwhile x <= 10 {\n    println!("{}"${insert(', x')});\n\}`;
    yield* waitUntil("mutate-and-increment-x");
    yield* codeblock().edit(0.75)`let mut x = 0;\n\nwhile x <= 10 {\n    println!("{}", x)\n${insert('')}\n\}`;
});
