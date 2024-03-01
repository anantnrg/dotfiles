import type { Scene } from '@motion-canvas/core/src/scenes/Scene';
import type { TimeEvent } from '@motion-canvas/core/src/scenes/timeEvents/TimeEvent';
import type { TimeEvents } from '@motion-canvas/core/src/scenes/timeEvents/TimeEvents';
/**
 * Manages time events during rendering and presentation.
 */
export declare class ReadOnlyTimeEvents implements TimeEvents {
    private readonly scene;
    get onChanged(): import("@motion-canvas/core/src/events").SubscribableValueEvent<TimeEvent[]>;
    private readonly events;
    private lookup;
    constructor(scene: Scene);
    set(): void;
    register(name: string, initialTime: number): number;
    /**
     * Called when the parent scene gets reloaded.
     */
    private handleReload;
}
//# sourceMappingURL=ReadOnlyTimeEvents.d.ts.map