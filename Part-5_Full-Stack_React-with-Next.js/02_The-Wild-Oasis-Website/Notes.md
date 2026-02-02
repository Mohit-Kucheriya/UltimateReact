- Each Next.js application must have a global layout which we called root layout.

**React Server Components**

_What are React Server Components?_

1. A new full-stack architecture for React applications.

2. Introduces the server as an integral part of React component tree: server components.

3. Components run only on the server i.e. their goal is to make part of UI a function of tha data that powers the application.

4. Since server components run only on the server, they have no interactivity, so no state, which means that they require exactly zero javascript.

5. RSC is NOT active by default in new React apps (e.g. Vite app): it needs to be implemeted by a framework like Next.js ("app router")

_Client Components_

1. "Regular" Components

2. Responsible for the interactivity of the application.

3. The part of the app where the UI is still a function of state.

**How RSC works behind the scenes**

1. When React encounters such a tree, the first step is to render all server components on the server.

2. Rendering a component simply results in a React Element.

3. Each of these react element really just contains the output of the server component.

4. So they only contain information on how the DOM for each component will look like. But they no longer conatin the code itself that was necessary to render each component.

NOTE: What happens to client components?

- So since we're still on the server, this is not where client components are gonna be rendered.

- The component tree contains placeholders or holes where each client component will eventually be rendered. Each placeholder contains serialized props passed from a server component to the client component, along with the URL to the script containing the actual component code.

- "Virtual DOM" of SC i.e. server component + Tree of CC i.e. client component = (RSC payload)

5. Now, this created (RSC payload) is sent to the client.

6. When a SC is re-rendered: React is able to merge ("reconcile") the current tree on the client with the new tree coming from the server.

7. As a result, UI state can be preserved when a SCre-renders, instead of completely re-generating the page as HTML.

**Simplified Review**

1. In React with React Server Components, we also start with a component tree, but a tree that usually has both server and client components, and is loacated on the server.

2. Now in the RSC architecture, the render process is split into two steps:

   a. The first step is to render only server components. The result of this is a virtual DOM of these already rendered server components, plus the un-rendered sub trees of client components.

   b. They both exist in the same data structure, which we called the RSC payload.

   c. Now in this RSC payload, there is some information for each client component that is essential for React to render these components on the client later.

   d. The second step is to send this RSC payload to the client. Now it's time to also render the client components.

   e. As a result, React will now have the complete virtual DOM ready to be committed to the actual DOM.

   NOTE: Steps don't wait for one another. Completed render work is streamed to client.

**Server Side Rendering**

1. SSR at runtime i.e. where HTML is generated for each incoming request, which is also called dynamic SSR.

2. SSR: "Just take the react component tree, render it as HTML, and send the HTML to the client i.e. the browser."

3. Now, beside that HTML, the React bundle, which contains React itself plus the component tree will also need to be sent to the browser, so that the HTML can be hydrated.

4. And "hydration" simply means adding back the interactivity to the HTML, with the only difference that the DOM has been generated on the server and not on the client i.e. "Also send the React code to make the HTML interactive."

5. RSC is NOT as same as SSR: they are separate technologies.

6. RSC does not replace SSR, but rather complements it i.e. to work together with it.

**What is React Suspense**

1. Built-in React component that we can use to catch/isolate components (or entire subtrees) that are not yet ready to be rendered because they are fetching data from an API or a database i.e. asynchronous work.

**How does suspense work**

1. While rendering, suspending component is found.

2. Go to closest Suspense parent (boundary) and discard already rendered children.

3. Display fallback component/JSX.

4. After async work is done, Render subtree under Suspense boundary.

**Partial pre-rendering**

1. New rendering strategy that combines static and dynamic rendering at the same route.

2. A static (pre-rendered) shell is served immediately from a CDN, leaving holes for dynamic content.

3. The slower dynamic content is streamed in as it's rendered on the server.

**How Next.js Caches data**

1. Caching: Storing fetched or computed data in a temporary location for future access, instaed of having to re-fetch or re-compute that data every time it's needed.

2. Next.js caches very aggressively: everything that is possible to cache is cached i.e. both on server and the users browser.

**Advanced: Server Component in Client Component**

1. The only way in which we can render a server component in a client component is by passing it as a prop.

**Optimistic UI**

1. Optimistic UI is a trick and a technique that we can use in order to improve the perceived performance of a use interface i.e.we assume that a certain asynchronous operation will be successfull, before it has even finished.

2. useOptimistic() hook basically takes two arguments:
   a. First, current state i.e. this is the value which is gonna return in the beginning and also while there is no asynchronous action running, so while no server action is pending.

   b. Second, updating function
