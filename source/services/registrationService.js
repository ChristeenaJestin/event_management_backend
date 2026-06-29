import * as registrationRepository from "../repositories/registrationRepository.js";

export const register = async (userId, eventId) => {

  const existing = await registrationRepository.checkRegistration(
    userId,
    eventId
  );

  if (existing) {
    throw new Error("You are already registered for this event.");
  }

  return await registrationRepository.registerForEvent({
    user_id: userId,
    event_id: eventId,
    status: "REGISTERED",
    attendance_status: false,
    registered_at: new Date()
  });
};

export const getParticipants = async (eventId) => {
  return await registrationRepository.getParticipants(eventId);
};