import type { LogPayload } from '@motion-canvas/core/src/app';
type DetailedErrorProps = Pick<LogPayload, 'message' | 'remarks' | 'object' | 'durationMs' | 'inspect'>;
export declare class DetailedError extends Error {
    /**
     * {@inheritDoc app.LogPayload.message}
     */
    readonly remarks?: string;
    /**
     * {@inheritDoc app.LogPayload.object}
     */
    readonly object?: any;
    /**
     * {@inheritDoc app.LogPayload.durationMs}
     */
    readonly durationMs?: number;
    /**
     * {@inheritDoc app.LogPayload.inspect}
     */
    readonly inspect?: string;
    constructor(message: string, remarks?: string);
    constructor(props: DetailedErrorProps);
}
export { };
//# sourceMappingURL=DetailedError.d.ts.map