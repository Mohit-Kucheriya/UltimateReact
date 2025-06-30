**Difference between React Components, Component instances and React Elements**

1. React Components - Describe a piece of UI. Regular JavaScript functions that return a React Element, usually written as JSX.

2. Instances - Instances are created when we 'use' components. Has it's own state, props and lifecycle methods.

3. React Elements - React executes the code in each of these instances, each of them will return one or more React Elements.

4. Behind the scenes, JSX will actually get converted to multiple React.createElement function calls.

5. Then as React calls these create element functions the result will be a React Element. It's simply a big immutable JavaScript object that React keeps in memory.

6. So it's this React element that will eventually be converted to actual DOM elements and then painted onto the screen by the browser.

**How Renders are triggered**

1. The two situations that triggers renders:
   a. Very first time the application runs i.e. initial render
   b. State is updated in one or more component instances (re-render).

   NOTE: The render process is triggered for the entire application, not just the components that are affected by the state change i.e. for one single component.
   Now that doesn't mean that the entire DOM is updated because remember, in React, rendering is onnly about calling the component functions and figuring out what needs to change in the DOM later.
   Renders are not triggered immediately, but scheduled for when JS engine has some 'free time'.There is also batching of multiple 'setState' calls in event handlers.

**How Rendering Works-The Render Phase**

1. So, at the beginning of the render phase, React will go through entire component tree, take all the component instances that trigger a re-render and actually render them, which simply means to call the corresponding component functions.

2. This will create updated React Elements which altogether make up the so-called 'virtual DOM'.

**The Virtual DOM**

1. So on the initial render, React will take the entire component tree and transform it into one big React Element i.e. what we call the 'virtual DOM'.

2. Virtual DOM - Tree of all React Elements created from all instances in the component tree. At the end it's just a big JavaScript object.

3. Rendering a component will cause all of its child components to be rendered as well (no matter if props changed or not). And this doesn't mean that the entire DOM is updated, it's just that React will figure out what needs to change in the DOM.

4. It's just the virtual DOM that will be re-created

**What is Reconciliation and why do we need it?**

1. Writing the DOM is expensive, so React will try to minimize the number of DOM operations by comparing the virtual DOM with the actual DOM.

2. Usually, only a small part of the DOM needs to be updated. React reuses as much of the existing DOM as possible, and only updates the parts that have changed.

3. Reconciliation - Deciding which DOM elements actually need to be inserted, deleted or updated, in order to reflect tha latest state changes.

4. Reconciliation is processed by a reconciler, reconciler really is the engine of React. It's the reconciler that allows us to never touch the DOM directly.

5. The current reconciler in React is called Fiber.

**The Reconciler - Fiber**

1. So, during the initail render of the application Fiber take the entire element tree, so the virtual DOM, and based on it create another tree which is the Fiber tree.

2. Fiber tree - The fiber tree is a special internal tree where for each component instance and DOM element in the app, there is one so called Fiber.

3. Now special about this tree is that unlike React elements in the virtual DOM, Fibers are not created on every render. So the Fiber tree is never destroyed.

4. Instead it's a mutable data structure and once it has been created during the initial render, it's simply mutated over and over again in future reconciliation steps.

**The commit phase and browser effect**

1. The current work in progress fiber tree also goes into the commit phase.

2. In commit phase, where React finally writes to the DOM. So basically, React goes through the effect list that was created during the rendering and applies them one by one to the actual DOM elements that were in the already existing DOM tree.

3. After the commit phase completes, the workInProgress fiber tree becomes the current tree for the next render cycle.

**State Update Batching**

1. If there are multiple state updates in a single event handler, React batches them together and just one state update for the entire event handler.

2. So updadting multiple state update won't immediately causes a re-render for each update.

3. Updating state in React is asynchronous.

4. Updated state variables are not immediately available after setState call, but only after the re-render.

5. If we need to update state based on the previous state, we can use the callback function that is passed to setState i.e. setState(prevState => { return { count: prevState.count + 1 } })

6. As we attempt to update the state, if the 'new' state and the 'current' state are the same, React will not trigger a re-render.

**DOM Refresher - Event Propagation and Delegation**

1. Some event happens, like a click on one of button, so here is what gonna happen in the browser. As soon as the event fires a new event object will be created, but it will not be created where the click actually happened. Instead it will be created at the root of the document i.e. at the very top level.

2. From there, the event will then travel down the entire tree during the so-called capturing phase, all the way, until it reaches the target element and the target element is simply the element on which the event was actually first triggered.

3. So at the target, we choose to handle the event by placing an event handler function on that element.

4. Then immediately after the target element has been reached, the event object travels all the way back up the entire tree during the so-called bubbling phase.

5. During the capturing and the bubbling phase, the event really goes through every single child and parent element one by one.

**How React handles events**

1. React registers all event handlers on the root DOM container. This is where all events are handled.

2. React actually performs event delegation for all events in our application. React delegates all events to the root DOM container, because that's where they will actually get handled, not in the place where we thought we registered them. 