import { Color } from 'chroma-js';
import { Signal, SignalValue } from '@motion-canvas/core/src/signals';
import type { InterpolationFunction } from '@motion-canvas/core/src/tweening';
import type { Type } from '@motion-canvas/core/src/types/Type';
export type SerializedColor = string;
export type PossibleColor = SerializedColor | number | Color | {
    r: number;
    g: number;
    b: number;
    a: number;
};
export type ColorSignal<T> = Signal<PossibleColor, Color, T>;
declare module 'chroma-js' {
    interface Color extends Type {
        serialize(): string;
        lerp(to: ColorInterface | string, value: number, colorSpace?: ColorSpace): ColorInterface;
    }
    type ColorInterface = import('chroma-js').Color;
    type ColorSpace = import('chroma-js').InterpolationMode;
    interface ColorStatic {
        symbol: symbol;
        lerp(from: ColorInterface | string | null, to: ColorInterface | string | null, value: number, colorSpace?: ColorSpace): ColorInterface;
        createLerp(colorSpace: ColorSpace): InterpolationFunction<ColorInterface>;
        createSignal(initial?: SignalValue<PossibleColor>, interpolation?: InterpolationFunction<ColorInterface>): ColorSignal<void>;
    }
    interface ChromaStatic {
        Color: ColorStatic & (new (color: PossibleColor) => ColorInterface);
    }
}
/**
 * Represents a color.
 *
 * @remarks
 * This is the same class as the one created by
 * {@link https://gka.github.io/chroma.js/ | chroma.js}. Check out their
 * documentation for more information on how to use it.
 */
type ExtendedColor = Color;
declare const ExtendedColor: typeof Color;
export { ExtendedColor as Color };
//# sourceMappingURL=Color.d.ts.map