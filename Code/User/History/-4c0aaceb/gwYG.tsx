import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { Copyright } from 'helpers/copyright';

export default makeScene2D(function* (view) {
    const inputs_block_ref = createRef<Rect>();
    const functions_block_ref = createRef<Rect>();
    const outputs_block_ref = createRef<Rect>();
    const inputs_line_ref = createRef<Line>();
    const outputs_line_ref = createRef<Line>();

    const input_data_ref = createRef<Rect>();
    const function_working_ref = createRef<Rect>();
    const output_data_ref = createRef<Rect>();
    yield* waitUntil("start-func-theory");

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
});
