import { ThreadGenerator } from '@motion-canvas/core/src/threading';
import { Direction, Origin } from '@motion-canvas/core/src/types';
/**
 * Perform a transition that slides the scene in the given direction.
 *
 * @param direction - The direction in which to slide.
 * @param duration - The duration of the transition.
 */
export declare function slideTransition(direction: Direction, duration?: number): ThreadGenerator;
/**
 * Perform a transition that slides the scene towards the given origin.
 *
 * @param origin - The origin towards which to slide.
 * @param duration - The duration of the transition.
 */
export declare function slideTransition(origin: Origin, duration?: number): ThreadGenerator;
//# sourceMappingURL=slideTransition.d.ts.map