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
    iconSizeOffset: number;
    y: number;
    x: number;
    iconEnable: boolean;
}

export const Button = (props: ButtonProps) => (
    <Rect
        minWidth={props.width}
        padding={30}
        height={props.height}
        ref={props.ref}
        radius={15}
        fill={"1e1e2e"}
        layout
        alignItems={"center"}
        justifyContent={"center"}
        x={props.x}
        y={props.y}
        clip
    >
        {props.iconEnable ? (
            <Icon
                icon={props.icon}
                width={props.fontSize + props.iconSizeOffset}
                height={props.fontSize + props.iconSizeOffset}
                color={props.color}
                marginRight={20}
            />
        ) : ""}
        <Txt
            text={props.text}
            fontFamily={props.fontFamily}
            fontSize={props.fontSize}
            fontWeight={900}
            fill={props.color}
        />
    </Rect>

)

export const Button = (props: ButtonProps) => (
    <Rect
        minWidth={props.width}
        padding={30}
        height={props.height}
        ref={props.ref}
        radius={15}
        fill={"1e1e2e"}
        layout
        alignItems={"center"}
        justifyContent={"center"}
        x={props.x}
        y={props.y}
        clip
    >
        {props.iconEnable ? (
            <Icon
                icon={props.icon}
                width={props.fontSize + props.iconSizeOffset}
                height={props.fontSize + props.iconSizeOffset}
                color={props.color}
                marginRight={20}
            />
        ) : ""}
        <Txt
            text={props.text}
            fontFamily={props.fontFamily}
            fontSize={props.fontSize}
            fontWeight={900}
            fill={props.color}
        />
    </Rect>

)