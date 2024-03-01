import { Rect } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";


interface ButtonProps {
    text: string;
    icon: string;
    fontFamily: string;
    fontSize: number;
    ref: Reference<Rect>;
}

export const Button = (props: ButtonProps) => (
    <Rect
    
)