import { Icon, Node, Rect, Txt } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";

interface TerminalWindowProps {
    rectRef: Reference<Rect>;
    fontSize: number;
    scale: number;
    children: Node[];
    command: string;
    output: string;
}

export const TerminalWindow = (props: TerminalWindowProps) => {
    const parts = props.command.split(' ');

    const getType = (part: string, index: number, parts: string[]): string => {
        const isArgument = /^-{1,2}\w+/;
        const isFile = /(?:^|\/)\w+(\.\w+)?$/;

        if (index === 0) {
            return 'command';
        } else if (isArgument.test(part)) {
            return 'argument';
        } else if (isFile.test(part)) {
            return 'file';
        } else {
            return 'subcommand';
        }
    };

    const getColor = (type: string): string => {
        switch (type) {
            case 'command':
                return '#89b4fa';
            case 'subcommand':
                return '#94e2d5';
            case 'argument':
                return '#fab387';
            case 'file':
                return '#b4befe';
            default:
                return 'cdd6f4';
        }
    };

    return (
        <Rect
            layout
            direction={"column"}
            fill={"1e1e2e"}
            radius={20}
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
                height={50}
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
                height={props.fontSize * 2.0}
                fill={"181825"}
                alignItems={"center"}
                justifyContent={"start"}
                paddingLeft={20}
                gap={30}
            >
                <Txt
                    fontFamily={"JetBrains Mono"}
                    fontSize={props.fontSize}
                    fontWeight={800}
                    fill={"cba6f7"}
                >
                    $
                </Txt>
                {parts.map((part, index) => {
                    const type = getType(part, index,)
                })}
            </Rect>
        </Rect>
    )
}