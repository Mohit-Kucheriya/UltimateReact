# The Wild Oasis — Internal Hotel Management System

Internal hotel management application built as part of an advanced React learning project.

## Overview

The Wild Oasis is an internal tool designed for hotel staff to manage cabins, bookings, and guest check-ins.  
The project focuses on building a real-world React application with modern server-state management patterns.

## Tech Stack

- React
- React Router
- React Query
- Supabase
- Styled Components

## Key Features

- Authentication and protected routes
- Manage cabins, bookings, and guests
- Client-side routing using React Router
- Server-state management with React Query
- Data fetching using `useQuery` and mutations using `useMutation`
- Automatic cache invalidation after create, update, and delete operations
- No manual loading or error state handling using local component state
- Reusable and consistent UI components built with Styled Components

## Architecture Decisions

### Why React Query?

React Query was chosen over `useEffect` + `fetch` to:
- Handle caching and background refetching
- Simplify async state management
- Keep UI in sync using query invalidation after mutations
- Reduce boilerplate code for loading and error states

## Live Demo

🔗 https://the-wild-oasis-sage-chi.vercel.app/

### Demo Access

To explore the application, use the following demo credentials:

- **Email:** demo@wildoasis.com  
- **Password:** Demo1234

