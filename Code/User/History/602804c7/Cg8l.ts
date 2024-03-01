import { PlaybackManager, PlaybackState } from '@motion-canvas/core/src/app/PlaybackManager';
/**
 * A read-only representation of the playback.
 */
export declare class PlaybackStatus {
    private readonly playback;
    constructor(playback: PlaybackManager);
    /**
     * Convert seconds to frames using the current framerate.
     *
     * @param seconds - The seconds to convert.
     */
    secondsToFrames(seconds: number): number;
    /**
     * Convert frames to seconds using the current framerate.
     *
     * @param frames - The frames to convert.
     */
    framesToSeconds(frames: number): number;
    get time(): number;
    get frame(): number;
    get speed(): number;
    get fps(): number;
    get state(): PlaybackState;
}
//# sourceMappingURL=PlaybackStatus.d.ts.map