import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { Copyright } from 'helpers/copyright';
import { Button } from 'helpers/button';
import * as anim from 'helpers/animations';

export default makeScene2D(function* (view) {
    const infinite_loop_rect_ref = createRef<Rect>();
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
            fontSize={46}
            ref={infinite_loop_rect_ref}
            width={350}
            height={100}
            color='cdd6f4'
        />
    );

    yield* anim.
});
