/* eslint-disable react/jsx-filename-extension */
import { Icon, Rect, Txt } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";

interface ButtonProps {
  text: string;
  fontFamily: string;
  fontSize: number;
  ref: Reference<Rect>;
  height: number;
  color: string;
  y: number;
  x: number;
  scale: number;
  textRef: Reference<Txt>;
}

interface IconButtonProps {
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
  scale: number;
}

export function Button(props: ButtonProps) {
  return (
    <Rect
      padding={30}
      height={props.height}
      ref={props.ref}
      radius={20}
      fill="1e1e2e"
      layout
      alignItems="center"
      justifyContent="center"
      x={props.x}
      y={props.y}
      scale={props.scale}
      clip
    >
      <Txt
        text={props.text}
        fontFamily={props.fontFamily}
        fontSize={props.fontSize}
        fontWeight={900}
        fill={props.color}
        ref={props.textRef}
      />
    </Rect>
  );
}

export function IconButton(props: IconButtonProps) {
  return (
    <Rect
      minWidth={props.width}
      padding={30}
      height={props.height}
      ref={props.ref}
      radius={15}
      fill="1e1e2e"
      layout
      alignItems="center"
      justifyContent="center"
      x={props.x}
      y={props.y}
      clip
    >
      <Icon
        icon={props.icon}
        width={props.fontSize + props.iconSizeOffset}
        height={props.fontSize + props.iconSizeOffset}
        color={props.color}
        marginRight={20}
      />
      <Txt
        text={props.text}
        fontFamily={props.fontFamily}
        fontSize={props.fontSize}
        fontWeight={900}
        fill={props.color}
      />
    </Rect>
  );
}
