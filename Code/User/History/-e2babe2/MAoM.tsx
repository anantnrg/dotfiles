import { makeScene2D, Circle, Txt, Img, Rect, Line } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, Vector2, easeOutBounce, easeOutBack } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const row1 = createRef<Rect>();
    const row2 = createRef<Rect>();
    const row3 = createRef<Rect>();
    const row4 = createRef<Rect>();
    const row5 = createRef<Rect>();

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
        >Types</Txt >,
    );

    yield view.add(
        <Rect
            layout
            alignItems={"center"}
            justifyContent={"start"}
            y={-150}
            width={1000}
            ref={row1}
            scale={0}
            x={-400}
        >
            <Txt
                fill={"#cdd6f4"}
                fontFamily={"Orbitron"}
                fontSize={56}
                fontWeight={600}
                minWidth={380}
            >Integers</Txt>
            <Rect
                layout
                direction={"column"}
                alignItems={"start"}
                justifyContent={"center"}

            >
                <Rect
                    layout
                    alignItems={"start"}
                    justifyContent={"center"}
                    lineWidth={6}
                    stroke={"#cdd6f4"}
                >
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={20}
                        width={300}
                    >
                        <Txt
                            fill={"#cdd6f4"}
                            fontFamily={"Orbitron"}
                            fontSize={46}
                            fontWeight={600}
                        >Signed</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={28}
                            fontWeight={600}
                        >i8</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >i8</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >i16</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >i32</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >i64</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >i128</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >isize</Txt>
                    </Rect>
                </Rect>
                <Rect
                    layout
                    direction={"column"}
                    alignItems={"start"}
                    justifyContent={"center"}

                >
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                    >
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={20}
                            width={300}
                        >
                            <Txt
                                fill={"#cdd6f4"}
                                fontFamily={"Orbitron"}
                                fontSize={46}
                                fontWeight={600}
                            >Unsigned</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={25}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={600}
                            >u8</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={25}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={600}
                            >u8</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={25}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={600}
                            >u16</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={25}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={600}
                            >u32</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={25}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={600}
                            >u64</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={25}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={600}
                            >u128</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={25}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={600}
                            >usize</Txt>
                        </Rect>
                    </Rect>
                </Rect>
            </Rect>
        </Rect>
    );

    yield view.add(
        <Rect
            layout
            alignItems={"center"}
            justifyContent={"start"}
            gap={120}
            y={-150}
            width={2700}
            ref={row2}
            scale={0}
        >
            <Txt
                fill={"#cdd6f4"}
                fontFamily={"Orbitron"}
                fontSize={82}
                fontWeight={600}
                minWidth={380}
            >Floats</Txt>
            <Rect
                layout
                direction={"column"}
                alignItems={"start"}
                justifyContent={"center"}

            >
                <Rect
                    layout
                    alignItems={"start"}
                    justifyContent={"center"}
                    lineWidth={6}
                    stroke={"#cdd6f4"}
                >
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#cba6f7"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >f32</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#cba6f7"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >f64</Txt>
                    </Rect>
                </Rect>
            </Rect>
        </Rect>
    );

    yield view.add(
        <Rect
            layout
            alignItems={"center"}
            justifyContent={"start"}
            gap={120}
            y={100}
            width={2700}
            ref={row3}
            scale={0}
        >
            <Txt
                fill={"#cdd6f4"}
                fontFamily={"Orbitron"}
                fontSize={82}
                fontWeight={600}
                minWidth={380}
            >Strings</Txt>
            <Rect
                layout
                direction={"column"}
                alignItems={"start"}
                justifyContent={"center"}

            >
                <Rect
                    layout
                    alignItems={"start"}
                    justifyContent={"center"}
                    lineWidth={6}
                    stroke={"#cdd6f4"}
                >
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#fab387"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >&str</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={350}
                    >
                        <Txt
                            fill={"#fab387"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >String</Txt>
                    </Rect>
                </Rect>
            </Rect>
        </Rect>
    );

    yield view.add(
        <Rect
            layout
            alignItems={"center"}
            justifyContent={"start"}
            gap={120}
            y={350}
            width={2700}
            ref={row4}
            scale={0}
        >
            <Txt
                fill={"#cdd6f4"}
                fontFamily={"Orbitron"}
                fontSize={82}
                fontWeight={600}
                minWidth={380}
                maxWidth={380}
            >Booleans</Txt>
            <Rect
                layout
                direction={"column"}
                alignItems={"start"}
                justifyContent={"center"}

            >
                <Rect
                    layout
                    alignItems={"start"}
                    justifyContent={"center"}
                    lineWidth={6}
                    stroke={"#cdd6f4"}
                >
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={150}
                    >
                        <Txt
                            fill={"#a6e3a1"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                        >bool</Txt>
                    </Rect>
                </Rect>
            </Rect>
        </Rect>
    );

    yield view.add(
        <Rect
            layout
            alignItems={"center"}
            justifyContent={"start"}
            gap={120}
            y={600}
            width={2700}
            ref={row5}
            scale={0}
        >
            <Txt
                fill={"#cdd6f4"}
                fontFamily={"Orbitron"}
                fontSize={82}
                fontWeight={600}
                minWidth={380}
            >Vectors</Txt>
            <Rect
                layout
                direction={"column"}
                alignItems={"start"}
                justifyContent={"center"}

            >
                <Rect
                    layout
                    alignItems={"start"}
                    justifyContent={"center"}
                    lineWidth={6}
                    stroke={"#cdd6f4"}
                >
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={400}
                    >
                        <Txt
                            fill={"#94e2d5"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                            text={"Vec<i32>"}
                        />
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={400}
                    >
                        <Txt
                            fill={"#94e2d5"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                            text={"Vec<u32>"}
                        />
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={500}
                    >
                        <Txt
                            fill={"#94e2d5"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                            text={"Vec<String>"}
                        />
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={25}
                        width={450}
                    >
                        <Txt
                            fill={"#94e2d5"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={600}
                            text={"Vec<&str>"}
                        />
                    </Rect>
                </Rect>
            </Rect>
        </Rect>
    );

    yield* slideTransition(Direction.Left);

    yield* waitFor(1);

    yield* chain(
        tween(0.75, value => {
            row1().scale(map(0, 1, easeOutBack(value)))
        }),
        waitFor(1),
        tween(0.75, value => {
            row2().scale(map(0, 1, easeOutBack(value)))
        }),
        waitFor(1),
        tween(0.75, value => {
            row3().scale(map(0, 1, easeOutBack(value)))
        }),
        waitFor(1),
        tween(0.75, value => {
            row4().scale(map(0, 1, easeOutBack(value)))
        }),
        waitFor(1),
        tween(0.75, value => {
            row5().scale(map(0, 1, easeOutBack(value)))
        }),
        waitFor(1),
    )
});
