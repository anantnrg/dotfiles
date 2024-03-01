import { Icon, Rect, Txt } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";


interface ButtonProps {
    text: string;
    icon: string;
    fontFamily: string;
    fontSize: number;
    ref: Reference<Rect>;
    width: number;
    height: number;
    color: string;
}

export const Button = (props: ButtonProps) => (
    <Rect
        width={props.width}
        height={props.height}
        ref={props.ref}
        radius={10}
        fill={"1e1e2e"}
    >
        <Icon
            icon={props.icon}
            width={props.width / 0.4}
            height={props.width / 0.4}
            color={props.color}
            marginRight={20}
        />
        <Txt
    </Rect>

)