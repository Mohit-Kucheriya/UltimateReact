**Middleware in Redux**

1. Middleware is basically a function that sits between the dispatching and the store. This means that a Middleware allows developers to run some code after dispatching an action, but before that action reaches in the store

2. So, usually after we dispatch, the action immedialtely reaches the reducer and the state is updated.

3. When we're using thunks, instead of returning an action object from the action creator function, we return a new function. And so then Redux, when it sees that we are dispatching a function, it will call that function, and into that function it'll pass in the dispatch function and getState.

4. And so then we can use that dispatch function, to delay that dispatching until the asynchronous operation that we want to implement has finished.
