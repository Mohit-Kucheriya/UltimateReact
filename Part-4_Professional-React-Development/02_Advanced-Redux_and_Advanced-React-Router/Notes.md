**How to read the state from the Redux store**

1. We use the 'useSelector' custome hook from 'react-redux' to read the state from the store.

2. So as always, the useSelector recieves the state as a parameter and returns the value of the property we want to read from the state.

3. syntax: const value = useSelector((state) => state.property); Here we are passing a function that receives the state as a parameter and returns the value of the property we want to read from the state.

**Redux Thunks with createAsyncThunk**

1. Redux is by nature completely synchronous.

2. Thunk is a middleware that sits between the dispatching and the reducer.

3. createAsyncThunk recieves two things: the name of the action and the async function that will return the payload for the reducer.

4. createAsyncThunk will basically produce three additional action types: pending, fulfilled and rejected.

5. So we need to make the reducers for each of these action types.

**Fetching Data without Navigation i.e. using useFetcher**

1. useFetcher is a custom hook which return 'fetcher'

2. When we use 'fetcher.Form' so, baiscally its a component which will not navigate away, it will submit a form and then also revalidate the page.
