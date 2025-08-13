**Context API**

1. Syatem to pass data throughout the app without manually pass props down the component tree.

a. Provider : gives all child components access the value and place it at the root of the component tree.

b. Value : data that we want to make available i.e. the data that we want to broadcast through the provider (usually state and functions).

c. Consumers : all components that read the value from the provider.

**Advanced State Management with Context API + useReducer**

1. When we are working with asynchronous data and code we have two options when it comes to the dispatch function.

a. To pass in all the state plus the dispatch function into the value. And then we can use the dispatch function inside the component to update state. However, since we're dealing with asynchronous data, we cannot have all the logic inside the reducer. So we need to pass all the data fetching logic into that component.

b. To not pass the dispatch function into the context but instead to use it inside the event handler functions. Then we use the dispatch function inside the event handler. And then we pass those event handlers functions into the value.

**User Authentication**
Typically in a frontend application or in React-application user authentication usually works in three steps.

1. First we get the user's credentials i.e. username and password from a login form and check with an API endpoint

2. Then in second step, if the credentials are correct, we then redirect the user to main application and we save the user object in our state.

3. Finally, in third step, we need to protect the application from unauthorized access,
   so from users who are not currently logged in.
