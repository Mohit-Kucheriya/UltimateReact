# The Wild Oasis — Customer-Facing Website

Customer-facing website for The Wild Oasis hotel, built using Next.js App Router with a focus on server components, performance, and real-world booking flows.

## Overview

This application allows guests to explore the hotel, browse available cabins, view booked dates, and reserve cabins.  
Users can browse the website without authentication, while login is required for making reservations and managing profiles.

## Tech Stack

- Next.js (App Router)
- React
- Supabase
- Tailwind CSS
- Server Actions

## Key Features

- Public access to browse cabins, cabin details, and hotel information
- Authentication required for:
  - Reserving cabins
  - Viewing and updating user profile
- Cabin availability display with booked date ranges
- Reservation management with optimistic UI updates
- Clean separation between server and client components

## Architecture Decisions

### Why Next.js App Router?

The App Router was chosen to:
- Use **Server Components** for data-heavy and non-interactive pages
- Improve initial page load and performance
- Reduce client-side JavaScript where interactivity is not required

### Server vs Client Components

- **Server Components**
  - Pages that render cabin lists and static content
  - Data fetching directly on the server
- **Client Components**
  - Forms, buttons, and interactive UI elements
  - Reservation actions and profile updates

### Data Mutations & Revalidation

- Data mutations are handled using **Server Actions**
- During async operations:
  - Buttons are disabled
  - Pending states are shown
- Since data is not stored in client state:
  - UI is updated by revalidating cached data
  - `revalidatePath` is used after mutations to refresh server data

### Optimistic Updates

- Reservations are optimistically updated on the UI
- Background async operations handle final confirmation
- Ensures a responsive user experience during mutations

## Live Demo

🔗 https://the-wild-oasis-website-xi-lemon.vercel.app/
