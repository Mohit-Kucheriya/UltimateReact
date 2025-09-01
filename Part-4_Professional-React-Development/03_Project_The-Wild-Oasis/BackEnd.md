**Setting Up a Free Backend with Supabase**

What is Supabase?

1. Service that allow developers to easily create a back-end with a Postgres database and a REST API.

2. Supabase will automatically create a database and a matching API so that we can very easily request and receive data from the server where the Postgres database is actually hosted.

**Modelling Application State**

State "Domains"/"Slices" - Feature Categories

1. Bookings - Bookings, Dashboard, Check-in and Check-out

2. Cabins - Cabins

3. Guests - Guests

4. Settings - App settings

5. Users - Authentication

All this state will be global remote state, stored within supabase. There will be one 'table' for each "slice" in the database. They will be stored within Supabase and managed on the front end using React Query.

**The Bookings Table**

1. Bookings are about renting a cabin.

2. So a booking needs information about what guest is booking which cabin: we need to connect them.

3. Supabase uses a Postgres DB, which is SQL (relational DB). So we join tables using foreign keys.

4. Created three essential tables: cabins, guests, and settings, each with specific fields matching project requirements.

5. Enabled Row Level Security on tables to ensure data access control.

6. Used appropriate data types for each field, including strings, integers, and floats.

**Adding Security Policies (RLS) - Accessing Data from Supabase**

Connecting Supabase With Our React App

1. we can either use the RESTful API URL or the client JavaScript library to connect? We will use the client JavaScript library

2. It is important to note that exposing the anon key on the client is safe if row level security (RLS) is enabled. Without RLS, exposing this key could allow malicious users to access or modify your database. However, with RLS enabled, anyone with this key can only perform actions allowed by the RLS policies.

3. Currently, the only allowed action is to read data from our four tables. Therefore, exposing this key to the client is completely safe because even if someone steals it, they cannot perform unauthorized actions unless explicitly permitted by RLS policies.
