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

export const Keys = (props: KeysProps) => (
    <Rect
        layout
        gap={20}
        width={props.width}
        height={props.height}
    
)