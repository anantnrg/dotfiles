import { Rect, Txt } from "@motion-canvas/2d";
import {
  Reference,
  ThreadGenerator,
  chain,
  easeInOutCubic,
  map,
  tween,
} from "@motion-canvas/core";

export function* openWindowScale(rect: Reference<Rect>) {
  yield* chain(
    tween(0.75, (value) => {
      rect().scale(map(0, 1, easeInOutCubic(value)));
    }),
  );
}

export function* closeWindowScale(rect: Reference<Rect>) {
  yield* chain(
    tween(0.75, (value) => {
      rect().scale(map(1, 0, easeInOutCubic(value)));
    }),
  );
}

export function* textAppear(txt: Reference<Txt>) {
  yield* chain(
    tween(0.75, (value) => {
      txt().opacity(map(0, 1, easeInOutCubic(value)));
    }),
  );
}

export function* textDisappear(txt: Reference<Txt>) {
  yield* chain(
    tween(0.75, (value) => {
      txt().opacity(map(1, 0, easeInOutCubic(value)));
    }),
  );
}

export function* animateClone<T extends Node>(
  scene: Node,
  node: T,
  callback: (clone: T) => ThreadGenerator,
) {
  const clone = node.clone();
  scene.add(clone);
  clone.absolutePosition(node.absolutePosition());
  node.opacity(0);

  yield* callback(clone);

  clone.remove();
  node.opacity(1);
}
