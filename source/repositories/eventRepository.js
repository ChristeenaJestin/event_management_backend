import supabase from "../config/db.js";

export const createEvent = async (eventData) => {
  const { data, error } = await supabase
    .from("events")
    .insert([eventData])
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const getAllEvents = async () => {
  const { data, error } = await supabase
    .rpc("get_events_with_count");

  if (error) throw error;

  return data;
};

export const getEventById = async (id) => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
};

export const updateEvent = async (id, updates) => {
  console.log("Updating Event:", id);
  console.log(updates);

  const { data, error } = await supabase
    .from("events")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
};

export const deleteEvent = async (id) => {
  const { error } = await supabase
    .from("events")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
};