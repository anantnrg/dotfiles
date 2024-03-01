import { ThreadGenerator } from '@motion-canvas/core/src/threading';
/**
 * Turn the given generator function into a threadable generator.
 *
 * @example
 * ```ts
 * yield run(function* () {
 *   // do things
 * });
 * ```
 *
 * @param runner - A generator function or a factory that creates the generator.
 */
export declare function run(runner: () => ThreadGenerator): ThreadGenerator;
/**
 * Turn the given generator function into a threadable generator.
 *
 * @example
 * ```ts
 * yield run(function* () {
 *   // do things
 * });
 * ```
 *
 * @param runner - A generator function or a factory that creates the generator.
 * @param name - An optional name used when displaying this generator in the UI.
 */
export declare function run(name: string, runner: () => ThreadGenerator): ThreadGenerator;
//# sourceMappingURL=run.d.ts.map