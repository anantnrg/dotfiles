import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon } from '@motion-canvas/2d';
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
            fontFamily={"JetBrains Mono"}
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
            fontFamily={"JetBrains Mono"}
            fontWeight={900}
            fontSize={82}
            opacity={1}

        > What's Cargo?</Txt >,
    );

    yield* waitFor(1);

    yield view.add(
        <Rect
            ref={build_tool_circle}
            alignItems={"center"}
            justifyContent={"center"}
            scale={0}
            y={-80}
        >
            <Circle
                width={400}
                height={400}
                fill="#1e1e2e"
                lineWidth={2}
                stroke={"#45475a"}
            />
            <Rect
                ref={build_tool_circle}
                alignItems={"center"}
                layout
                direction={"column"}
            >
                <Icon
                    icon={"heroicons:wrench-screwdriver-20-solid"}
                    color={"#cdd6f4"}
                    width={32}
                    height={32}
                    marginRight={15}
                />
                <Txt
                    fill="#fab387"
                    fontFamily={"JetBrains Mono"}
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
            y={-80}
        >
            <Circle
                width={400}
                height={400}
                fill="#1e1e2e"
                lineWidth={2}
                stroke={"#45475a"}
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
                    fontFamily={"JetBrains Mono"}
                    fontSize={48}
                    fontWeight={700}
                    marginTop={50}
                >Package</Txt>
                <Txt
                    fill="#a6e3a1"
                    fontFamily={"JetBrains Mono"}
                    fontSize={48}
                    fontWeight={700}
                >Manager</Txt>
            </Rect>
        </Rect>
    );

    yield view.add(
        <Rect
            ref={cargo_text_1}
            alignItems={"center"}
            justifyContent={"center"}
            scale={0}
            y={300}
        >
            <Circle
                width={400}
                height={400}
                fill="#1e1e2e"
                lineWidth={2}
                stroke={"#45475a"}
            />
            <Rect
                alignItems={"center"}
                layout
                direction={"column"}
            >
                <Img
                    src={cargoIcon}
                    width={220}
                    height={220}
                />
                <Txt
                    fill="#cdd6f4"
                    fontFamily={"JetBrains Mono"}
                    fontSize={64}
                    fontWeight={700}
                    marginTop={10}
                >Cargo</Txt>
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
        tween(0.55, value => {
            build_tool_circle().scale(map(1, 1.2, easeInSine(value)))
            pacman_circle().scale(map(1, 1.2, easeInSine(value)))
        }),
        tween(0.35, value => {
            build_tool_circle().scale(map(1.2, 1.1, easeInSine(value)))
            pacman_circle().scale(map(1.2, 1.1, easeInSine(value)))
        }),
        tween(0.35, value => {
            build_tool_circle().position.x(map(-500, -300, easeInSine(value)))
            pacman_circle().position.x(map(500, 300, easeInSine(value)))
        }),
        tween(0.75, value => {
            cargo_text_1().scale(map(0, 1.1, easeOutSine(value)))
        }),
        tween(0.35, value => {
            cargo_text_1().scale(map(1.1, 1, easeOutSine(value)))
        }),
    );
});
