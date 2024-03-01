import { Txt } from "@motion-canvas/2d";

interface CopyrightProps {
    text: string;
}

export const Copyright = (props: CopyrightProps) => (
    <Txt
        y={-500}
        x={-800}
        fill="#cdd6f4"
        antialiased={true}
        fontFamily={"JetBrains Mono"}
        fontWeight={900}
        fontSize={22}
    > © {props.text}  2024</Txt >,
);