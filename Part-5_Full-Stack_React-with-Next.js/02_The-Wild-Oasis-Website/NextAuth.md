**Setting up NextAuth**

1. Create a file in lib folder named auth.js

2. Before writing any code, we need to set-up the environment variables.

3. We need to add NEXTAUTH_URL and NEXTAUTH_SECRET which auth.js gonna read automatically from it.

4. Now we need to go google developer console and create a project.
   a. Need to set-up the project name.

   b. Go to APIs and Services > Credentials > OAuth consent screen i.e. the screen which gets displayed when we need to sign in to our app using google.

   c. Adding the domain name of our app.

   d. And where we want to redirect. i.e. http://localhost:3000/api/auth/callback/google.

   e. After we need to create OAuth client ID.

**What is Middleware in Next.js?**

1. Next.js middleware is a function that runs based on the incoming request but before the response is completed.

2. By default, middleware runs before every route in a project, but we can specify which paths using a matcher.

3. Only one middleware function: needs to be exported from middleware.js in the project root folder.

NOTE: there is actually one exception to the idea that middleware runs before a route is rendered.

4. Middleware needs to produce a response which can happens in two ways
   a. redirects or rewrites to some route in our app.

   b. send response directly to the client (usually in the form of a JSON object).

5. The 'auth' which we get from NextAuth gives us the current session but also serves as a middleware
