import { CompoundSignal, SignalValue } from '@motion-canvas/core/src/signals';
import { InterpolationFunction } from '@motion-canvas/core/src/tweening';
import { Type } from '@motion-canvas/core/src/types/Type';
export type SerializedSpacing = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
export type PossibleSpacing = SerializedSpacing | number | [number, number] | [number, number, number] | [number, number, number, number] | undefined;
export type SpacingSignal<T> = CompoundSignal<PossibleSpacing, Spacing, 'top' | 'right' | 'bottom' | 'left', T>;
export declare class Spacing implements Type {
    static readonly symbol: unique symbol;
    top: number;
    right: number;
    bottom: number;
    left: number;
    static createSignal(initial?: SignalValue<PossibleSpacing>, interpolation?: InterpolationFunction<Spacing>): SpacingSignal<void>;
    static lerp(from: Spacing, to: Spacing, value: number): Spacing;
    get x(): number;
    get y(): number;
    constructor();
    constructor(from: PossibleSpacing);
    constructor(all: number);
    constructor(vertical: number, horizontal: number);
    constructor(top: number, horizontal: number, bottom: number);
    constructor(top: number, right: number, bottom: number, left: number);
    lerp(to: Spacing, value: number): Spacing;
    scale(value: number): Spacing;
    addScalar(value: number): Spacing;
    toSymbol(): symbol;
    toString(): string;
    serialize(): SerializedSpacing;
}
//# sourceMappingURL=Spacing.d.ts.map