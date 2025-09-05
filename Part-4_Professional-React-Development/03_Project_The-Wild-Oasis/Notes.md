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

**React Hook Form**

1. React Hook Form is a library that helps you manage form state in React.

2. It provides a simple API for managing form state, validation, and error handling.

3. Using "register" function, we can register the form fields and their validations i.e.

```javascript
    {...register("name", {
    required: "Name is required",
    minLength: {
    value: 3,
    message: "Name must be at least 3 characters"
        }
    })}
```

Explanation: The "register" function is used to register the form fields and their validations. The first argument is the name of the field, and the second argument is an object that contains the validation rules for the field. In this case, we are setting a required validation rule for the "name" field and a minimum length validation rule for the "name" field. The validation rules can be any valid React Hook Form validation rule, such as "required", "minLength", "maxLength", "pattern", etc.

4. getValues() (without args) returns the entire form values object.

5. getValues("fieldName") returns the value of that specific field.
