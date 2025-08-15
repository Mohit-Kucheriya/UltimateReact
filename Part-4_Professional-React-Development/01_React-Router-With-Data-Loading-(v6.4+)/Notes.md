**Installation of ESLint**

1. npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev

2. Create .eslintrc.json file - {
   "extends": "react-app"
   }
3. To change in vite.config.js -
   import eslint from "vite-plugin-eslint";
   plugins: [eslint()]

**File Structure**

1. For big projects, it is better to have feature based structure.

**React Router**

1. For routing, we can use react-router-dom.

2. So, createBrowserRouter is used to create a router. It takes an array of object, where each object is one route.

3. RouterProvider, the component that wraps the entire application, takes a router prop i.e. the router created using createBrowserRouter.
   e.g.

   ```js
   function App() {
     return <RouterProvider router={router} />;
   }
   ```

4. In worldwise app, we use declarative way i.e. this old way still works in modern React Router, but then we cannot use it load data or to submit data using forms.

   ```js
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
   </BrowserRouter>
   ```

5. But, in React Router v6, we do it in imperative way i.e. in order to enable data fetching or data loading with React Router.

   ```js
   import { createBrowserRouter, RouterProvider } from "react-router-dom";

   const router = createBrowserRouter([
     {
       path: "/",
       element: <Home />,
     },
     {
       path: "/about",
       element: <About />,
     },
     {
       path: "/contact",
       element: <Contact />,
     },
   ]);

   function App() {
     return <RouterProvider router={router} />;
   }
   ```

**Implement a Global application layout using React Router**

1. Create a AppLayout component, which we'll use as the parent route of every single route other route that we have in our application.

2. And then we made all the other routes child routes of AppLayout. So, they are all nested routes now.

3. And so then inside tha parent route i.e. AppLayout, we can use the 'Outlet' component to render whatever is the current nested route.

**Data Loading with React Router which is called loaders**

1. We create a function that fetches some data from an API.

2. We then provide that loader function to one of our routes and that route will fetch that data as soon as the application goes to that route.

3. And then in the end, once the data has arrived, it will be provided to the page component itself using a custom hook.

4. Now, this data loader function can be placed anywhere in our code base but the convention seems to be to place the loader for the data of a certain page inside the file of that page. So here in this case, we want to load the menu data, so we create a file called Menu.jsx and inside that file we place the loader.

5. So the loader function needs to return whatever data it wants to provide to the page component.

**Displaying a Loader Indicator using React Router i.e. useNavigation**

1. With this we'll be able to see wether the application is currently idle, loading or submitting.

2. And this information is actually for the entire application, not just for a single route.

**Handling Errors with Error Element**

1. Suppose, we have a route that is loading data and if the data fails to load, we want to show an error message.

2. So instead of rendering anything, we can use the ErrorElement component.

3. So, we specify the ErrorElement first up i.e. in the parent route, because these error that happens in the nested routes or the child routes, they will bubble up to the parent route.

4. We can place the ErrorElement itself inside the child route i.e. the route that is loading data.

**Writing Data with React Router "Actions i.e. how to write the data or to mutate the data on the server"**

1. "loaders" that we used are to read the data, "actions" are used to write data or to mutate the data.

2. Orders are made by sending a POST request to the server.

3. For that we use 'Form' component. As soon as we submit this special form that will then create a request that will basically intercepted by the action function as soon as we have it connected with React Router.

4. So again, whenever this form here will be submitted, behind the scenes, React Router will call the action function and it will pass in the request that was submitted.

5. And so here in the action function, we get the access to the request object and we can then use it to create the order.

6. So whenever there will be the form submission i.e. on the url /order/new, the action function will be called.
