import type { LogPayload } from '@motion-canvas/core/src/app';
import { DetailedError } from '@motion-canvas/core/src/utils/DetailedError';
type ExperimentalErrorProps = Pick<LogPayload, 'message' | 'remarks' | 'object' | 'durationMs' | 'inspect'>;
export declare class ExperimentalError extends DetailedError {
    constructor(message: string, remarks?: string);
    constructor(props: ExperimentalErrorProps);
}
export { };
//# sourceMappingURL=ExperimentalError.d.ts.map