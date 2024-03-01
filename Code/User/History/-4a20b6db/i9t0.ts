export declare enum LogLevel {
    Error = "error",
    Warn = "warn",
    Info = "info",
    Http = "http",
    Verbose = "verbose",
    Debug = "debug",
    Silly = "silly"
}
/**
 * Represents an individual log entry.
 *
 * @remarks
 * When displayed in the editor, the log entry will have the following format:
 * ```
 *                              inspect node ┐
 *   ┌ expand more          duration ┐       │
 *   ▼                               ▼       ▼
 * ┌────────────────────────────────────────────┐
 * │ ▶ message                       300 ms (+) │
 * ├────────────────────────────────────────────┤
 * │ remarks                                    │
 * │ object                                     │
 * │ stacktrace                                 │
 * └────────────────────────────────────────────┘
 * ```
 */
export interface LogPayload {
    /**
     * The log level.
     */
    level?: LogLevel;
    /**
     * The main message of the log.
     *
     * @remarks
     * Always visible.
     */
    message: string;
    /**
     * Additional information about the log.
     *
     * @remarks
     * Visible only when the log is expanded.
     */
    remarks?: string;
    /**
     * An object that will be serialized as JSON and displayed under the message.
     *
     * @remarks
     * Visible only when the log is expanded.
     */
    object?: any;
    /**
     * The stack trace of the log.
     *
     * @remarks
     * Visible only when the log is expanded.
     * The current stack trace can be obtained using `new Error().stack`.
     * Both Chromium and Firefox stack traces are supported.
     */
    stack?: string;
    /**
     * An optional duration in milliseconds.
     *
     * @remarks
     * Can be used to display any duration related to the log.
     * The value is always visible next to the message.
     */
    durationMs?: number;
    /**
     * An optional key used to inspect a related object.
     *
     * @remarks
     * This will be used together with the {@link scenes.Inspectable} interface to
     * display additional information about the inspected object.
     * When specified, the log will have an "inspect" button that will open the
     * "Properties" tab and select the inspected object.
     */
    inspect?: string;
    /**
     * Any additional information that the log may contain.
     */
    [K: string]: any;
}
export declare class Logger {
    /**
     * Triggered when a new message is logged.
     */
    get onLogged(): import("@motion-canvas/core/src/events").Subscribable<LogPayload, import("@motion-canvas/core/src/events").EventHandler<LogPayload>>;
    private readonly logged;
    readonly history: LogPayload[];
    private profilers;
    log(payload: LogPayload): void;
    error(payload: string | LogPayload): void;
    warn(payload: string | LogPayload): void;
    info(payload: string | LogPayload): void;
    http(payload: string | LogPayload): void;
    verbose(payload: string | LogPayload): void;
    debug(payload: string | LogPayload): void;
    silly(payload: string | LogPayload): void;
    protected logLevel(level: LogLevel, payload: string | LogPayload): void;
    profile(id: string, payload?: LogPayload): void;
}
//# sourceMappingURL=Logger.d.ts.map