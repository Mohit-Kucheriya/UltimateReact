**How to Plan a React Application**

1. Gather application **requirements** and **features**.

2. Divide the application into **pages**.

3. Divide the application into **features categories**.

4. Decide on what **libraries** to use (technology decisions).

**Features + Pages**

Features Categories

1. Bookings

2. Cabins

3. Guests

4. Dashboard

5. Check-in & Check-out

6. App settings

7. Authentication

**Necessary Pages**

1. Dashboard - /dashboard

2. Bookings - /bookings

3. Cabins - /cabins

4. Booking check-in - /checkin/:bookingId

5. App settings - /settings

6. User sign up - /users

7. Login - /login

8. Account settings - /account

**Technology Decisions**

1. Routing - React Router

2. Styling - Styled Components

3. Remote state management - React Query

4. UI state management - Context API

5. Form management - React Hook Form

6. Other tools - React icons, React hot toast, Recharts, date-fns, Supabase

**Applying GlobalStyles in the Application**

1. After creating the global styles, we need to apply them. In the app component, include the GlobalStyles component in the component tree.

2. This component does not accept any children and should be a sibling to the styled app component
