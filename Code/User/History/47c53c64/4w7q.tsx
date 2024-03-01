import { makeScene2D, Circle, Txt, Img, Rect, Line, Icon } from '@motion-canvas/2d';
import { all, tween, createRef, map, easeInSine, chain, easeInOutSine, waitFor, slideTransition, Direction, easeOutSine, easeInBounce, Vector2, createSignal, easeOutBounce, easeOutBack, waitUntil } from '@motion-canvas/core';
import { CodeBlock } from '@motion-canvas/2d/lib/components/CodeBlock';
import ferrisImg from '../assets/ferris.svg';

export default makeScene2D(function* (view) {
    const heading = createRef<Txt>();
    const cargo_new_rect = createRef<Rect>();
    const cargo_run_rect = createRef<Rect>();
    const cd_rect = createRef<Rect>();
    const tooltipRef = createRef<Rect>();
    const tooltipTextRef = createRef<Txt>();
    const output_rect = createRef<Txt>();
    const tooltipPosX = createSignal(-210);
    const code_block = createRef<Rect>();
    const dir_struct_ref = createRef<Rect>();
    const dir_highlight_ref = createRef<Rect>();
    const dir_highlight_tooltip_ref = createRef<Rect>();
    const ferrisLogo = createRef<Img>();

    yield view.add(
        <Txt
            y={-500}
            x={-800}
            fill="#cdd6f4"
            antialiased={true}
            fontFamily={"JetBrains Mono"}
            fontWeight={900}
            fontSize={22}
        > © Technologs 2023</Txt >,
    );

    yield view.add(
        <Img
            ref={ferrisLogo}
            src={ferrisImg}
            width={900}
            scale={0.15}
            x={850}
            y={450}
        ></Img>
    )

    yield view.add(
        <Rect
            layout
            ref={cargo_new_rect}
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
            >cargo</Txt >
            <Txt
                fill="#a6e3a1"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={600}
                fontSize={48}
                opacity={1}
                shadowOffset={12}
                marginRight={30}
            >new</Txt >
            <Txt
                fill="#fab387"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={600}
                fontSize={48}
                opacity={1}
                shadowOffset={12}
            >hello_world</Txt >
        </Rect>
    );

    yield view.add(
        <Rect
            radius={10}
            layout
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            height={300}
            width={400}
            x={tooltipPosX}
            y={180}
            ref={tooltipRef}
            scale={0}
        >
            <Line
                lineWidth={10}
                stroke="#cdd6f4"
                startArrow
                points={[
                    Vector2.zero,
                    Vector2.up.scale(100)
                ]}
                arrowSize={20}
                marginBottom={20}
                marginTop={40}
            />
            <Txt
                text={"Invoke Cargo\n⠀⠀⠀⠀"}
                fontFamily={"JetBrains Mono"}
                fontSize={48}
                fill={"cdd6f4"}
                minWidth={500}
                textWrap={true}
                textAlign={"center"}
                ref={tooltipTextRef}
            />
        </Rect>
    );

    yield view.add(
        <Rect
            layout
            ref={cd_rect}
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
                marginRight={30}
            >cd</Txt >
            <Txt
                fill="#a6e3a1"
                antialiased={true}
                fontFamily={"JetBrains Mono"}
                fontWeight={600}
                fontSize={48}
                opacity={1}
                shadowOffset={12}
                marginRight={30}
            >hello_world</Txt >
        </Rect>
    );

    yield view.add(
        <Rect
            layout
            direction={"column"}
            ref={cargo_run_rect}
            scale={0}
            fill={"1e1e2e"}
            padding={30}
            paddingLeft={50}
            alignItems={"start"}
            justifyContent={"center"}
            radius={30}
            width={600}
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
                    marginRight={30}
                >cargo</Txt >
                <Txt
                    fill="#a6e3a1"
                    antialiased={true}
                    fontFamily={"JetBrains Mono"}
                    fontWeight={600}
                    fontSize={48}
                    opacity={1}
                    shadowOffset={12}
                >run</Txt >
            </Rect>
            <Rect
                layout
                ref={output_rect}
                opacity={0}
                marginTop={30}
                marginRight={0}
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

    yield view.add(
        <Rect layout ref={code_block} direction={"column"} scale={0}>
            <Rect
                layout
                direction={"row"}
                fill="#1e1e2e"
                width={180}
                marginBottom={12}
                padding={10}
                radius={8}
                marginLeft={5}
                alignItems={"center"}
                justifyContent={"center"}
                lineWidth={2}
                stroke={"#45475a"}
            >
                <Icon
                    icon={"devicon-plain:rust"}
                    color={"#cdd6f4"}
                    width={32}
                    height={32}
                    marginRight={15}
                />
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fontSize={22}
                    fill="#cdd6f4"

                >main.rs</Txt>
            </Rect>
            <Rect
                layout
                alignItems={"center"}
                justifyContent={"center"}
                fill={"1e1e2e"}
                padding={30}
                paddingBottom={0}
                radius={20}
                y={15}
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
            direction={"column"}
            gap={20}
            ref={dir_struct_ref}
            padding={60}
            paddingRight={90}
            fill={"1e1e2e"}
            radius={20}
            opacity={0}
            x={200}
        >
            <Rect
                layout
                gap={20}
                alignItems={"center"}

            >
                <Icon
                    icon={"material-symbols:folder"}
                    color={"#89b4fa"}
                    width={72}
                    height={72}
                />
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fill={"89b4fa"}
                    fontSize={56}
                    fontWeight={800}
                    marginTop={4}
                >
                    hello_world
                </Txt>
            </Rect>
            <Rect
                layout
                gap={20}
                alignItems={"center"}
                marginLeft={80}
                marginTop={20}
            >
                <Icon
                    icon={"material-symbols:folder"}
                    color={"#cdd6f4"}
                    width={64}
                    height={64}
                />
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fill={"cdd6f4"}
                    fontSize={48}
                    fontWeight={600}
                    marginTop={4}
                >
                    src
                </Txt>
            </Rect>
            <Rect
                layout
                gap={20}
                alignItems={"center"}

                marginLeft={160}
                marginTop={20}
            >
                <Icon
                    icon={"fa6-brands:rust"}
                    color={"#fab387"}
                    width={64}
                    height={64}
                />
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fill={"fab387"}
                    fontSize={48}
                    fontWeight={600}
                    marginTop={4}
                >
                    main.rs
                </Txt>
            </Rect>
            <Rect
                layout
                gap={20}
                alignItems={"center"}

                marginLeft={80}
                marginTop={20}
            >
                <Icon
                    icon={"ic:baseline-settings"}
                    color={"#a6e3a1"}
                    width={64}
                    height={64}
                />
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fill={"a6e3a1"}
                    fontSize={48}
                    fontWeight={600}
                    marginTop={4}
                >
                    Cargo.toml
                </Txt>
            </Rect>
            <Rect
                layout
                gap={20}
                alignItems={"center"}

                marginLeft={80}
                marginTop={20}
            >
                <Icon
                    icon={"material-symbols:lock"}
                    color={"#a6adc8"}
                    width={64}
                    height={64}
                />
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fill={"a6adc8"}
                    fontSize={48}
                    fontWeight={600}
                    marginTop={4}
                >
                    Cargo.lock
                </Txt>
            </Rect>
        </Rect>
    );

    yield view.add(
        <Rect
            width={430}
            height={200}
            lineWidth={10}
            stroke={"#cba6f7"}
            radius={20}
            ref={dir_highlight_ref}
            x={25}
            y={160}
            opacity={0}
        // scale={0}
        />
    );

    yield view.add(
        <Rect
            radius={10}
            layout
            alignItems={"center"}
            justifyContent={"center"}
            height={100}
            width={500}
            x={800}
            ref={dir_highlight_tooltip_ref}
            opacity={0}
        >
            <Line
                lineWidth={10}
                stroke="#cba6f7"
                startArrow
                points={[
                    Vector2.zero,
                    Vector2.right.scale(100)
                ]}
                arrowSize={20}
                marginRight={40}
            />
            <Txt
                text={"Entry point"}
                fontFamily={"JetBrains Mono"}
                fontSize={48}
                fill={"cba6f7"}
                fontWeight={900}
                textAlign={"center"}
            />
        </Rect>
    );

    yield* waitUntil("how-to-use-cargo");

    yield* chain(
        tween(0.55, value => {
            cargo_new_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitFor(0.5),
        waitUntil("prompt-cargo"),
        tween(0.55, value => {
            tooltipRef().scale(map(0, 1, easeOutSine(value)))
        }),
        waitFor(1),
    );

    yield* waitUntil("indicated-by");

    yield* chain(
        tween(0.55, value => {
            tooltipRef().position.x(map(-210, -60, easeOutSine(value)))
        }),
    );
    yield tooltipTextRef().text("Tell it to create a new project");

    yield* waitUntil("project-name");

    yield* chain(
        waitFor(1.5),
        tween(0.55, value => {
            tooltipRef().position.x(map(-60, 170, easeOutSine(value)))
        }),
    );
    tooltipPosX(415);
    yield tooltipTextRef().text("The name of the project");

    yield* waitUntil("cargo-new-end");

    yield* chain(
        waitFor(1.5),
        tween(0.55, value => {
            tooltipRef().scale(map(1, 0, easeInSine(value)))
            cargo_new_rect().scale(map(1, 0, easeInSine(value)))
        }),
        waitFor(1),
    );

    yield* waitUntil("cd-project");

    yield* chain(
        tween(0.55, value => {
            cd_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("cd-project-end"),
        tween(0.55, value => {
            cd_rect().scale(map(1, 0, easeOutSine(value)))
        }),
        waitFor(1),
    );

    yield* waitUntil("cargo-run");

    yield* chain(
        tween(0.55, value => {
            cargo_run_rect().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("show-result"),
        tween(0.75, value => {
            output_rect().opacity(map(0, 1, easeInSine(value)))
        }),
        waitUntil("cargo-end"),
        all(
            tween(0.55, value => {
                cargo_run_rect().scale(map(1, 0, easeOutSine(value)))
            }),
            tween(0.55, value => {
                output_rect().scale(map(1, 0, easeOutSine(value)))
            })
        ),
    );

    yield* waitUntil("autogen-code");

    yield* chain(
        tween(0.55, value => {
            code_block().scale(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("autogen-code-end"),
        tween(0.55, value => {
            code_block().scale(map(1, 0, easeInSine(value)))
        }),
    );

    yield* waitUntil("default-dir-structure");

    yield* all(
        tween(0.55, value => {
            dir_struct_ref().opacity(map(0, 1, easeOutSine(value)))
        }),
        tween(0.75, value => {
            dir_struct_ref().x(map(200, 0, easeOutBack(value)))
        }),
    );

    yield* chain(
        waitUntil("cargo-toml"),
        tween(0.55, value => {
            dir_highlight_ref().opacity(map(0, 1, easeOutSine(value)))
        }),
        waitUntil("cargo-toml-end"),
        all(
            tween(0.55, value => {
                dir_highlight_ref().x(map(1, 0, easeOutSine(value)))
            }),
        )
    );

    yield dir_highlight_ref().x(55);
    yield dir_highlight_ref().y(3);
    yield dir_highlight_ref().opacity(1);
    yield dir_highlight_ref().scale(0);
    yield dir_highlight_ref().width(350);
    yield dir_highlight_ref().height(100);

    yield* waitUntil("start-entry-point");

    yield* chain(
        tween(0.55, value => {
            dir_highlight_ref().scale(map(0, 1, easeOutSine(value)))
        }),
        all(
            tween(0.55, value => {
                dir_highlight_tooltip_ref().opacity(map(0, 1, easeOutSine(value)))
            }),
            tween(0.75, value => {
                dir_highlight_tooltip_ref().x(map(800, 600, easeOutBack(value)))
            }),
        )
    );

    yield* waitUntil("end-entry-point");

    yield* all(
        tween(0.55, value => {
            dir_highlight_ref().scale(map(1, 0, easeOutSine(value)))
        }),
        tween(0.55, value => {
            dir_highlight_tooltip_ref().opacity(map(1, 0, easeOutSine(value)))
        }),
        tween(0.75, value => {
            dir_highlight_tooltip_ref().x(map(600, 800, easeOutBack(value)))
        }),
        tween(0.75, value => {
            dir_struct_ref().scale(map(1, 0, easeInSine(value)))
        }),
    )

});
