**Routing in React**

1. Routing - Matching different URLs to different UI views (components).

2. React Router - A library for routing in React, which allows us to buiild Single Page Application (SPA).

**Single Page Application (SPA)**

1. Application that is executed entirely on the client (browser).

2. Routes : Different URLs correspond to different UI views (components).

3. JavaScript (React) is used to update the page (DOM).

4. The page is never reloaded i.e feels like a native app.

**NOTE**

1. In this we are using React Router for routing and Declarative Mode.

2. use "\*" for catch all route to handle error pages.

**Nested Routes**

1. We need nested routes when we want a part of the user interface to be controlled by a part of the URL.

**The URL for state management**

1. Thr URL is an excellent place to store UI state and an alternative to useState in some situations!

2. Easy way to store in global place, accessible to all components in tha app.

3. Good way to "pass" data from one page to next page.

4. So for actually storing state in the URL, we use Params or the Query string.

5. To use Params with React Router, we basically do it in three steps:
   a. So first we create a new route i.e. /cities/:cityId
   b. Then we link to that route
   c. Then in that route we read the state from the URL
