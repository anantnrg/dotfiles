import { Circle } from "@motion-canvas/2d";

interface BackgroundProps {
  cirlces: Circle[];
}

export function Background(props: BackgroundProps) {
    return (
        <Rect
      height="97%"
      maxHeight="97%"
      width="100%"
      maxWidth="97%"
      clip
      layout
      direction="column"
      gap={45}
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
    >
      {range(759).map((i) => (
        <Circle
          width={2}
          height={2}
          fill="rgba(255, 255, 255, 0.35)"
          ref={makeRef(circles, i)}
          opacity={0}
        />
      ))}
    </Rect>,
    )
}