import { Rect } from "@motion-canvas/2d";
import { Reference, chain, easeInOutCubic, easeOutSine, map, tween } from "@motion-canvas/core";

export function* openWindowScale(rect: Reference<Rect>) {
    yield* chain(
        tween(0.75, value => {
            rect().scale(map(0, 1, easeInOutCubic(value)))
        }),
    )
}

export function* closeWindowScale(rect: Reference<Rect>) {
    yield* chain(
        tween(0.75, value => {
            rect().scale(map(1, 0, easeInOutCubic(value)))
        }),
    )
}

export function* textAppear(rect: Reference<Txt>) {
    yield* chain(
        tween(0.75, value => {
            rect().scale(map(0, 1, easeInOutCubic(value)))
        }),
    )
}