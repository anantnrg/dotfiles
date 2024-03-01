import { EventDispatcherBase, Subscribable } from '@motion-canvas/core/src/events/EventDispatcherBase';
/**
 * Dispatches a {@link SubscribableEvent}.
 *
 * @example
 * ```ts
 * class Example {
 *   // expose the event to external classes
 *   public get onValueChanged {
 *     return this.value.subscribable;
 *   }
 *   // create a private dispatcher
 *   private value = new EventDispatcher<number>();
 *
 *   private dispatchExample() {
 *     // dispatching will notify all subscribers.
 *     this.value.dispatch(0);
 *   }
 * }
 * ```
 *
 * @typeParam T - The type of the value argument to subscribers.
 */
export declare class EventDispatcher<T> extends EventDispatcherBase<T> {
    dispatch(value: T): void;
}
/**
 * Provides safe access to the public interface of {@link EventDispatcher}.
 *
 * @remarks
 * External classes can use it to subscribe to an event without being able to
 * dispatch it.
 *
 * @typeParam T - The type of the argument passed to subscribers.
 */
export type SubscribableEvent<T> = Subscribable<T>;
//# sourceMappingURL=EventDispatcher.d.ts.map