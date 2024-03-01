import { EventDispatcher } from '@motion-canvas/core/src/events';
import { Scene } from '@motion-canvas/core/src/scenes/Scene';
/**
 * Lifecycle events for {@link Scene} that are cleared on every reset.
 */
export declare class LifecycleEvents {
    private readonly scene;
    get onBeforeRender(): import("@motion-canvas/core/src/events").Subscribable<CanvasRenderingContext2D, import("@motion-canvas/core/src/events").EventHandler<CanvasRenderingContext2D>>;
    protected readonly beforeRender: EventDispatcher<CanvasRenderingContext2D>;
    get onBeginRender(): import("@motion-canvas/core/src/events").Subscribable<CanvasRenderingContext2D, import("@motion-canvas/core/src/events").EventHandler<CanvasRenderingContext2D>>;
    protected readonly beginRender: EventDispatcher<CanvasRenderingContext2D>;
    get onFinishRender(): import("@motion-canvas/core/src/events").Subscribable<CanvasRenderingContext2D, import("@motion-canvas/core/src/events").EventHandler<CanvasRenderingContext2D>>;
    protected readonly finishRender: EventDispatcher<CanvasRenderingContext2D>;
    get onAfterRender(): import("@motion-canvas/core/src/events").Subscribable<CanvasRenderingContext2D, import("@motion-canvas/core/src/events").EventHandler<CanvasRenderingContext2D>>;
    protected readonly afterRender: EventDispatcher<CanvasRenderingContext2D>;
    constructor(scene: Scene);
}
//# sourceMappingURL=LifecycleEvents.d.ts.map