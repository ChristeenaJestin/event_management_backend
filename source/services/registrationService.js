import * as registrationRepository from "../repositories/registrationRepository.js";

export const registerForEvent = async (userId, eventId) => {
  // Check if already registered
  const existing = await registrationRepository.checkRegistration(
    userId,
    eventId
  );

  if (existing) {
    throw new Error("You have already registered for this event");
  }

  return await registrationRepository.registerForEvent({
    user_id: userId,
    event_id: eventId,
    status: "CONFIRMED",
  });
};

export const getParticipants = async (eventId) => {
  const participants =
    await registrationRepository.getParticipants(eventId);

  return participants.map((p) => ({
    id: p.users?.id,
    name: p.users?.name,
    email: p.users?.email,
    profile_image: p.users?.profile_image,
    status: p.status,
    registered_at: p.registered_at,
    attendance_status: p.attendance_status,
  }));
};