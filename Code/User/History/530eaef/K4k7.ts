import { Color, PossibleColor } from '@motion-canvas/core/src/types';
import { MetaField } from '@motion-canvas/core/src/meta/MetaField';
/**
 * Represents a color stored in a meta file.
 */
export declare class ColorMetaField extends MetaField<PossibleColor | null, Color | null> {
    readonly type: symbol;
    parse(value: PossibleColor | null): Color | null;
    serialize(): PossibleColor | null;
}
//# sourceMappingURL=ColorMetaField.d.ts.map