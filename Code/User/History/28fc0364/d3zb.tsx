import { makeScene2D, Circle, Txt, Img, Rect, Line } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce } from '@motion-canvas/core';
import packagesIcon from '../assets/package.svg';
import buildIcon from '../assets/wrench.svg';
import cargoIcon from '../assets/cargo.png';

export default makeScene2D(function* (view) {
    const heading = createRef<Txt>();
    const cargo_text_1 = createRef<Txt>();
    const build_tool_circle = createRef<Rect>();
    const pacman_circle = createRef<Rect>();

    yield view.add(
        <Txt
            y={-500}
            x={-800}
            fill="#cdd6f4"
            antialiased={true}
            fontFamily={"Orbitron"}
            fontWeight={900}
            fontSize={22}
        > © Technolog.in 2023</Txt >,
    );

    yield view.add(
        <Txt
            ref={heading}
            y={-400}
            fill="#cdd6f4"
            antialiased={true}
            fontFamily={"Orbitron"}
            fontWeight={900}
            fontSize={82}
            opacity={1}
            shadowColor={"rgba(205, 214, 244, 0.53)"}
            paddingRight={40}
            shadowOffset={6}
        > What's Cargo?</Txt >,
    );

    yield* slideTransition(Direction.Left);

    yield* waitFor(0.5);

    yield view.add(
        <Rect
            ref={build_tool_circle}
            alignItems={"center"}
            justifyContent={"center"}
            scale={0}
        >
            <Circle
                width={400}
                height={400}
                fill="#24273a"
            />
            <Rect
                ref={build_tool_circle}
                alignItems={"center"}
                layout
                direction={"column"}
            >
                <Img
                    src={buildIcon}
                    width={150}
                    height={150}
                />
                <Txt
                    fill="#fab387"
                    fontFamily={"Orbitron"}
                    fontSize={48}
                    fontWeight={700}
                    marginTop={50}
                >Build Tool</Txt>
            </Rect>
        </Rect>
    );

    yield view.add(
        <Rect
            ref={pacman_circle}
            alignItems={"center"}
            justifyContent={"center"}
            scale={0}
        >
            <Circle
                width={400}
                height={400}
                fill="#24273a"
            />
            <Rect
                alignItems={"center"}
                layout
                direction={"column"}
            >
                <Img
                    src={packagesIcon}
                    width={150}
                    height={150}
                />
                <Txt
                    fill="#a6e3a1"
                    fontFamily={"Orbitron"}
                    fontSize={48}
                    fontWeight={700}
                    marginTop={50}
                >Package</Txt>
                <Txt
                    fill="#a6e3a1"
                    fontFamily={"Orbitron"}
                    fontSize={48}
                    fontWeight={700}
                >Manager</Txt>
            </Rect>
        </Rect>
    );

    yield view.add(
        <Rect
            ref={carg}
            alignItems={"center"}
            justifyContent={"center"}
            scale={0}
        >
            <Circle
                width={400}
                height={400}
                fill="#24273a"
            />
            <Rect
                alignItems={"center"}
                layout
                direction={"column"}
            >
                <Img
                    src={packagesIcon}
                    width={150}
                    height={150}
                />
                <Txt
                    fill="#a6e3a1"
                    fontFamily={"Orbitron"}
                    fontSize={48}
                    fontWeight={700}
                    marginTop={50}
                >Package</Txt>
                <Txt
                    fill="#a6e3a1"
                    fontFamily={"Orbitron"}
                    fontSize={48}
                    fontWeight={700}
                >Manager</Txt>
            </Rect>
        </Rect>
    );

    yield* chain(
        tween(0.55, value => {
            build_tool_circle().scale(map(0, 1.1, easeOutSine(value)))
        }),
        waitFor(0.25),
        tween(0.55, value => {
            build_tool_circle().scale(map(1.1, 1, easeInSine(value)))
            build_tool_circle().position.x(map(0, -500, easeInSine(value)))
        }),
        waitFor(0.5)
    );
    yield* chain(
        tween(0.55, value => {
            pacman_circle().scale(map(0, 1.1, easeOutSine(value)))
        }),
        waitFor(0.25),
        tween(0.55, value => {
            pacman_circle().scale(map(1.1, 1, easeInSine(value)))
            pacman_circle().position.x(map(0, 500, easeInSine(value)))
        }),
        waitFor(0.5)
    );

    yield* chain(
        tween(0.75, value => {
            build_tool_circle().scale(map(1, 1.2, easeInSine(value)))
            pacman_circle().scale(map(1, 1.2, easeInSine(value)))
        }),
        tween(0.35, value => {
            build_tool_circle().scale(map(1.2, 1.1, easeInSine(value)))
            pacman_circle().scale(map(1.2, 1.1, easeInSine(value)))
        }),
        tween(0.35, value => {
            build_tool_circle().position.x(map(-500, -200, easeInSine(value)))
            pacman_circle().position.x(map(500, 200, easeInSine(value)))
        }),
        tween(0.75, value => {
            cargo_text_1().scale(map(0, 1.1, easeOutSine(value)))
        }),
        tween(0.35, value => {
            cargo_text_1().scale(map(1.1, 1, easeOutSine(value)))
        }),
    );
});
