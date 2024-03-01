import { Rect } from "@motion-canvas/2d";
import { Reference, chain, easeOutSine, map, tween } from "@motion-canvas/core";

function* openWindowScale(rect: Reference<Rect>) {
    yield* chain(
        tween(0.55, value => {
            rect().scale(map(0, 1, easeOutSine(value)))
        }),
    )
}

function* closeWindowScale(rect: Reference<Rect>) {
    yield* chain(
        tween(0.55, value => {
            rect().scale(map(1, 0, easeOutSine(value)))
        }),
    )
}