import { Rect, Txt } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";

interface KeysProps {
    rectRef: Reference<Rect>;
    fontSize: number;
    scale: number;
    keys: string;
    width: number;
    height: number;
}

export const Keys = (props: KeysProps) => {
    const parts = props.keys.split(' + ');
    return (
        <Rect
            layout
            gap={20}
            minWidth={props.width}
            height={props.height}
            fill="181825"
            radius={15}
            padding={40}
        >
            {parts.map((part, index) => {
                if (index === 0) {
                    return (
                        <Txt
                            fontFamily={"JetBrains Mono"}
                            fontSize={props.fontSize}
                            fontWeight={900}
                            text={part}
                            fill={"cdd6f4"}
                        />
                    )
                } else {
                    return (
                        <Rect
                            layout
                            gap={10}
                            height={"100%"}
                            fill="181825"
                            marginLeft={10}
                        >
                            <Txt
                                fontFamily={"JetBrains Mono"}
                                fontSize={props.fontSize}
                                fontWeight={900}
                                text={"+"}
                                fill={"cdd6f4"}
                            />
                            <Txt
                                fontFamily={"JetBrains Mono"}
                                fontSize={props.fontSize}
                                fontWeight={900}
                                text={part}
                                fill={"cdd6f4"}
                            />
                        </Rect>
                    )
                }
            })}
        </Rect>
    )
}