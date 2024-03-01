import { Icon, Node, Rect, Txt } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";

interface TerminalWindowProps {
    rectRef: Reference<Rect>;
    outputRef: Reference<Txt>;
    fontSize: number;
    scale: number;
    command: string;
    output: string;
}

export const TerminalWindow = (props: TerminalWindowProps) => {
    const parts = props.command.split(' ');

    const getType = (part: string, index: number, parts: string[]): string => {
        const isArgument = /^-{1,2}\w+/;
        const isFile = /(?:^|\/)\w+\.\w+$/;
        const isLikelyFile = /(?:^|\/)\w+\.\w+/;

        if (index === 0) {
            return 'command';
        } else if (isArgument.test(part)) {
            return 'argument';
        } else if (isFile.test(part)) {
            return 'file';
        } else if (isLikelyFile.test(part) && index !== parts.length - 1) {
            return 'subcommand';
        } else {
            return 'subcommand';
        }
    };

    const getColor = (type: string): string => {
        switch (type) {
            case 'command':
                return '#cba6f7';
            case 'subcommand':
                return '#89b4fa';
            case 'argument':
                return '#a6adc8';
            case 'file':
                return '#fab387';
            default:
                return '#cdd6f4';
        }
    };

    return (
        <Rect
            layout
            direction={"column"}
            fill={"1e1e2e"}
            radius={15}
            minWidth={700}
            maxWidth={1400}
            minHeight={450}
            maxHeight={700}
            ref={props.rectRef}
            scale={props.scale}
            clip
            shadowColor={"1e1e2e"}
            shadowBlur={60}
        >
            <Rect
                layout
                alignContent={"center"}
                justifyContent={"center"}
                height={60}
                width={"100%"}
                fill={"181825"}
                clip
            >
                <Rect
                    layout
                    direction={"row"}
                    width={200}
                    paddingLeft={20}
                    alignItems={"center"}
                    justifyContent={"start"}
                >
                    <Txt
                        text={"Terminal"}
                        fontFamily={"JetBrains Mono"}
                        fontSize={24}
                        fontWeight={600}
                        fill={"#cdd6f4"}
                    />
                </Rect>
            </Rect>
            <Rect
                layout
                width={"100%"}
                minHeight={props.fontSize * 2.0}
                alignItems={"center"}
                justifyContent={"start"}
                paddingLeft={20}
                gap={20}
                marginTop={20}
            >
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fontSize={props.fontSize}
                    fontWeight={800}
                    fill={"f9e2af"}
                >
                    $
                </Txt>
                {parts.map((part, index) => {
                    const type = getType(part, index, parts);
                    return (
                        <Txt
                            fontFamily={"JetBrains Mono"}
                            fontSize={props.fontSize}
                            fontWeight={700}
                            fill={getColor(type)}
                            text={part}
                        />
                    )
                })}
            </Rect>
            <Rect
                layout
                width={"100%"}
                minHeight={props.fontSize * 1.5}
                alignItems={"center"}
                justifyContent={"start"}
                paddingLeft={20}
                gap={20}
                clip
            >
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fontSize={props.fontSize}
                    fontWeight={600}
                    fill={"cdd6f4"}
                    ref={props.outputRef}
                    text={props.output}
                    opacity={0}
                />
            </Rect>
        </Rect>
    )
}