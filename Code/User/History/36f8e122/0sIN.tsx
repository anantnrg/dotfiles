import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex, CubicBezier, QuadBezier } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack, easeInOutCubic, easeInQuad, easeInOutQuad } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { Copyright } from 'helpers/copyright';

export default makeScene2D(function* (view) {
    const ferrisLogo = createRef<Img>();
    const thx = createRef<Txt>();
    const sub_curve = createRef<QuadBezier>();
    const sub_curve_text = createRef<Txt>();
    const subscribe = createRef<Circle>();
    const video = createRef<Rect>();
    const playlist = createRef<Rect>();

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
            ref={ferrisLogo}
        ></Img>
    );

    yield view.add(
        <Txt
            fontFamily={"JetBrains Mono"}
            fill={"f38ba8"}
            shadowColor={"f38ba8"}
            shadowBlur={150}
            fontSize={128}
            y={-200}
            opacity={0}
            fontWeight={900}
            ref={thx}
        >Thanks for watching!</Txt>
    );

    yield view.add(
        <Circle
            lineWidth={10}
            stroke={"f38ba8"}
            width={298}
            height={298}
            shadowColor={"f38ba8"}
            shadowBlur={60}
            ref={subscribe}
            scale={0}
        />
    );

    yield view.add(
        <Rect
            lineWidth={10}
            stroke={"cba6f7"}
            width={608}
            height={344}
            radius={20}
            shadowColor={"cba6f7"}
            shadowBlur={60}
            x={-600}
            ref={video}
            scale={0}
        />
    );


    yield view.add(
        <Rect
            lineWidth={10}
            stroke={"f9e2af"}
            width={608}
            height={344}
            radius={20}
            shadowColor={"f9e2af"}
            shadowBlur={60}
            x={600}
            ref={playlist}
            scale={0}
        />
    );

    yield view.add(
        <QuadBezier
            lineWidth={10}
            stroke={"cdd6f4"}
            y={200}
            p0={[200, 200]}
            p1={[-10, 200]}
            endArrow
            arrowSize={20}
            ref={sub_curve}
            opacity={0}
        />
    );

    yield view.add(
        <Txt
            fontFamily={"JetBrains Mono"}
            fontWeight={900}
            fontSize={64}
            fill={"cdd6f4"}
            y={400}
            x={420}
            opacity={0}
            ref={sub_curve_text}
        >Subscribe!</Txt>
    )
    yield* waitUntil("start-outro");

    yield* all(
        tween(0.75, value => { ferrisLogo().scale(map(0.15, 1, easeOutSine(value))) }),
        tween(0.75, value => { ferrisLogo().x(map(850, 0, easeOutSine(value))) }),
        tween(0.75, value => { ferrisLogo().y(map(450, 0, easeOutSine(value))) }),
    );

    yield* waitUntil("thanks-for-watching");

    yield* chain(
        tween(0.75, v => {
            ferrisLogo().opacity(map(1, 0, easeInSine(v)))
        }),
        waitFor(0.5),
        tween(0.75, v => {
            thx().opacity(map(0, 1, easeOutSine(v)))
            thx().y(map(-200, -350, easeOutSine(v)))
        }),
        tween(0.75, v => {
            subscribe().scale(map(0, 1, easeInOutCubic(v)))
        }),
        tween(0.75, v => {
            video().scale(map(0, 1, easeInOutCubic(v)))
        }),
        tween(0.75, v => {
            playlist().scale(map(0, 1, easeInOutCubic(v)))
        }),
        waitFor(1.2),
        tween(0.75, v => {
            sub_curve().opacity(map(0, 1, easeInOutCubic(v)))
            sub_curve_text().opacity(map(0, 1, easeInOutCubic(v)))
        }),
    );

    yield* all(
        sub_curve().y(180, 1, easeInOutCubic),
        sub_curve_text().y(380, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(200, 1, easeInOutCubic),
        sub_curve_text().y(400, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(180, 1, easeInOutCubic),
        sub_curve_text().y(380, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(200, 1, easeInOutCubic),
        sub_curve_text().y(400, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(180, 1, easeInOutCubic),
        sub_curve_text().y(380, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(200, 1, easeInOutCubic),
        sub_curve_text().y(400, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(180, 1, easeInOutCubic),
        sub_curve_text().y(380, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(200, 1, easeInOutCubic),
        sub_curve_text().y(400, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(180, 1, easeInOutCubic),
        sub_curve_text().y(380, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(200, 1, easeInOutCubic),
        sub_curve_text().y(400, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(180, 1, easeInOutCubic),
        sub_curve_text().y(380, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(200, 1, easeInOutCubic),
        sub_curve_text().y(400, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(180, 1, easeInOutCubic),
        sub_curve_text().y(380, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(200, 1, easeInOutCubic),
        sub_curve_text().y(400, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(180, 1, easeInOutCubic),
        sub_curve_text().y(380, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(200, 1, easeInOutCubic),
        sub_curve_text().y(400, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(180, 1, easeInOutCubic),
        sub_curve_text().y(380, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(200, 1, easeInOutCubic),
        sub_curve_text().y(400, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(180, 1, easeInOutCubic),
        sub_curve_text().y(380, 1, easeInOutCubic)
    );

    yield* all(
        sub_curve().y(200, 1, easeInOutCubic),
        sub_curve_text().y(400, 1, easeInOutCubic)
    );
});
