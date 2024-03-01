import { Rect, Txt } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";

interface KeysProps {
    rectRef: Reference<Rect>;
    fontSize: number;
    scale: number;
    keys: string;
    width: number;
    height: number;
    x: number;
    y: number;
}

export const Keys = (props: KeysProps) => {
    const parts = props.keys.split(' + ');
    return (
        <Rect
            layout
            gap={20}
            minWidth={props.width}
            minHeight={props.height}
            fill="181825"
            radius={15}
            paddingLeft={60}
            paddingRight={60}
            paddingTop={30}
            paddingBottom={30}
            x={props.x}
            y={props.y}
            scale={props.scale}
        >
            {parts.map((part, index) => {
                if (index === 0) {
                    return (
                        <Txt
                            fontFamily={"JetBrains Mono"}
                            fontSize={props.fontSize}
                            fontWeight={900}
                            text={part}
                            fill={"f38ba8"}
                        />
                    )
                } else {
                    return (
                        <Rect
                            layout
                            gap={20}
                            height={"100%"}
                            fill="181825"
                            marginLeft={10}
                        >
                            <Txt
                                fontFamily={"JetBrains Mono"}
                                fontSize={props.fontSize}
                                fontWeight={900}
                                text={"+"}
                                fill={"f38ba8"}
                            />
                            <Txt
                                fontFamily={"JetBrains Mono"}
                                fontSize={props.fontSize}
                                fontWeight={900}
                                text={part}
                                fill={"f38ba8"}
                            />
                        </Rect>
                    )
                }
            })}
        </Rect>
    )
}