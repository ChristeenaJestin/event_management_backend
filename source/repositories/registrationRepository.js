import supabase from "../config/db.js";

export const registerForEvent = async (registrationData) => {
  const { data, error } = await supabase
    .from("registrations")
    .insert([registrationData])
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const checkRegistration = async (userId, eventId) => {
  const { data, error } = await supabase
    .from("registrations")
    .select("*")
    .eq("user_id", userId)
    .eq("event_id", eventId)
    .maybeSingle();

  if (error) throw error;

  return data;
};

export const getParticipants = async (eventId) => {
  const { data, error } = await supabase
    .from("registrations")
    .select(`
      id,
      status,
      registered_at,
      attendance_status,
      users(
        id,
        name,
        email,
        profile_image
      )
    `)
    .eq("event_id", eventId);

  if (error) throw error;

  return data;
};