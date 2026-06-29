import supabase from "../config/db.js";

// Used by Register
export const createUser = async (userData) => {
  const { data, error } = await supabase
    .from("users")
    .insert([userData])
    .select()
    .single();

  if (error) throw error;

  return data;
};

// Used by Login
export const findUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error) return null;

  return data;
};

// Used by Profile
export const getUserById = async (id) => {
  const { data, error } = await supabase
    .from("users")
    .select("id,name,email,role,profile_image")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
};

// Used by Update Profile
export const updateUser = async (id, updates) => {
  const { data, error } = await supabase
    .from("users")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
};