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
        <Button
            text="Infinite Loops"
            icon='material-symbols:sync-outline'
            fontFamily='JetBrains Mono'
            fontSize={36}
            iconSizeOffset={26}
            ref={infinite_loop_rect_ref}
            width={400}
            height={120}
            color='f38ba8'
            x={0}
            y={-250}
        />
    );

    yield view.add(
        <Button
            text="While Loops"
            icon='material-symbols:sync-outline'
            fontFamily='JetBrains Mono'
            fontSize={36}
            iconSizeOffset={26}
            ref={infinite_loop_rect_ref}
            width={400}
            height={120}
            color='f38ba8'
            x={0}
            y={-250}
        />
    );

    yield view.add(
        <Button
            text="Infinite Loops"
            icon='material-symbols:sync-outline'
            fontFamily='JetBrains Mono'
            fontSize={36}
            iconSizeOffset={26}
            ref={infinite_loop_rect_ref}
            width={400}
            height={120}
            color='f38ba8'
            x={0}
            y={-250}
        />
    );

    yield view.add(
        <Button
            text="Infinite Loops"
            icon='material-symbols:sync-outline'
            fontFamily='JetBrains Mono'
            fontSize={36}
            iconSizeOffset={26}
            ref={infinite_loop_rect_ref}
            width={400}
            height={120}
            color='f38ba8'
            x={0}
            y={-250}
        />
    );

    yield* waitUntil("first-we-talk-about-infinite-loop");
    yield* openWindowScale(infinite_loop_rect_ref);
    yield* waitUntil("then-we-talk-about-while");
});
