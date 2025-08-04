**useReducer Hook**

1. useReducer is a more advanced and structured alternative to useState for managing state, specially when state logic becomes complex or when the next state depends on the previous one.

2. It works with a reducer function, which is a pure function that takes the current state and an action object as arguments, and returns the new state.

   Syntax: useReducer(reducerFn, initialState)

3. The useReducer hook returns an array with two elements:

   The current state.

   A dispatch function to send actions to the reducer.

4. The dispatch function is used to send an action to the reducer.

   Example: dispatch({ type: 'increment', payload: 1 })

5. Whatever you pass to the dispatch function becomes the action argument inside the reducer function.

   The reducer then uses this action to determine and return the next state.

6. Usually we use 'useReducer' when we have some more complex state to manage. So not just one single value, so usually the state is going to be an object and not just one single value.

7. State are immutable, this means reducer are not allowed to mutate the state, and in fact no side effects are allowed.

8. So a reducer must be a pure function that always returns a new state. Based on the current state and the received action.

9. The action is simply an object that describes how state should be updated. It usually contains a type property that indicates the type of action being performed, and a payload property that contains the data that should be used to update the state.

10. dispatch is a function that takes an action as an argument and sends it to the reducer. It is used to update the state.

**How to create a fake API**

1. Create a folder named 'data' in the root of the project.
2. Create a file named 'questions.json' in the 'data' folder.
3. Install json-server using the command 'npm install json-server -g'.
4. Add the following code to the 'package.json' file:

   "scripts": {
   "server": "json-server --watch data/questions.json --port 3001"
   }

   This will start a server that will watch for changes in the 'questions.json' file and update the data in real-time.

5. Now run the command 'npm run server' in the terminal to start the server.
6. Now you can access the API at http://localhost:3001/questions.
7. From the above url we can fetch the questions data.
