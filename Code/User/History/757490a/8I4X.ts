import { Logger, PlaybackStatus } from '@motion-canvas/core/src/app';
import { EventDispatcher } from '@motion-canvas/core/src/events';
import { SignalValue } from '@motion-canvas/core/src/signals';
import { Thread, ThreadGenerator } from '@motion-canvas/core/src/threading';
import { Vector2 } from '@motion-canvas/core/src/types';
import { LifecycleEvents } from '@motion-canvas/core/src/scenes/LifecycleEvents';
import { Random } from '@motion-canvas/core/src/scenes/Random';
import { CachedSceneData, FullSceneDescription, Scene, SceneDescriptionReload, SceneRenderEvent } from '@motion-canvas/core/src/scenes/Scene';
import { SceneMetadata } from '@motion-canvas/core/src/scenes/SceneMetadata';
import { Slides } from '@motion-canvas/core/src/scenes/Slides';
import { Threadable } from '@motion-canvas/core/src/scenes/Threadable';
import { TimeEvents } from '@motion-canvas/core/src/scenes/timeEvents';
import { Variables } from '@motion-canvas/core/src/scenes/Variables';
export interface ThreadGeneratorFactory<T> {
    (view: T): ThreadGenerator;
}
/**
 * The default implementation of the {@link Scene} interface.
 *
 * Uses generators to control the animation.
 */
export declare abstract class GeneratorScene<T> implements Scene<ThreadGeneratorFactory<T>>, Threadable {
    readonly name: string;
    readonly playback: PlaybackStatus;
    readonly logger: Logger;
    readonly meta: SceneMetadata;
    readonly timeEvents: TimeEvents;
    readonly slides: Slides;
    readonly variables: Variables;
    random: Random;
    creationStack?: string;
    previousOnTop: SignalValue<boolean>;
    get firstFrame(): number;
    get lastFrame(): number;
    get onCacheChanged(): import("@motion-canvas/core/src/events").SubscribableValueEvent<CachedSceneData>;
    private readonly cache;
    get onReloaded(): import("@motion-canvas/core/src/events").Subscribable<void, import("@motion-canvas/core/src/events").EventHandler<void>>;
    private readonly reloaded;
    get onRecalculated(): import("@motion-canvas/core/src/events").Subscribable<void, import("@motion-canvas/core/src/events").EventHandler<void>>;
    private readonly recalculated;
    get onThreadChanged(): import("@motion-canvas/core/src/events").SubscribableValueEvent<Thread | null>;
    private readonly thread;
    get onRenderLifecycle(): import("@motion-canvas/core/src/events").Subscribable<[SceneRenderEvent, CanvasRenderingContext2D], import("@motion-canvas/core/src/events").EventHandler<[SceneRenderEvent, CanvasRenderingContext2D]>>;
    protected readonly renderLifecycle: EventDispatcher<[SceneRenderEvent, CanvasRenderingContext2D]>;
    get onReset(): import("@motion-canvas/core/src/events").Subscribable<void, import("@motion-canvas/core/src/events").EventHandler<void>>;
    private readonly afterReset;
    readonly lifecycleEvents: LifecycleEvents;
    get LifecycleEvents(): LifecycleEvents;
    get previous(): Scene<unknown> | null;
    readonly experimentalFeatures: boolean;
    protected resolutionScale: number;
    private runnerFactory;
    private previousScene;
    private runner;
    private state;
    private cached;
    private counters;
    private size;
    constructor(description: FullSceneDescription<ThreadGeneratorFactory<T>>);
    abstract getView(): T;
    /**
     * Update the view.
     *
     * Invoked after each step of the main generator.
     * Can be used for calculating layout.
     *
     * Can modify the state of the view.
     */
    update(): void;
    render(context: CanvasRenderingContext2D): Promise<void>;
    protected abstract draw(context: CanvasRenderingContext2D): void;
    reload({ config, size, stack, resolutionScale, }?: SceneDescriptionReload<ThreadGeneratorFactory<T>>): void;
    recalculate(setFrame: (frame: number) => void): Promise<void>;
    next(): Promise<void>;
    reset(previousScene?: Scene | null): Promise<void>;
    getSize(): Vector2;
    getRealSize(): Vector2;
    isAfterTransitionIn(): boolean;
    canTransitionOut(): boolean;
    isFinished(): boolean;
    enterInitial(): void;
    enterAfterTransitionIn(): void;
    enterCanTransitionOut(): void;
    isCached(): boolean;
    /**
     * Invoke the given callback in the context of this scene.
     *
     * @remarks
     * This method makes sure that the context of this scene is globally available
     * during the execution of the callback.
     *
     * @param callback - The callback to invoke.
     */
    protected execute<T>(callback: () => T): T;
}
//# sourceMappingURL=GeneratorScene.d.ts.map