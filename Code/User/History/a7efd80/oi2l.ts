import { Logger } from '@motion-canvas/core/src/app';
import { AudioData } from '@motion-canvas/core/src/media/AudioData';
export declare class AudioManager {
    private readonly logger;
    get onDataChanged(): import("@motion-canvas/core/src/events").SubscribableValueEvent<AudioData | null>;
    private readonly data;
    private readonly context;
    private readonly audioElement;
    private source;
    private error;
    private abortController;
    private offset;
    constructor(logger: Logger);
    getTime(): number;
    setTime(value: number): void;
    setOffset(value: number): void;
    setMuted(isMuted: boolean): void;
    setVolume(volume: number): void;
    setSource(src: string): void;
    isInRange(time: number): boolean;
    toRelativeTime(time: number): number;
    toAbsoluteTime(time: number): number;
    isReady(): boolean | "" | null;
    /**
     * Pause/resume the audio.
     *
     * @param isPaused - Whether the audio should be paused or resumed.
     *
     * @returns `true` if the audio successfully started playing.
     */
    setPaused(isPaused: boolean): Promise<boolean>;
    private loadData;
    private decodeAudioData;
}
//# sourceMappingURL=AudioManager.d.ts.map