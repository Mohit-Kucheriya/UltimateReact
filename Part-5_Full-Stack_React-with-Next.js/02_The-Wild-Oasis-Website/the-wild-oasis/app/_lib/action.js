"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

// Update guest profile information
export async function updateGuest(formData) {
  // here we're now really on backend, doing basically doing backend development. Always make sure of two things: 1. First the user who is invokng the server action actually has the authorization to do. 2. Second, we also need to always treat all the inputs as unsafe i.e. we need to validate and sanitize them properly.
  const session = await auth();
  if (!session) throw new Error("Unauthorized! Please sign in first");

  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const nationalID = formData.get("nationalID");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Invalid national ID. Please provide a valid one");

  const updateData = {
    nationalID,
    nationality,
    countryFlag,
  };

  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

// Update reservation details
export async function updateReservation(formData) {
  const bookingId = Number(formData.get("bookingId"));

  // 1. Authentication
  const session = await auth();
  if (!session) throw new Error("Unauthorized! Please sign in first");

  // 2. Authorization: Check if the user is allowed to update this booking i.e. it belongs to them
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to update this booking");

  // 3. Building update data from form inputs
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // 4. Update the booking i.e. mutating the data
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  // 5. Error handling
  if (error) throw new Error("Booking could not be updated");

  // 6. Revalidating the cache for the bookings page
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");

  // 7. Redirecting
  redirect("/account/reservations");
}

// Delete reservation
export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized! Please sign in first");

  // Check if the user is allowed to delete this booking i.e. it belongs to them
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");

  revalidatePath("/account/reservations");
}

// Authentication actions
export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

// Sign out action
export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
