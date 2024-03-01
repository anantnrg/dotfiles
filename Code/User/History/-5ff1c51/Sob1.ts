import { MetaField, ObjectMetaField } from '@motion-canvas/core/src/meta';
import { SerializedTimeEvent } from '@motion-canvas/core/src/scenes/timeEvents';
/**
 * Create a runtime representation of the scene metadata.
 */
export declare function createSceneMetadata(): ObjectMetaField<{
    version: MetaField<any, number>;
    timeEvents: MetaField<SerializedTimeEvent[], SerializedTimeEvent[]>;
    seed: MetaField<any, number>;
}>;
/**
 * A runtime representation of the scene metadata.
 */
export type SceneMetadata = ReturnType<typeof createSceneMetadata>;
//# sourceMappingURL=SceneMetadata.d.ts.map