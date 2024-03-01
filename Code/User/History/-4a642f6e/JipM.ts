import type { Slide } from '@motion-canvas/core/src/scenes';
import { PlaybackManager } from '@motion-canvas/core/src/app/PlaybackManager';
import type { Project } from '@motion-canvas/core/src/app/Project';
import { Stage, StageSettings } from '@motion-canvas/core/src/app/Stage';
export interface PresenterSettings extends StageSettings {
    name: string;
    fps: number;
    slide: string | null;
}
export interface PresenterInfo extends Record<string, unknown> {
    currentSlideId: string | null;
    nextSlideId: string | null;
    hasNext: boolean;
    hasPrevious: boolean;
    isWaiting: boolean;
    count: number;
    index: number | null;
}
export declare enum PresenterState {
    Initial = 0,
    Working = 1,
    Aborting = 2
}
export declare class Presenter {
    private project;
    get onStateChanged(): import("@motion-canvas/core/src/events").SubscribableValueEvent<PresenterState>;
    private readonly state;
    get onInfoChanged(): import("@motion-canvas/core/src/events").SubscribableValueEvent<PresenterInfo>;
    private readonly info;
    get onSlidesChanged(): import("@motion-canvas/core/src/events").SubscribableValueEvent<Slide[]>;
    private readonly slides;
    readonly stage: Stage;
    private readonly lock;
    readonly playback: PlaybackManager;
    private readonly status;
    private readonly logger;
    private abortController;
    private renderTime;
    private requestId;
    private requestedResume;
    private requestedSlide;
    constructor(project: Project);
    /**
     * Present the animation.
     *
     * @param settings - The presentation settings.
     */
    present(settings: PresenterSettings): Promise<void>;
    /**
     * Abort the ongoing presentation process.
     */
    abort(): void;
    /**
     * Resume the presentation if waiting for the next slide.
     */
    resume(): void;
    requestFirstSlide(): void;
    requestLastSlide(): void;
    requestPreviousSlide(): void;
    requestNextSlide(): void;
    requestSlide(id: string): void;
    private run;
    private reloadScenes;
    private loop;
    private request;
    private updateInfo;
}
//# sourceMappingURL=Presenter.d.ts.map