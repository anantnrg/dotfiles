import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon, Latex, CubicBezier, QuadBezier } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, createSignal, Vector2, waitUntil, easeOutBack, easeInOutCubic } from '@motion-canvas/core';
import { CodeBlock, insert, lines, range, remove } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';
import { Copyright } from '../helpers/copyright';

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
            y={-350}
            fontWeight={900}
            ref={thx}
        >Thanks for watching!</Txt>
    );

    yield view.add(
        <Circle
            lineWidth={8}
            stroke={"f38ba8"}
            width={298}
            height={298}
            shadowColor={"f38ba8"}
            shadowBlur={60}
            ref={subscribe}
        />
    );

    yield view.add(
        <Rect
            lineWidth={8}
            stroke={"cba6f7"}
            width={608}
            height={344}
            radius={20}
            shadowColor={"cba6f7"}
            shadowBlur={60}
            x={-600}
            ref={video}
        />
    );


    yield view.add(
        <Rect
            lineWidth={8}
            stroke={"f9e2af"}
            width={608}
            height={344}
            radius={20}
            shadowColor={"f9e2af"}
            shadowBlur={60}
            x={600}
            ref={playlist}
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
            ref={sub_curve_text}
        >Subscribe!</Txt>
    )
    yield* waitUntil("start-outro");

    yield* all(
        tween(0.75, value => { ferrisLogo().scale(map(0.15, 1, easeOutSine(value))) }),
        tween(0.75, value => { ferrisLogo().x(map(850, 0, easeOutSine(value))) }),
        tween(0.75, value => { ferrisLogo().y(map(450, 0, easeOutSine(value))) }),
    );

    yield* waitUntil("finish-outro")

    yield* chain(
        tween(1, v => {
            ferrisLogo().opacity(map(1, 0, easeOutSine(v)))
        }),
        waitFor(0.5)
    );

    thx().text("", 0.)

});
