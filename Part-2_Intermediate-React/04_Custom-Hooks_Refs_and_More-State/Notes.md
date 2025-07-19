**Rules of Hooks**

1. Only call Hooks at the Top Level -
   a. Don't call Hooks inside loops, conditions, or nested functions.
   b. This is necessary to ensure that hooks are always called in the same order (hook rely on this).

2. Only Call Hooks from React Functions -
   a. Only call hooks inside a function component or a custom hook, but not from regular function or even class components.

These rules are automatically enforced by React's ESLint rules.

**Intiroducing another Hook - useRef**

1. ref - reference

2. "Box" (object) with a mutable .current property that is persisted across renders ("normal" variables are always reset).

3. Two big use cases for refs:
   a. Creating a variable that stays the same between renders (e.g. previous state, setTimeout id, etc.)

   b. Selecting and storing DOM elements

4. Updating refs don't cause a re-render

5. Using a ref, with a DOM element happens in the following order i.e. three steps:
   a. Create a ref i.e. useRef() and then we pass the initial value that we want to be in that current property. When we work with DOM elements, we need to pass null as the initial value. It will return a ref object with a current property that is null. And we'll store that ref in a variable.

   b. Second step : Now we have to select the DOM element using the prop called 'ref' and then we just pass in the ref object that we created in step a. So now they both are connected in a declarative way.

   c. Third step : So we need to use an effect in order to use a ref that contains a DOM element, because the ref only gets added to the DOM element after the DOM has already loaded. And so therefore we can only access it in effect which also runs after the DOM has been loaded

**Custom Hooks**

1. Custom Hooks are all about resusability.

2. In React, we have basically two types of things that we can reuse:
   a. A piece of UI - component
   b. A piece of logic - Does logic contain any hooks?
   No - Regular function
   Yes - Custom Hook

3. Customs Hooks are just Regular JavaScript functions, so it can recieve and return any data. In fact, it's very common to return an object or an array from a custom hook.
