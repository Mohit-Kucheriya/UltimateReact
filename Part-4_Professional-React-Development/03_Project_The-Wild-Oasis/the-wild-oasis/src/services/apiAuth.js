import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error("Could not sign up");
  return data;
}

export async function login({ email, password }) {
  console.log(email, password);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Could not login");
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error("Could not get user");
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Could not logout");
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password or fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error("Could not update user");
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: avatarError } = await supabase.storage
    .from("avatar")
    .upload(fileName, avatar);

  if (avatarError) throw new Error("Could not upload avatar");

  // 3. Update avatar in the user
  const { data: updatedUser, error: updatedUserError } =
    await supabase.auth.updatedUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`,
      },
    });

  if (updatedUserError) throw new Error("Could not update user avatar");
  return updatedUser;
}
