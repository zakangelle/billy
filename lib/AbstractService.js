module.exports = AbstractService;

/**
 * @class
 * Service interface that can be implemented when using a class constructor as
 * an argument to {@link Application#service}
 *
 * #### Example
 *
 * ```
 * function MyService(app, ...)
 * {
 *   this.app = app;
 *   ...
 * }
 *
 * // Setup everything needed for this service and wait for someAsyncMethod to
 * // finish
 * MyService.prototype.start = function()
 * {
 *   ...
 *   return someAsyncMethod();
 * };
 *
 * // Shutdown this service and wait for anotherAsyncMethod to finish
 * MyService.prototype.stop = function()
 * {
 *   ...
 *   return anotherAsyncMethod();
 * };
 *
 * ```
 */
function AbstractService()
{

}

/**
 * Will be called in order in response to {@link Application#start}.
 *
 * Optionally can return a `Promise` to signal asynchronous startup. If it
 * does, the application harness will wait for the promise to resolve before
 * continuing to the next service to start.
 * @return {Promise}
 */
AbstractService.prototype.start = function()
{

};

/**
 * Called in reverse order during {@link Application#stop}.
 *
 * Optionally can return a `Promise` to signal to the application to wait for a
 * graceful shutdown of a service.
 * @return {Promise}
 */
AbstractService.prototype.stop = function()
{

};
