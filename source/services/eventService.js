import * as eventRepository from "../repositories/eventRepository.js";

export const createEvent = async (eventData) => {
  return await eventRepository.createEvent(eventData);
};

export const getAllEvents = async () => {
  return await eventRepository.getAllEvents();
};

export const getEventById = async (id) => {
  return await eventRepository.getEventById(id);
};

export const updateEvent = async (id, updates) => {
  return await eventRepository.updateEvent(id, updates);
};

export const deleteEvent = async (id) => {
  return await eventRepository.deleteEvent(id);
};