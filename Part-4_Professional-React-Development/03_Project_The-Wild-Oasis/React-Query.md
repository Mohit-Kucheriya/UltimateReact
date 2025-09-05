**All Data Fetching and Remote State Management with React Query**

1. Powerful library for managing remote (server) state.

_2. Automatic Loading and Error State Management_

_3. Automatic Data Refetching_

React Query automatically refetches data in certain situations to keep remote state synchronized with the application.

_4. Data Prefetching_

React Query supports prefetching data. Prefetching means fetching data that will be needed later, before it is actually displayed on the screen. A classic example is pagination, where data for the current page and the next page can be fetched in advance. This ensures that when the user navigates to the next page, the data is already cached and available instantly, avoiding loading spinners.

_5. Mutations: Updating Remote State_

_6. Offline Support_

**Setting Up React Query**

1. By providing the QueryClient using QueryClientProvider, the application follows a similar pattern to Redux and the Context API, where data is managed in one place and provided to the entire component tree.

2. The "staleTime" option specifies the amount of time that the data in the cache will stay fresh before being refetched.

**Fetching data with React Query**

1. The most important function we will use is the `useQuery` custom hook. It requires an object with two properties:

   a. queryKey: a unique identifier for the data we want to fetch. This can be an array containing strings or other values.

   b. queryFn: the function responsible for fetching the data, which must return a promise.

**Mutations: Deleting data**

1. The `useMutation` custom hook is used to delete data. It requires an object with two properties:

   a. mutationFn: the function responsible for deleting the data, which must return a promise.

   b. onSuccess: a function that will be called when the mutation is successful.

2. "Invalidation" - This is conceptually the simplest way to get your screen up-to-date. Remember, with server state, you're only ever displaying a snapshot of data from a given point in time. React Query tries to keep that up-to-date of course, but if you're deliberately changing server state with a mutation, this is a great point in time to tell React Query that some data you have cached is now "invalid". React Query will then go and refetch that data if it's currently in use, and your screen will update automatically for you once the fetch is completed. The only thing you have to tell the library is which queries you want to invalidate:
