import { Rect } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";

function* openWindow(rect: Reference<Rect>) {
    yield* chain(
        tween(0.55, value => {
            code_block_rect_ref().scale(map(0, 1, easeOutSine(value)))
          }),
    )
}