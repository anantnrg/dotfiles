import { makeScene2D, Circle, Txt, Img, Rect } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeInBack, easeInElastic, easeInCirc, easeOutSine, run, fadeTransition } from '@motion-canvas/core';
import { CodeBlock } from '@motion-canvas/2d/lib/components/CodeBlock';
import rustLogo from '../assets/rust.svg';

export default makeScene2D(function* (view) {
    const touch_command_rect = createRef<Rect>();
    const compile_command_rect = createRef<Rect>();
    const run_command_rect = createRef<Rect>();
    const output_rect = createRef<Txt>();
    const code_block = createRef<Rect>();

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
        <Rect
            layout
            ref={touch_command_rect}
            scale={0}
            fill={"1e1e2e"}
            padding={30}
            alignItems={"center"}
            justifyContent={"center"}
            radius={30}
        >
            <Txt
                fill="#f9e2af"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={600}
                fontSize={48}
                marginRight={20}
            >$</Txt >
            <Txt
                fill="#89b4fa"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={600}
                fontSize={48}
                opacity={1}
                shadowOffset={12}
                marginRight={30}
            >touch</Txt >
            <Txt
                fill="#a6e3a1"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={600}
                fontSize={48}
                opacity={1}
                shadowOffset={12}
            >hello_world.rs</Txt >
        </Rect>
    );

    yield view.add(
        <Rect layout ref={code_block} direction={"column"} scale={0}>
            <Rect
                layout
                direction={"row"}
                fill="#1e1e2e"
                width={260}
                marginBottom={42}
                padding={10}
                radius={8}
                alignItems={"center"}
                justifyContent={"center"}
                lineWidth={2}
                stroke={"#45475a"}
            >
                <Img
                    src={rustLogo}
                    width={36}
                    height={36}
                    marginRight={15} />
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fontSize={22}
                    fill="#cdd6f4"

                >hello_world.rs</Txt>
            </Rect>
            <Rect
                layout
                alignItems={"center"}
                justifyContent={"center"}
                fill={"1e1e2e"}
                padding={30}
                radius={20}
            >
                <CodeBlock
                    language='rust'
                    code={`
                fn main() {
                    println!("Hello World!");
                }
                `}
                    fontFamily={"JetBrains Mono"}
                    fontSize={36}
                />
            </Rect>

        </Rect>
    );

    yield view.add(
        <Rect
            layout
            ref={compile_command_rect}
            scale={0}
            fill={"1e1e2e"}
            padding={30}
            alignItems={"center"}
            justifyContent={"center"}
            radius={30}
        >
            <Txt
                fill="#f9e2af"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={600}
                fontSize={48}
                marginRight={20}
            >$</Txt >
            <Txt
                fill="#89b4fa"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={600}
                fontSize={48}
                opacity={1}
                shadowOffset={12}
                marginRight={30}
            >rustc</Txt >
            <Txt
                fill="#a6e3a1"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={600}
                fontSize={48}
                opacity={1}
                shadowOffset={12}
            >hello_world.rs</Txt >
        </Rect>
    );

    yield view.add(
        <Rect
            layout
            direction={"column"}
            ref={run_command_rect}
            scale={0}
            fill={"1e1e2e"}
            padding={30}
            alignItems={"center"}
            justifyContent={"center"}
            radius={30}
        >
            <Rect layout>
                <Txt
                    fill="#f9e2af"
                    antialiased={true}
                    fontFamily={"JetBrains Mono"}
                    fontWeight={600}
                    fontSize={48}
                    marginRight={30}
                >$</Txt >
                <Txt
                    fill="#89b4fa"
                    antialiased={true}
                    fontFamily={"JetBrains Mono"}
                    fontWeight={600}
                    fontSize={48}
                    opacity={1}
                    shadowOffset={12}
                >./hello_world</Txt >
            </Rect>
            <Rect
                layout
                ref={output_rect}
                opacity={0}
                marginTop={30}
                marginRight={150}
            >
                <Txt
                    fill="#cdd6f4"
                    antialiased={true}
                    fontFamily={"JetBrains Mono"}
                    fontWeight={600}
                    fontSize={42}
                >Hello World!</Txt >
            </Rect>
        </Rect>
    );

    yield* waitFor(1);

    yield* chain(
        tween(0.55, value => {
            touch_command_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitFor(1.5),
        tween(0.55, value => {
            touch_command_rect().scale(map(1, 0, easeInSine(value)))
        }),
        waitFor(1),
        tween(0.55, value => {
            code_block().scale(map(0, 1, easeOutSine(value)))
        }),
        waitFor(1.5),
        tween(0.55, value => {
            code_block().scale(map(1, 0, easeOutSine(value)))
        }),
        waitFor(1),
        tween(0.55, value => {
            compile_command_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitFor(1.5),
        tween(0.55, value => {
            compile_command_rect().scale(map(1, 0, easeOutSine(value)))
        }),
        waitFor(1),
        tween(0.55, value => {
            run_command_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitFor(1),
        tween(0.75, value => {
            output_rect().opacity(map(0, 1, easeInSine(value)))
        }),
        waitFor(1),
    );

});
