import { MetaField } from '@motion-canvas/core/src/meta/MetaField';
import { MetaOption } from '@motion-canvas/core/src/meta/MetaOption';
/**
 * Represents a number stored in a meta file.
 */
export declare class NumberMetaField extends MetaField<any, number> {
    readonly type: NumberConstructor;
    protected presets: MetaOption<number>[];
    protected min?: number;
    protected max?: number;
    parse(value: any): number;
    getPresets(): MetaOption<number>[];
    setPresets(options: MetaOption<number>[]): this;
    setRange(min?: number, max?: number): this;
}
//# sourceMappingURL=NumberMetaField.d.ts.map