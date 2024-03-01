import { makeScene2D, Circle, Txt, Img, Rect, Line } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, Vector2, easeOutBounce, easeOutBack, waitUntil } from '@motion-canvas/core';

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
            fontFamily={"JetBrains Mono"}
            fontWeight={900}
            fontSize={22}
        > © Technolog.in 2023</Txt >,
    );

    yield view.add(
        <Rect
            layout
            alignItems={"center"}
            justifyContent={"start"}
            y={-330}
            width={1000}
            ref={row1}
            scale={0}
            x={-400}
        >
            <Txt
                fill={"#cdd6f4"}
                fontFamily={"JetBrains Mono"}
                fontSize={56}
                fontWeight={900}
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
                            fontFamily={"JetBrains Mono"}
                            fontSize={40}
                            fontWeight={900}
                        >Signed</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                        >i8</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                        >i8</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                        >i16</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                        >i32</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                        >i64</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                        >i128</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#89b4fa"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
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
                                fontFamily={"JetBrains Mono"}
                                fontSize={40}
                                fontWeight={900}
                            >Unsigned</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={23}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={900}
                            >u8</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={23}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={900}
                            >u8</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={23}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={900}
                            >u16</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={23}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={900}
                            >u32</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={23}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={900}
                            >u64</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={23}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={900}
                            >u128</Txt>
                        </Rect>
                        <Rect
                            layout
                            alignItems={"start"}
                            justifyContent={"center"}
                            lineWidth={6}
                            stroke={"#cdd6f4"}
                            padding={23}
                            width={150}
                        >
                            <Txt
                                fill={"#f9e2af"}
                                fontFamily={"JetBrains Mono"}
                                fontSize={36}
                                fontWeight={900}
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
            y={-130}
            width={1000}
            x={-400}
            ref={row2}
            scale={0}
        >
            <Txt
                fill={"#cdd6f4"}
                fontFamily={"JetBrains Mono"}
                fontSize={56}
                fontWeight={900}
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
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#cba6f7"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                        >f32</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#cba6f7"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
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
            y={50}
            width={1000}
            x={-400}
            ref={row3}
            scale={0}
        >
            <Txt
                fill={"#cdd6f4"}
                fontFamily={"JetBrains Mono"}
                fontSize={56}
                fontWeight={900}
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
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#fab387"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                        >&str</Txt>
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={200}
                    >
                        <Txt
                            fill={"#fab387"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
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
            y={250}
            width={1000}
            x={-400}
            ref={row4}
            scale={0}
        >
            <Txt
                fill={"#cdd6f4"}
                fontFamily={"JetBrains Mono"}
                fontSize={56}
                fontWeight={900}
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
                        padding={23}
                        width={150}
                    >
                        <Txt
                            fill={"#a6e3a1"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
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
            y={400}
            width={1000}
            x={-400}
            ref={row5}
            scale={0}
        >
            <Txt
                fill={"#cdd6f4"}
                fontFamily={"JetBrains Mono"}
                fontSize={56}
                fontWeight={900}
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
                        padding={23}
                        width={220}
                    >
                        <Txt
                            fill={"#94e2d5"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                            text={"Vec<i32>"}
                        />
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={220}
                    >
                        <Txt
                            fill={"#94e2d5"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                            text={"Vec<u32>"}
                        />
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={320}
                    >
                        <Txt
                            fill={"#94e2d5"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                            text={"Vec<String>"}
                        />
                    </Rect>
                    <Rect
                        layout
                        alignItems={"start"}
                        justifyContent={"center"}
                        lineWidth={6}
                        stroke={"#cdd6f4"}
                        padding={23}
                        width={250}
                    >
                        <Txt
                            fill={"#94e2d5"}
                            fontFamily={"JetBrains Mono"}
                            fontSize={36}
                            fontWeight={900}
                            text={"Vec<&str>"}
                        />
                    </Rect>
                </Rect>
            </Rect>
        </Rect>
    );

    yield* waitUntil("list-types");

    yield* chain(
        waitUntil("integers"),
        tween(0.75, value => {
            row1().scale(map(0, 0.8, easeOutBack(value)))
        }),
        waitUntil("floats"),
        tween(0.75, value => {
            row2().scale(map(0, 0.8, easeOutBack(value)))
        }),
        waitUntil("strings"),
        tween(0.75, value => {
            row3().scale(map(0, 0.8, easeOutBack(value)))
        }),
        waitUntil("bools"),
        tween(0.75, value => {
            row4().scale(map(0, 0.8, easeOutBack(value)))
        }),
        waitUntil("vectors"),
        tween(0.75, value => {
            row5().scale(map(0, 0.8, easeOutBack(value)))
        }),
        waitUntil("vectors-end"),
    );
    yield* all(
        tween(0.75, value => {
            row1().scale(map(1, 0, easeOutBack(value)))
        }),
        tween(0.75, value => {
            row2().scale(map(1, 0, easeOutBack(value)))
        }),
        tween(0.75, value => {
            row3().scale(map(1, 0, easeOutBack(value)))
        }),
        tween(0.75, value => {
            row4().scale(map(1, 0, easeOutBack(value)))
        }),
        tween(0.75, value => {
            row5().scale(map(1, 0, easeOutBack(value)))
        }),
    )
});
