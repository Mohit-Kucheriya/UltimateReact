**How to read the state from the Redux store**

1. We use the 'useSelector' custome hook from 'react-redux' to read the state from the store.

2. So as always, the useSelector recieves the state as a parameter and returns the value of the property we want to read from the state.

3. syntax: const value = useSelector((state) => state.property); Here we are passing a function that receives the state as a parameter and returns the value of the property we want to read from the state.
