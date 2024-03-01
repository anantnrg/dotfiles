import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { Copyright } from 'helpers/copyright';
import { Button } from 'helpers/button';
import { openWindowScale, closeWindowScale, textAppear, textDisappear } from 'helpers/animations';

export default makeScene2D(function* (view) {
    const infinite_loop_rect_ref = createRef<Rect>();
    const while_loop_rect_ref = createRef<Rect>();
    const for_loop_rect_ref = createRef<Rect>();
    const if_statement_rect_ref = createRef<Rect>();

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
        <Rect
            layout
        direction={"column"}
        alignContent={}
        <Button
            text="Infinite Loops"
            fontFamily='JetBrains Mono'
            fontSize={36}
            ref={infinite_loop_rect_ref}
            height={120}
            color='f38ba8'
            x={0}
            y={-250}
        />
    );

    yield view.add(
        <Button
            text="While Loops"
            fontFamily='JetBrains Mono'
            fontSize={36}
            ref={while_loop_rect_ref}
            height={120}
            color='89b4fa'
            x={0}
            y={-50}
        />
    );

    yield view.add(
        <Button
            text="For Loops"
            fontFamily='JetBrains Mono'
            fontSize={36}
            ref={for_loop_rect_ref}
            height={120}
            color='f9e2af'
            x={0}
            y={150}
        />
    );

    yield view.add(
        <Button
            text="If/Else Statements"
            fontFamily='JetBrains Mono'
            fontSize={36}
            ref={if_statement_rect_ref}
            height={120}
            color='a6e3a1'
            x={0}
            y={350}
        />
    );

    yield* waitUntil("first-we-talk-about-infinite-loop");
    yield* openWindowScale(infinite_loop_rect_ref);
    yield* waitUntil("then-we-talk-about-while");
});
