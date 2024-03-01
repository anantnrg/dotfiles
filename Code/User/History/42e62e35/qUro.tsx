import { Txt } from "@motion-canvas/2d";

export const Copyright = (text: string) => (
    <Txt
        y={-500}
        x={-800}
        fill="#cdd6f4"
        antialiased={true}
        fontFamily={"JetBrains Mono"}
        fontWeight={900}
        fontSize={22}
    > © {text} 2024</Txt >,
);