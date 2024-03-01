import { makeScene2D, Circle, Txt, Img, Rect, Line } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce } from '@motion-canvas/core';
import packagesIcon from '../assets/package.svg';
import buildIcon from '../assets/wrench.svg';
import cargoIcon from '../assets/cargo.png';

export default makeScene2D(function* (view) {
    const heading = createRef<Txt>();

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
        >Heading!!!</Txt >,
    );

    yield* slideTransition(Direction.Left);

    yield* waitFor(0.5);
});
