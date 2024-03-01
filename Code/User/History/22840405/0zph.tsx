import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack, easeInOutQuad } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { Copyright } from 'helpers/copyright';
import { Button } from 'helpers/button';
import { openWindowScale } from 'helpers/animations';
import { Colors } from 'helpers/styles';
import { CustomCodeBlock } from 'helpers/codeblock';


export default makeScene2D(function* (view) {
    const while_loop_button_ref = createRef<Rect>();
    const value_button_ref = createRef<Rect>();
    const value_text_ref = createRef<Txt>();
    const function_button_ref = createRef<Rect>();
    const value_to_loop_arrow_ref = createRef<Line>();
    const loop_to_function_arrow_ref = createRef<Line>();
    const break_loop_icon = createRef<Icon>();
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
        <CustomCodeBlock />
    )

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
});
