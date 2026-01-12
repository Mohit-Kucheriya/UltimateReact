"use server";

import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

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

  console.log(updateData);

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
