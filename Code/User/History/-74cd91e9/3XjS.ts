import type { Scene } from '@motion-canvas/core/src/scenes/Scene';
import type { TimeEvent } from '@motion-canvas/core/src/scenes/timeEvents/TimeEvent';
import type { TimeEvents } from '@motion-canvas/core/src/scenes/timeEvents/TimeEvents';
/**
 * Manages time events during editing.
 */
export declare class EditableTimeEvents implements TimeEvents {
    private readonly scene;
    get onChanged(): import("@motion-canvas/core/src/events").SubscribableValueEvent<TimeEvent[]>;
    private readonly events;
    private registeredEvents;
    private lookup;
    private collisionLookup;
    private previousReference;
    private didEventsChange;
    private preserveTiming;
    constructor(scene: Scene);
    set(name: string, offset: number, preserve?: boolean): void;
    register(name: string, initialTime: number): number;
    /**
     * Called when the parent scene gets reloaded.
     */
    private handleReload;
    /**
     * Called when the parent scene gets recalculated.
     */
    private handleRecalculated;
    private handleReset;
    /**
     * Called when the meta of the parent scene changes.
     */
    private handleMetaChanged;
    private load;
}
//# sourceMappingURL=EditableTimeEvents.d.ts.map