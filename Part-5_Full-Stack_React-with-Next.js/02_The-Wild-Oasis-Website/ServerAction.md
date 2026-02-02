**What are Server Actions?**

1. Async function that run exclusively on the server, allowing us to perform data mutations.

2. Created with the "use server" directive at the top of the function or entire module

3. An async function in a server component. Can be used in component or passed to a client component (unlike functions).

4. Standalone file: exported functions become server actions that can be imported into any component.

5. Behind the scenes: Next.js creates API endpoint (with URL) for each server action. Whenever a server action is called, a POST request is made to its URL (the function itself never reached client).

**In Server Action, We CAN**

1. Perform data mutations (CRUD)

2. When the underlying data of our page changes, the UI must be updated as a result.

3. However, since that data is not stored as state on the client, we don't update UI by updating state. Instead, what we need to do is to manually revalidate the data cache whenever we perform a data mutation.

4. Server actions are tightly integrated into the Next.js caching and revalidation system.

NOTE: When we do some server action, and then we want the result of that action to be reflected in the UI, all we do is to re-fecth the data i.e we clear the cache get the fresh data, and then that fresh data will rendered.
